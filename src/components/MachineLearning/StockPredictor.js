import React, { PureComponent } from "react";
import {Block, CodeBlock, Link} from "../Common/Styled";
import Image from "../Common/ImagePopup";
import graph from "../../static/images/projects/stockPredictor/graph.png";
import algorithm from "../../static/images/projects/stockPredictor/algorithm.png";
import { remCalc } from "../../common/helpers";

class StockPredictor extends PureComponent {
  render() {
    return (
      <Block
        maxWidth={remCalc(800)}
        tabletHorizontalMaxWidth={remCalc(600)}
        mobileMaxWidth={remCalc(300)}
      >
        <Block>
          <Image
            src={graph}
            margin="auto"
            size="big"
            alt="Stock predictor image"
          />
        </Block>

        <Block margin={`${remCalc(20)} 0`}>
          Source code:{" "}
          <Link target="_blank" rel="noopener noreferrer" href="https://github.com/nialloc9/stock-predictor">
            GitHub
          </Link>
        </Block>

        <Block margin={`${remCalc(20)} 0`}>
          The stock predictor project is build using python and the sklearn
          library. Harnessing the power of linear regression it is able to
          predict future stock prices based on historical data. This data is
          fetched using the python tool quandl. Quandle is a free to use tool
          that gives us access to financial data. We can use it for fetching
          data on stock prices to feed into our predictor class.
        </Block>

        <Block margin={`${remCalc(20)} 0`}>
          <Image
            src={algorithm}
            margin="auto"
            size="big"
            alt="Linear regression algoritm. y = mx + b"
          />
        </Block>

        <Block margin={`${remCalc(20)} 0`}>
          We can see the linear regression algorithm used. Y stands for the
          dependant value and it is what we are trying to find. m refers to the
          slope which can be calculated as the change in y divided by the change
          in x or in code ( (mean(xs)*mean(ys)) - mean(xs*ys) ). b refers to the
          y interecept which is where based on historical data if it was
          extended out where would it hit the y axis. The best fit line is
          calculated by b = mean(ys) - (m*mean(xs)). Using both of these values
          we can now find y. y - mx +b for x of any number we want. This allows
          us to predict based on time(x) the value of y(stock price).
        </Block>

        <Block margin={`${remCalc(20)} 0`}>
          Based on the above algorithm scikit-learn trains based on historical
          data(x's(time) and y's(price)). After the classifier is trained it is
          assigned to self to be accessed later when predicting prices.
        </Block>

        <CodeBlock language="python" margin={`${remCalc(20)} 0`}>
          {`
import numpy, datetime, pickle
from classes.Stock import Stock
from sklearn import model_selection, preprocessing
from sklearn.linear_model import LinearRegression
from math import ceil
from os import path
from matplotlib import pyplot

class Predictor:

    def __init__(self):
        self.ticker = None
        self.stock = None
        self.classifier = None
        self.prediction = None
        self.accuracy = None
        self.data_frame = None

    def set_stock(self, stock_ticker=None):
        self.ticker = "WIKI/" + stock_ticker.upper()
        self.stock = Stock(self.ticker)
        self.stock.fetch_data()

    def get_ticker(self):
        return self.ticker

    def get_stock_data(self):
        return self.stock.get_data()

    # trains classifier
    def train(self):
        self.data_frame = self.get_stock_data().copy()

        self.data_frame = self.data_frame[["Adj. Open", "Adj. High", "Adj. Low", "Adj. Close", "Adj. Volume"]]

        high = self.data_frame["Adj. High"]
        opened = self.data_frame["Adj. Open"]
        close = self.data_frame["Adj. Close"]

        self.data_frame["HIGH_LOW_PERCENTAGE"] = (high - close) / close * 100.0

        self.data_frame["PERCENTAGE_CHANGE"] = (close - opened) / opened * 100.0

        self.data_frame = self.data_frame[["Adj. Close", "HIGH_LOW_PERCENTAGE", "PERCENTAGE_CHANGE"]]

        forecast_column = "Adj. Close"

        self.data_frame.fillna(-9999, inplace=True)

        forecast_out = int(ceil(len(self.data_frame) * 0.01))

        self.data_frame["label"] = self.data_frame[forecast_column].shift(-forecast_out)

        features = numpy.array(self.data_frame.drop(["label"], 1))

        features = preprocessing.scale(features)

        features_lately = features[-forecast_out:]

        # save for later use in test
        self.features_lately = features_lately

        features = features[:-forecast_out]

        self.data_frame.dropna(inplace=True)

        labels = numpy.array(self.data_frame["label"])

        features_train, features_test, labels_train, labels_test = model_selection.train_test_split = model_selection.train_test_split(features, labels, test_size=0.2)

        self.classifier = LinearRegression(n_jobs=-1)

        self.classifier.fit(features_train, labels_train)

        self.accuracy = self.classifier.score(features_test, labels_test)
        pass

    def get_accuracy(self):
        return self.accuracy

    '''
        predicts stock price
    '''
    def predict(self):
        self.prediction = self.classifier.predict(self.features_lately)

    def get_prediction(self):
        return self.prediction

    def plot_graph(self):
        self.data_frame["FORECAST"] = numpy.nan

        last_date = self.data_frame.iloc[-1].name
        last_unix = last_date.timestamp()
        one_day = 86400

        next_unix = last_unix + one_day

        for i in self.prediction:
            next_date = datetime.datetime.fromtimestamp(next_unix)
            next_unix += one_day

            self.data_frame.loc[next_date] = [numpy.nan for _ in range(len(self.data_frame.columns) - 1)] + [i]

        self.data_frame["Adj. Close"].plot()
        self.data_frame["FORECAST"].plot()
        pyplot.title(self.ticker.split("WIKI/")[1] + " stock price")
        pyplot.legend(loc=4)
        pyplot.xlabel('Date')
        pyplot.ylabel('Price')
`}
        </CodeBlock>

        <Block margin={`${remCalc(20)} 0`}>
          Using the predictor we can now predict our features_lately which refer
          to the future stock values that there is no prices associated. These
          are then all plotted on a graph showing the forecasted data versus the
          historical data. If you would like to see how scikit-learn calculates
          linear regression I have also provided a vanilla version of linear
          regression and can be found on my{" "}
          <Link
            target="__blank"
            rel="noopener noreferrer"
            href="https://github.com/nialloc9/machine-learning-linear-regression/blob/master/vanilla_regression_example.py"
          >
            github
          </Link>
          .
        </Block>

        <Block margin={`${remCalc(20)} 0`}>Published on 14/01/2019</Block>
      </Block>
    );
  }
}

export default StockPredictor;
