import React from 'react'
import Article from '../Common/Article';
import machineLearning from "../../static/images/new/machineLearning.png";

export default () => {
  const data = [
    {
      type: "image",
      src: machineLearning,
      alt: 'Machine learning'
    },
    {
      type: 'paragraph',
      text: `Machine learning is one of the most incredible and useful tools we
      have to date. Using alogorithms and statistical models we can train
      the computer to make it's own judgements and predictions based on
      training data. For me, I find it all fascinating. It appeals to the
      "builder" in me. I love building complex applications and to be able
      to power these applications with a brain that can improve it self
      without being explicitly programmed to do so. Wow!!.`
    },
  ];

  return <Article data={data} />;
};