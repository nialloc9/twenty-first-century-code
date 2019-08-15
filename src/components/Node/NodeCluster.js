import React from 'react'
import Article from '../Common/Article';
import start from '../../static/images/projects/nodeCluster/start.png';

export default () => {

    const head = {
        title: "node clusters",
        meta: [
          {
            name: 'description',
            content: 'learn how create clusters to perform tasks concurrently in NodeJS'
          },
          {
            name: 'keywords',
            content: 'nodejs, cluster, concurrent, concurrency, nodejs'
          }
        ]
      };

    const data = [
        {
            type: 'image',
            src: start,
            alt: 'Node cluster running multiple processes'
        },
        {
            type: 'source',
            href: 'https://github.com/nialloc9/nodeCluster'
        },
        {
            type: 'paragraph',
            text: `Node inherently works on a single thread to process requests from the api asyncrounosly. This allows for non blockage of the thread.
            But as the saying going goes. Many hands make short work. By harnassing multiple cpu's we can handle more and more requests in shorter time.`
        },
        {
            type: 'code',
            code: `
            import cluster from 'cluster';
            import os from 'os';
            import { app } from './config';
            
            /**
             * is the cluster master? If not sete up server. If it is create new fork.
             */
            if(!cluster.isMaster) {
            
                app.get('/*', (req, res) => {res.send('process ' + process.pid + ' says hello!').end();})
            
                app.listen(8000, () => {
                    console.log('Process ' + process.pid + ' is listening to all incoming requests');
                });
            
            } else {
                //gets number of cpus
                const numWorkers = os.cpus().length;
            
                console.log('Master cluster setting up ' + numWorkers + ' workers...');
            
                //fork cluster n times
                for(let i = 1; i <= numWorkers; i++) {
                    cluster.fork();
                }
            
                //when a new fork is made
                cluster.on('online', (worker) => {
                    console.log('Worker ' + worker.process.pid + ' is online');
                });
            
                //when a fork ends
                cluster.on('exit', (worker, code, signal) => {
                    console.log('Worker ' + worker.process.pid + ' died with code: ' + code + ', and signal: ' + signal);
                    console.log('Starting a new worker');
                    cluster.fork();
                });
            }
            `
        },
        {
            type: 'paragraph',
            text: `To create multiple threads we need to know the amount of threads we can create. To do this we use an npm package called os.
            os has a method called cpu's that will return an array of available cpu's on the system. By getting the length of this array we can
            deduce the number of threads we can create. Interestingly if using Heruku it is recommended not to use this approach because the threads share system resources which
            could lead to a memory shortage for a thread if too many are created. Instead a environment variable called WEB_CONCURRENY is supplied which should be used instead.`
        },
        {
            type: 'paragraph',
            text: `The first thread created is called the master thread and this controls the creation and management of all other (worker) threads. When researching node clusters and mult threading
            I came across an article that tested the number of requests that could be handled by a multi threaded node server vs a single thread server. An interesting finding from this research was
            that if an application only needs to a single thread using node clusters can cause a negative effect. This is due to the sharing of resources and the time to create a new work thread by the master
            to handle the request. So therefore using node clusters is not always benificial. However, as the number of requests per second increasing the speed at which these can be handled the more
            threads that are available.`
        },
        {
            type: 'paragraph',
            text: `One of the problems of using a node server in the past is because usually a node server will run on a single thread if an error occurs and the thread shuts down then then the server crashes.
            However, using node clusters and it's multi threaded capability we can send a message up to the master from the worker thread where the error has occured and tell it to start a new thread in the place
            of the crashed worker thread. This results in virtually zero down time solving the issues related to failures on a single threaded application.`
        },
        {
            type: 'published',
            date: `02/12/2017`
        },
    ];

    return <Article head={head} data={data} />;
};