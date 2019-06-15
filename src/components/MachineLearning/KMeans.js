import React, { PureComponent } from "react";
import {Block, CodeBlock, SoftLink, Image, Link} from "../Common/Styled";
import main from "../../static/images/projects/kMeans/main.png";
import kmeans from "../../static/images/projects/kMeans/kmeans.png";
import { remCalc } from "../../common/helpers";
import { MEAN_SHIFT } from "../../constants/machineLearning";

class KMeans extends PureComponent {
  render() {
    return (
      <Block
        maxWidth={remCalc(800)}
        tabletHorizontalMaxWidth={remCalc(600)}
        mobileMaxWidth={remCalc(300)}
      >
        <Block>
          <Image
            src={main}
            margin="auto"
            size="big"
            alt="K Means application running image"
          />
        </Block>

        <Block margin={`${remCalc(20)} 0`}>
          Source code:{" "}
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/nialloc9/machine-learning-k-means"
          >
            GitHub
          </Link>
        </Block>

        <Block margin={`${remCalc(20)} 0`}>
          Unlike the{" "}
          <SoftLink to={`/machine-learning/${MEAN_SHIFT}`}>
            Mean Shift algorithm
          </SoftLink>{" "}
          where we never specified how many clusters to return kMeans allows us
          to to specify how many clusters we want returned. KMeans is often
          confused with K nearest neighbors due to the similar name but it is
          important to know the difference when selecting the best algorithm for
          your model.
        </Block>

        <Block margin={`${remCalc(20)} 0`}>
          <Image
            src={kmeans}
            margin="auto"
            size="big"
            alt="K Means clustering image"
          />
        </Block>

        <Block margin={`${remCalc(20)} 0`}>
          As you can see from above kMeans algorithm classifies data into
          clusters that. The number of clusters k is determined by us and this
          is the number returned. This can be very useful when you have data
          that does not have labels(groups) assigned. Common use cases include
          segment users by purchase history and creating profiles based on user
          data. We can see an example f kMeans below with scikit-learn:
        </Block>

        <CodeBlock language="python" margin={`${remCalc(20)} 0`}>
          {`
from matplotlib import style, pyplot
import numpy as np
import random
from sklearn.cluster import KMeans
style.use('ggplot')


def get_random_int(min=1, max=20):
    return random.randint(min, max)


def graph_data(features, labels, centroids):
    colors = ["g.", "r.", "c.", "y."]

    for i in range(len(features)):
        pyplot.plot(features[i][0], features[i][1], colors[labels[i]], markersize=10)

    pyplot.scatter(centroids[:, 0], centroids[:, 1], marker="x", s=150, linewidths=5, zorder=10)

    pyplot.show()


features = np.array([[get_random_int(), get_random_int()],
              [get_random_int(), get_random_int()],
              [get_random_int(), get_random_int()],
              [get_random_int(), get_random_int()],
              [get_random_int(), get_random_int()],
              [get_random_int(), get_random_int()]])


classifier = KMeans(n_clusters=2)
classifier.fit(features)

centroids = classifier.cluster_centers_
labels = classifier.labels_

graph_data(features, labels, centroids)
`}
        </CodeBlock>

        <Block margin={`${remCalc(20)} 0`}>
          Using our classifier above we can now group data into segments and if
          you would like to see an example of a vanilla version of
          kNearestNeighbours there is one available on my{" "}
          <Link
            target="__blank"
            rel="noopener noreferrer"
            href="https://github.com/nialloc9/machine-learning-k-means/blob/master/vanilla_main.py"
          >
            github
          </Link>
          .
        </Block>

        <Block margin={`${remCalc(20)} 0`}>Published on 19/01/2019</Block>
      </Block>
    );
  }
}

export default KMeans;
