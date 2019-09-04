import React from 'react'
import Article from '../Common/Article';
import circleci from "../../static/images/projects/s3CircleCI/circleci.png";

export default () => {

  const head = {
    title: "s3, cloudfront circle CI pipeline",
    meta: [
      {
        name: 'description',
        content: 'learn how to deploy a website using circle CI, S3, and cloudfront'
      },
      {
        name: 'keywords',
        content: 'circle ci, s3 cloudfront circle ci, cloudfront, circle ci, s3 circle ci'
      }
    ]
  };

  const data = [
    {
      type: "image",
      src: circleci,
      size: "medium",
      alt: 'Circle CI Image'
    },
    {
      type: 'source',
      text: 'BitBucket',
      href: 'https://bitbucket.org/nialloc9/twentyfirstcenturycode'
    },
    {
      type: 'paragraph',
      text: `Circle CI is a great CI/CD tool that I would encourage any engineer to learn more about. 
      In this article we will look at how we can deploy a static website to S3 and invalidate the cloudfront cache. 
      It is assumed that the user already has their website already hosted in S3 and using cloudfront in front of it. If this is already set up 
      then the following circle CI config is totally reusable along with the Makefile.`
    },
    {
      type: 'paragraph',
      text: `Continuous integration is a practice that encourages developers to integrate their code into a master branch of a shared repository early and often. 
      Instead of building out features in isolation and integrating them at the end of a development cycle, code is integrated with the shared repository by each developer 
      multiple times throughout the day. With Circle CI the user authorizes it (in bitbucket or github) enabling it to run jobs on any commits to a defined branch. Each job is 
      run inside a container or VM notifying the user after completion. As it uses containers it makes it a very flexible and powerful tool.`
    },
    {
        type: 'code',
        language: 'yaml',
        code: `
version: 2
jobs:
    build:
    filters:
        branches:
        only: master
    docker: # run the steps with Docker
        - image: circleci/node:10.16
    steps: # a collection of executable commands
        - checkout # special step to check out source code to working directory
        - run:
            name: Update NPM
            command: sudo npm install -g npm@latest
        - restore_cache: # special step to restore the dependency cache
            # Read about caching dependencies: https://circleci.com/docs/2.0/caching/
            key: dependency-cache-{{ checksum "package.json" }}
        - run:
            name: Install Dependencies
            command: npm install
        - save_cache: # special step to save the dependency cache
            key: dependency-cache-{{ checksum "package.json" }}
            paths:
            - ./node_modules
        - run:
            name: Build Application
            command: npm run build
        - run:
            name: Install AWS SDK
            command: |
            sudo curl -O https://bootstrap.pypa.io/get-pip.py
            sudo python get-pip.py
            sudo pip install awscli --upgrade
        - run:
            name: Deploy To S3
            command: |
            export BUCKET_NAME="$BUCKET_NAME"
            make deploy_to_s3
        - run:
            name: Invalidate Cache
            command: |
            export DISTRIBUTION_ID="$DISTRIBUTION_ID"
            make invalidate_cache
        `
    },
    {
        type: 'paragraph',
        text: `Above we can see the circle CI configuration used for this twentyfirstcenturycode.com. It is a relatively simple 
        pipeline. The steps are clearly outlined above. The only additions needed to run this config are 4 environment variables that need 
        to be set inside circle CI:`
    },
    {
        type: 'list',
        data: ["AWS_ACCESS_KEY_ID", "AWS_SECRET_ACCESS_KEY", "BUCKET_NAME", "DISTRIBUTION_ID"]
    },
    {
        type: 'paragraph',
        text: `The key id and key are api keys that you create inside your AWS account. The bucket name is the name of the S3 bucket and the distribution id 
        is the cloudfront distribution id of your CDN. Once these are set the last thing needed will be the Makefile which can be found below. The reason for the Makefile here 
        is for interpolation where we want to to set the BUCKET_NAME but circle CI doesn't support this and this is my work around.`
    },
    {
        type: 'code',
        language: 'yaml',
        code: `
deploy_to_s3:
    aws s3 sync ./build s3://$BUCKET_NAME --delete

invalidate_cache:
    aws cloudfront create-invalidation --distribution-id $DISTRIBUTION_ID --paths '/*'
        `
    },
    {
        type: 'published',
        date: `04/09/2019`
    },
  ];

  return <Article head={head} data={data} />;
};