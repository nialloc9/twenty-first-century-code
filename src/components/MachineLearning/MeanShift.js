import React, { PureComponent } from "react";
import Block from "../Common/Styled/Block";
import CodeBlock from "../Common/Styled/CodeBlock";
import SoftLink from "../Common/Styled/SoftLink";
import Image from "../Common/Styled/Image";
import graph from "../../static/images/projects/meanShift/graph.png";
import main from "../../static/images/projects/meanShift/main.png";
import theme from "../../config/theme";
import { remCalc } from "../../common/helpers";
import { K_MEANS } from "../../constants/machineLearning";

const {
  colors: { fontColor },
  fontSize,
  lineHeight
} = theme;

class MeanShift extends PureComponent {
  render() {
    return (
      <Block
        fontColor={fontColor}
        fontSize={fontSize}
        lineHeight={lineHeight}
        maxWidth={remCalc(800)}
        tabletHorizontalMaxWidth={remCalc(600)}
        mobileMaxWidth={remCalc(300)}
      >
        <Block>
          <Image src={graph} margin="auto" size="big" alt="Mean shift graph" />
        </Block>
        <Block margin={`${remCalc(20)} 0`}>
          Source code:{" "}
          <a
            target="_blank"
            href="https://github.com/nialloc9/machine-learning-mean-shift"
          >
            GitHub
          </a>
        </Block>
        <Block margin={`${remCalc(20)} 0`}>
          Apposed to the{" "}
          <SoftLink to={`/machine-learning/${K_MEANS}`}>
            K Means algorithm
          </SoftLink>{" "}
          where we specify the number of clusters we will return after running
          our application MeanShift uses hierarchal clustering so will decide
          how many clusters it returns. This is an important feature of the mean
          shift algorithm to remember as depending on your desired outcome you
          may to choose this or another algorithm instead.
        </Block>

        <Block margin={`${remCalc(20)} 0`}>
          Above you can see 3 clusters with 3 centeroids that have been returned
          from the mean shift algorithm. Initially all data points are
          centeroids and a radius is used. The features inside this radius are
          known as the bandwith. To begin with the algorithm selects a datapoint
          and gets the mean of all the datapoints inside the bandwith. This is
          the new center and the radius is drawn out from this again. It then
          gets the mean of all the features inside the bandwith of the new
          radius. If this has not changed since the previous center one of out
          cluster centeroids has been found. If it does change the process of
          getting bandwidth, mean, and center of new bandwith is repeated until
          it stops moving. Once it has stopped moving we have achieved what is
          known as "convergence" because inside our bandwith of our centeroid it
          does not matter what datapoint is selected to begin with it will come
          up with the same cluster again.
        </Block>

        <Block margin={`${remCalc(20)} 0`}>
          Weights can also be added to bandwidths so that a cluster can have
          multiple radii with differant weights (e.g 1, 2, 3, 4). The center
          radius would have the heighest weight of 4 working back to 1. This
          allows us to have more data points in a cluster but penalises for
          distance away from the center of the cluster.
        </Block>

        <Block>
          <Image src={main} margin="auto" size="huge" alt="Project running" />
        </Block>

        <Block margin={`${remCalc(20)} 0`}>
          Above we can see an example of the Mean Shift algorithm being used
          with scikit-learn. We can see that the clusters returned show us some
          interesting insights into our data. We can see that the cluster with
          the highest survival rate was cluster 1. When we dig into what type of
          passenger was in this cluster we can see that there is very high
          proportion of first class customers in this cluster. This can be
          because of differant reasons but one that cannot be ignored is that
          first class was at the top of the ship where the lifeboats were kept.{" "}
          <a
            target="__blank"
            href="https://www.historyonthenet.com/the-titanic-lifeboats"
          >
            [i]
          </a>
          Below we can see the code used to find these insights:
        </Block>

        <CodeBlock margin={`${remCalc(20)} 0`}>
          {`
import numpy, pandas
from sklearn.cluster import MeanShift
from sklearn import preprocessing

'''
    @description: filters data from a data frame
'''


def filter_data(df, data_filter):
    return df[data_filter]


'''
    @description: converts data frame data to numeric data
'''


def handle_non_numerical_data(df):
    # handling non-numerical data: must convert.
    columns = df.columns.values

    for column in columns:
        text_digit_values = {}

        def convert_to_int(val):
            return text_digit_values[val]

        # print(column,df[column].dtype)
        if df[column].dtype != numpy.int64 and df[column].dtype != numpy.float64:

            column_contents = df[column].values.tolist()
            # finding just the uniques
            unique_elements = set(column_contents)
            # great, found them.
            x = 0
            for unique in unique_elements:
                if unique not in text_digit_values:
                    # creating dict that contains new
                    # id per unique string
                    text_digit_values[unique] = x
                    x += 1
            # now we map the new "id" vlaue
            # to replace the string.
            df[column] = list(map(convert_to_int, df[column]))

    return df


data_frame = pandas.read_excel('titanic.xls')

original_data_frame = pandas.DataFrame.copy(data_frame)

data_frame.drop(['body', 'name'], 1, inplace=True)

data_frame.fillna(0, inplace=True)

data_frame = handle_non_numerical_data(data_frame)

data_frame.drop(['ticket', 'home.dest'], 1, inplace=True)

X = numpy.array(data_frame.drop(['survived'], 1).astype(float))

X = preprocessing.scale(X)
y = numpy.array(data_frame['survived'])

classifier = MeanShift()
classifier.fit(X)

labels = classifier.labels_

cluster_centers = classifier.cluster_centers_

original_data_frame['cluster_group'] = numpy.nan

for i in range(len(X)):
    original_data_frame['cluster_group'].iloc[i] = labels[i]

number_of_clusters = len(numpy.unique(labels))
survival_rates = {}

for i in range(number_of_clusters):
    temp_data_frame = original_data_frame[ (original_data_frame['cluster_group'] == float(i)) ]

    # print(temp_data_frame.head())

    survival_cluster = temp_data_frame[ (temp_data_frame['survived'] == 1) ]

    survival_rate = len(survival_cluster) / len(temp_data_frame)

    # print(i, survival_rate)

    survival_rates[i] = survival_rate

# We can see below that many more passengers in cluster 1 survived than others 75% versus 0 :36 and 3 at 11%
print("Cluster:Survival rate: ", survival_rates)

print("Type of customers in cluster 1 with highest survival rate:\n", original_data_frame[ (original_data_frame['cluster_group']==1) ])

print("Type of customers in cluster 0 with lower survival rate:\n", original_data_frame[ (original_data_frame['cluster_group']==0) ].describe())

print("Type of customer in cluster 2 with lowest survival rate:\n", original_data_frame[ (original_data_frame['cluster_group']==2) ].describe())

# Lets get the first class in cluster 0. We can see that they have a much worse survival rate than those in cluster 1 which has a higher average fare
cluster_0 = (original_data_frame[ (original_data_frame['cluster_group']==0) ])
cluster_0_fc = (cluster_0[ (cluster_0['pclass']==1) ])
print("Cluster 0 first class passenger have a lower chance of survival but there fare was lower:\n", cluster_0_fc.describe())
`}
        </CodeBlock>
        <Block margin={`${remCalc(20)} 0`}>
          Using our classifier above we can now group data into segments that
          are decided by the machine and if you would like to see an example of
          a vanilla version of mean shift there is one available on my{" "}
          <a
            target="__blank"
            href="https://github.com/nialloc9/machine-learning-mean-shift/blob/master/vanilla_main.py"
          >
            github
          </a>
          .
        </Block>
        <Block margin={`${remCalc(20)} 0`}>Published on 19/01/2019</Block>
      </Block>
    );
  }
}

export default MeanShift;
