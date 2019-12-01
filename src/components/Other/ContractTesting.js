import React from 'react'
import Article from '../Common/Article';
import main from '../../static/images/projects/contractTesting/main.png';
import contractTesting from '../../static/images/projects/contractTesting/contract.png';

export default () => {

    const head = {
        title: "apollo federated graphql API contract testing",
        meta: [
          {
            name: 'description',
            content: 'learn how to add contract tests to a graphQL API'
          },
          {
            name: 'keywords',
            content: 'contract testing, test graphql, apollo server, testing apollo server, pact.io, pactflow.io'
          }
        ]
      };

    const data = [
        {
            type: "image",
            src: main,
            alt: 'Project running',
            size: "huge"
        },
        {
            type: 'source',
            text: "Github",
            href: 'https://github.com/nialloc9/pact-contract-testing'
        },
        {
            type: 'source',
            text: "medium.com",
            prefix: "Also available on",
            href: 'https://medium.com/@nialloc9/contract-testing-an-apollo-federated-gateway-with-pact-io-and-pactflow-io-3d185da2985c'
        },
        {
            type: 'paragraph',
            text: `In recent months I have been doing a-lot of thinking and planning in regards to creating an Apollo Server federated gateway. And as part of that a testing strategy. While this post will not discuss the entire testing strategy I would like to discuss a small part of it. Contract testing. While researching I found lot’s of information to add contract testing to Restful API’s but as always with newer technologies the information available for graphql was less than forthcoming. In this article I would like to discuss what I have discovered and how to implement contract testing for your application.`
        },
        {
            type: 'paragraph',
            text: `First off if you are not using Apollo do not worry. Apollo exposes a graph just like any other graphql technology and as such the information provided here will apply to your application too.`
        },
        {
            type: 'paragraph',
            text: `One of the first things I needed to decide when looking at contract testing was whether to host my own broker or use a managed service. As of the time of writing I have not committed to either. Instead I have just finished creating a POC using pactflow as a managed service. pactflow.io has a free tier that allows you to reuse the project I have created if you wish.`
        },
        {
            type: 'paragraph',
            text: `So let’s get started. For this project I have used docker, nodejs, mocha, apollo, and pact.io. To get started let’s briefly discuss what contract testing is. Contract tests are concerned with the flow of data between a consumer and a provider. In the beginning this confused me. What is a consumer and what is a provider? Well to understand that let’s look at the diagram below.`
        },
        {
            type: 'image',
            src: contractTesting,
            alt: 'Contract testing',
            hasLegend: true
        },
        {
            type: 'paragraph',
            text: `The provider in this case is the API as it is what serves the data to the consumers. The consumers could be anything, another API or a front end application, whatever is ‘consuming’ your data. In between them exists a contract. This contract effectively says ‘I expect when this endpoint is called with this query that this data is returned’.`
        },
        {
            type: 'paragraph',
            text: `Importantly the contracts do not exist on the provider or the consumer but instead on a third party called the the ‘broker’. This broker makes the contract available to both the consumer and the provider to run tests against. The consumer creates contracts against what is expected and uploads these to the broker. The provider then runs these contracts against it’s API meaning that if the provider changes the structure of it’s data and how the consumer is expecting it then it will fail and highlight that the changes made are breaking the contract and what is expected by the consumer. This is a very important safety net for enterprises to ensure that accidental breakages do not slip through the net leading to applications that consume this API to go down. I think most of us have seen a case where especially in micro services where something breaks on the front end and the issue has to be tracked back through multiple services to find that a change to a service ended up breaking what was expected further down.`
        },
        {
            type: 'paragraph',
            text: `So let’s dig in. To get started the first thing we require is a contract and as mentioned this is created by the consumer. So let’s look at this consumer below. It’s relatively straight forward where we are sending a request to the server with a query for hello1 data. It is important to note that it is not our server here but a mock server that will be spun up using pact.io to run this.`
        },
        {
            type: 'code',
            code: `
// ./consumer.js
const axios = require('axios');
const url = 'http://localhost:5000';
const hello1Query = () => axios({
    url,
    method: 'post',
    data: {
            query: '{
                    hello1
            }'
},
    Accept: 'api_version=2',
    headers: { 'Content-Type': 'application/json' }
}).then((result) => {
    return result.data;
});
module.exports.query = hello1Query;
            `
        },
        {
            type: 'paragraph',
            text: `As we can see from above we now need to create a contract for this query and what is expected to be returned. Below we can see how we create a pact mock server that upon receiving a query for hello1 data that it responds with a specific set of headers and body. This is important and should be what you are expecting from the API you intend to consume.`
        },
        {
            type: 'code',
            code: `
const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
const path = require("path");
const { query } = require("./consumer");
const { Pact, GraphQLInteraction } = require("@pact-foundation/pact");
const expect = chai.expect
chai.use(chaiAsPromised)
describe("Federated GraphQL example", () => {
const provider = new Pact({
    port: 5000,
    log: path.resolve(process.cwd(), "logs", "mockserver-       integration.log"),
    dir: path.resolve(process.cwd(), "pacts"),
    consumer: "GraphQLConsumer",
    provider: "GraphQLProvider",
})
before(() => provider.setup())
after(() => provider.finalize())
describe("query hello1 on /", () => {
    before(() => {
            const graphqlQuery = new   GraphQLInteraction().uponReceiving("a hello1 request")
.withQuery(
'
   {
     hello1
   }
'
)
.withRequest({
   path: "/",
   method: "POST",
})
.willRespondWith({
   status: 200,
   headers: {
        "Content-Type": "application/json; charset=utf-8",
   },
   body: {
        data: {
         hello1: "Hello from test1 server"
        },
   },
})
   return provider.addInteraction(graphqlQuery)
})
it("returns the correct response", () => {
   return expect(query()).to.eventually.deep.equal({ data: { hello1: "Hello from test1 server" } })
})
   // verify with Pact, and reset expectations
   afterEach(() => provider.verify())
  })
})
            `
        },
        {
            type: 'paragraph',
            text: `The second step in the process is to publish the contracts created by the consumer to the pact broker which in this case is pactflow but if you decide to host your own than only the url will need to change. For this I have created a reusable node script.`
        },
        {
            type: 'code',
            code: `
// ./publish.js
const pact = require("@pact-foundation/pact-node");
const path = require("path");
const { PACT_BROKER_TOKEN, PACT_BROKER_URL } = process.env;
const opts = {
    pactFilesOrDirs: [
    path.resolve(__dirname, "pacts/graphqlconsumer-graphqlprovider.json"),
    ],
    pactBroker: PACT_BROKER_URL,
    pactBrokerToken: PACT_BROKER_TOKEN,
    tags: ["test"],
    consumerVersion: "1.0.2"
}
pact
.publishPacts(opts)
.then(() => {
    console.log("Pact contract publishing complete!")
    console.log("")
    console.log('Head over to $PACT_BROKER_URL and login to see your contracts.')
})
.catch(e => {
    console.log("Pact contract publishing failed: ", e)
})
            `
        },
        {
            type: 'paragraph',
            text: `Once these contracts are available on your broker it’s time to add tests to your provider to ensure it returns what is expected by the consumer. For this I would usually crate a reusable script but for the purpose of this demo I have hardcoded the config. There are a couple of things to highlight here.`
        },
        {
            type: 'paragraph',
            text: `First the provider is the name of the contract you created by your consumer that you wish to test against.`
        },
        {
            type: 'paragraph',
            text: `Secondly providerBaseUrl is the url your application runs on. Strangely @pact-foundation/pact does not seem to allow us to change the port and is always looking to send requests to port 51457. For this POC it was simple enough to just map 4000 to 51457 inside the docker compose file.`
        },
        {
            type: 'paragraph',
            text: `Third, tags can be added so that multiple contracts for different environments can be added. Maybe you want to have a set of contracts for staging and a set for production.`
        },
        {
            type: 'paragraph',
            text: `And lastly, providerVersion is the version of the contract you wish to test. It is best practice to tag and add a version to each contract you upload. I would recommend semver instead of something like git hashes as it’s easy to see which one is older.`
        },
        {
            type: 'code',
            code: `
const { Verifier } = require('@pact-foundation/pact');
const { PACT_BROKER_TOKEN, PACT_BROKER_URL } = process.env;
describe('Pact Verification', () => {
    it('validates the contract provided by the consumer', () => {
    const opts = {
        provider: 'GraphQLProvider',
        providerBaseUrl: 'http://localhost:51457',
        pactBrokerUrl: PACT_BROKER_URL,
        pactBrokerToken: PACT_BROKER_TOKEN,
        tags: ['test'],
        publishVerificationResult: true,
        providerVersion: '1.0.2',
        logLevel: 'DEBUG',
    };
    return new Verifier(opts).verifyProvider().then(output => {
    console.log('Pact Verification Completed')
    console.log(output);
    });
});
});
            `
        },
        {
            type: 'paragraph',
            text: `So that is it. I hope this helps you test your graphql endpoints using pact.io and pactflow.io. As you can see there are differences to contract testing a Restful API and hopefully using this guide you can add a safety net to ensure your providers never break your consumers again. All code is available on my github and I strongly recommend cloning the repo so you can play around with pact.io without spending time setting it up and dealing with the quirks of testing against graphql.`
        },
        {
            type: 'published',
            date: `01/12/2019`
        },
    ];

    return <Article head={head} data={data} />;
};