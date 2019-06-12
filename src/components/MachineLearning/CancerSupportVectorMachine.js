import React, { PureComponent } from "react";
import {Block, CodeBlock, SoftLink, Link, Image} from "../Common/Styled";
import graph from "../../static/images/projects/supportVectorMachine/hyperplanes.png";
import supportVectorMachine1 from "../../static/images/projects/supportVectorMachine/supportVectorMachine1.png";
import supportVectorMachine2 from "../../static/images/projects/supportVectorMachine/supportVectorMachine2.png";
import supportVectorMachine3 from "../../static/images/projects/supportVectorMachine/supportVectorMachine3.png";
import { remCalc } from "../../common/helpers";
import {
  STOCK_PREDICTOR,
  CANCER_CLASSIFIER
} from "../../constants/machineLearning";

class CancerClassifier extends PureComponent {
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
            alt="Support vector machine image"
          />
        </Block>

        <Block margin={`${remCalc(20)} 0`}>
          Source code:{" "}
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/nialloc9/machine-learning-support-vector-machine"
          >
            GitHub
          </Link>
        </Block>

        <Block margin={`${remCalc(20)} 0`}>
          The support vector machine used below works on our cancer dataset as
          used in{" "}
          <SoftLink to={`/machine-learning/${CANCER_CLASSIFIER}`}>
            Cancer classifier
          </SoftLink>{" "}
          k nearest neighbour example to classify and predict tumor classes
          ranging from malignent to non life threatning. Unlike other machine
          learning algorithms shown in{" "}
          <SoftLink to={`/machine-learning/${STOCK_PREDICTOR}`}>
            Stock predictor
          </SoftLink>{" "}
          and{" "}
          <SoftLink to={`/machine-learning/${CANCER_CLASSIFIER}`}>
            Cancer classifier
          </SoftLink>{" "}
          that work on 2 axis, the x and y. The support vector machine also uses
          hyperplanes. Because of this SVM can do both linear and classifcation
          operations. The SVM uses hyper planes that allow it to find best fit
          lines that are no longer linear. We can see from the above graph that
          the support vector machine creates a hyper plane H1, H2, H3.
          Hyperplane H3 seperates the data with the most margin and so therefore
          would be used even though H2 also seperates the data.
        </Block>

        <Block margin={`${remCalc(20)} 0`}>
          <Image
            src={supportVectorMachine1}
            margin="auto"
            size="big"
            alt="Support vector machine no obvious hyperplane"
          />
        </Block>

        <Block margin={`${remCalc(20)} 0`}>
          Now let's get a bit more complex. We can see from above that there is
          no obvious hyperplane that can seperate the data. Time to change axis.
          If we create a new axis z and say that the data points are x^2 + y^2
          we can now easily find a hyperplane to seperate the data shown below.
        </Block>

        <Block margin={`${remCalc(20)} 0`}>
          <Image
            src={supportVectorMachine2}
            margin="auto"
            size="big"
            alt="Support vector machine no obvious hyperplane"
          />
        </Block>

        <Block margin={`${remCalc(20)} 0`}>
          If we convert this green hyperplane line back to our original axis we
          can see that this is now a circle and it seperates our data perfectly
          into red and blue datapoints. We can see this below. This makes us
          able to classify seemingly inseperable data into differant classes.
          Luckily for libraries such as scikit learn handles the calculations
          for us leaving us to reep the benefits but a good understanding of
          what it does is imporant.
        </Block>

        <Block margin={`${remCalc(20)} 0`}>
          <Image
            src={supportVectorMachine3}
            margin="auto"
            size="big"
            alt="Support vector machine no obvious hyperplane"
          />
        </Block>

        <Block margin={`${remCalc(20)} 0`}>
          The same process is used for SVM as other machine learning algorithms.
          Fetch, format, train, optimize. You can see this in the example below.
          The example uses sci-kit learn to perform the calculations and do the
          leg work while adding new methods for saving our model and processing
          our data. Scikit learn makes it very easy and convenient to create an
          SVM without having to write the code ourselves. However, we must
          format our data into a useable format first. This is often the most
          tedious and time consuming part of machine learning but once we have
          done this we can use libraries such as{" "}
          <Link target="_blank" rel="noopener noreferrer" href="https://scikit-learn.org/stable">
            scikitlearn
          </Link>{" "}
          and frameworks such as Googles{" "}
          <Link target="_blank" rel="noopener noreferrer" href="https://www.tensorflow.org/">
            tensorflow
          </Link>{" "}
          to do the legwork of running algorithms and creating Neural Networks.
          We can see from the example we use pandas helper method
          data_frame.replace("?", -99999, inplace=True). This replaces all "?"
          with a -99999 value. This is what is called an outlyer because it is
          so far outside the main data that it does not have any real
          significance on the outcome. -99999 is a good value as with most data
          it will have little impact. Some parts of the data like the id are not
          needed so we can just remove them. We also use preprocessing.scale
          from scikitlearn which basically which standardizes the data on an
          axis with the mean at the center. We are looking for what class of
          tumor so we use "class" as our label. Next we use
          model_selection.train_test_split which is a very helpful function for
          spliting hte data into training and testing data. Basically all it
          does is split the data into 0.8 training and 0.2 or whatever you
          specify. Once the data is formatted we are good to go. I have added
          some helper functions for filtering data and saving our model once
          it's trained but apart from these there is nothing new here and we
          pass it to scikit learn to run through it's calculation.
        </Block>

        <CodeBlock margin={`${remCalc(20)} 0`}>
          {`
import numpy, pandas, pickle
from sklearn import preprocessing, model_selection, svm
from os import path

'''
To get datasets to work with go to archives.ics.uci.edu/ml/datasets.html
For this example we are going to use the Breast Cancer data set
'''


def filter_data_frame(df, filter_list):
    return df[filter_list]


def serialize(uri, obj):
    with open(uri, "wb") as file:
        pickle.dump(obj, file)


def read_pickle(uri):
    pickle_in = open(uri, "rb")
    return pickle.load(pickle_in)


def get_trained_classifier(uri, features_to_train, labels_to_train):
    if path.isfile(uri):
        return read_pickle(uri)
    else:
        clf = svm.SVC()
        clf.fit(features_to_train, labels_to_train)
        serialize(uri, clf)
        return clf


data_frame = pandas.read_csv('breast-cancer-wisconsin.data.txt')


'''
most algorithms recognise -99999 as an outlier and will treat it appropriately
in the real world datasets can have lots of missing data and if you dropped them all (df.dropna()) 
you could lose 50% of your data. You don't have to do that with -99999
'''

data_frame.replace("?", -99999, inplace=True)

data_frame.drop(['id'], 1, inplace=True)

features = numpy.array(data_frame.drop(['class'], 1))

features = preprocessing.scale(features)

labels = numpy.array(data_frame['class'])

features_train, features_test, labels_train, labels_test = model_selection.train_test_split(features, labels, test_size=0.2)

classifier = get_trained_classifier('breast_cancer_classifier_nearest_neighbour_svm.pickle', features_train, labels_train)

accuracy = classifier.score(features_test, labels_test)

print("Accuracy: ", accuracy)

# make sure that the array you are going to test with does not appear in the document already
example_measures = numpy.array([[4, 2, 1, 1, 1, 2, 3, 2,  1], [4, 2, 1, 2, 2, 2, 3, 2,  1]])

# change values to between 1 and -1
example_measures = example_measures.reshape(len(example_measures), -1)

prediction = classifier.predict(example_measures)

print(prediction)
`}
        </CodeBlock>

        <Block margin={`${remCalc(20)} 0`}>Published on 18/01/2019</Block>
      </Block>
    );
  }
}

export default CancerClassifier;
