import React, { PureComponent } from "react";
import {Block, CodeBlock, SoftLink, Image, Link} from "../Common/Styled";
import graph from "../../static/images/projects/cancerClassifier/kNearestNeighbours.png";
import clusters from "../../static/images/projects/cancerClassifier/clusters.png";
import { remCalc } from "../../common/helpers";
import { STOCK_PREDICTOR } from "../../constants/machineLearning";

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
            alt="Stock predictor image"
          />
        </Block>

        <Block margin={`${remCalc(20)} 0`}>
          Source code:{" "}
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/nialloc9/machine-learning-nearest-neighbour"
          >
            GitHub
          </Link>
        </Block>

        <Block margin={`${remCalc(20)} 0`}>
          With linear regression as used in the{" "}
          <SoftLink to={`/machine-learning/${STOCK_PREDICTOR}`}>
            Stock predictor
          </SoftLink>{" "}
          project the objective was to create a model that best fit the data.
          With KNearestNeighbours the objective is to create a model that best
          seperates the data. This type of algorithm is sometimes referred to as
          a "classification" algorithm because it classifies your data into
          groups of data. These groups of data are called "clusters" and are
          used for segmenting data.
        </Block>

        <Block margin={`${remCalc(20)} 0`}>
          <Image
            src={clusters}
            margin="auto"
            size="big"
            alt="Linear regression algoritm. y = mx + b"
          />
        </Block>

        <Block margin={`${remCalc(20)} 0`}>
          A very basic example of clusters would be if you had data that was
          either positive or negative then you could say there are 2 clusters. A
          negative and a positive cluster. Then when testing data against the
          model you would find it's nearest neighbouring data points and from
          them decide if your new data points are either positive or negative.
          We would for example find the new data points nearest neighbours
          denoted as k and then find what cluster they fall into. If we had k of
          then we would find the 3 nearest neighbours and democratically decide
          if our new data point is a positive or a negative. For example if 2 of
          the neighbours are negative and only one positive we can say that the
          new data point is also negative. In KNeareset neighbours unlike linear
          regression and other algorithms we don't say refer to accuracy but
          instead confidence. So for the example above we could say we know with
          66% confidence the data point is negative.
        </Block>

        <Block margin={`${remCalc(20)} 0`}>
          The{" "}
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/nialloc9/styledComponents"
          >
            "euclidean distance"
          </Link>{" "}
          is used to determine what the nearest neighbours are. On large data
          sets kNearestNeighbours becomes inefficient as the tedious process of
          finding and comparing nearest neighbours can become slow and cumersome
          but for small datasets it can be very useful. Below you can see an
          example of scikit-learn using kNearestNeighbours to classify data into
          clusters. Below you can see how to classify data using
          kNearesteNeighbours.
        </Block>

        <CodeBlock margin={`${remCalc(20)} 0`}>
          {`
import numpy, pandas, pickle
from os import path
from sklearn import neighbors, model_selection

'''
    Description:
        Serializes a an object into a pickle file
'''


def serialize(uri, obj):
    with open(uri, "wb") as file:
        pickle.dump(obj, file)


'''
    Description: 
        reads a pickle file
'''


def read_from_pickle(uri):
    pickle_in = open(uri, "rb")
    return pickle.load(pickle_in)


'''
    Description:
        gets a trained classifier from file or creates a new one    
'''


def get_trained_classifier(uri, features_to_train, labels_to_train):
    if path.isfile(uri):
        return read_from_pickle(uri)
    else:
        clf = neighbors.KNeighborsClassifier()
        clf.fit(features_to_train, labels_to_train)
        serialize(uri, clf)
        return clf


'''
    Description:
        normalizes data so that it is not influenced by its index        
'''


def normalize(features_to_process):
    return preprocessing.scale(features_to_process)


# fetch
data_frame = pandas.read_csv('breast-cancer-wisconsin.data.txt')


# organize
data_frame.replace("?", -99999, inplace=True)

data_frame.drop(['id'], 1, inplace=True)

features = numpy.array(data_frame.drop(['class'], 1))

labels = numpy.array(data_frame['class'])

# train
features_train, features_test, labels_train, labels_test = model_selection.train_test_split(features, labels, test_size=0.2)

classifier = get_trained_classifier('breast_cancer_pickle.pickle', features_train, labels_train)

# test
accuracy = classifier.score(features_test, labels_test)

print("Accuracy: ", accuracy)

# predict

test_data = numpy.array([[4, 2, 1, 1, 1, 2, 3, 2,  1], [4, 2, 1, 2, 2, 2, 3, 2,  1]])

test_data = test_data.reshape(len(test_data), -1)

predict = classifier.predict(test_data)

print("Prediction: ", predict)

`}
        </CodeBlock>

        <Block margin={`${remCalc(20)} 0`}>
          Using our classifier above we can now predict which cluster our data
          will fall into and if you would like to see an example of a vanilla
          version of kNearestNeighbours there is one available on my{" "}
          <Link
            target="__blank"
            rel="noopener noreferrer"
            href="https://github.com/nialloc9/machine-learning-nearest-neighbour/blob/master/vanilla_main.py"
          >
            github
          </Link>
          .
        </Block>

        <Block margin={`${remCalc(20)} 0`}>Published on 17/01/2019</Block>
      </Block>
    );
  }
}

export default CancerClassifier;
