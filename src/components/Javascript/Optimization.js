import React, { PureComponent } from "react";
import {Block, CodeBlock, Link} from "../Common/Styled";
import Image from "../Common/ImagePopup";
import optimization from "../../static/images/projects/optimization/optimization.jpg";
import { remCalc } from "../../common/helpers";

class Optimization extends PureComponent {
  render() {
    return (
      <Block
        maxWidth={remCalc(800)}
        tabletHorizontalMaxWidth={remCalc(600)}
        mobileMaxWidth={remCalc(300)}
      >
        <Block>
          <Image
            src={optimization}
            margin="auto"
            size="large"
            alt="List maker start"
          />
        </Block>

        <Block>
          Source code:{" "}
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/nialloc9/coding-challenges/blob/master/maxProfit.js"
          >
            GitHub
          </Link>
        </Block>

        <Block margin={`${remCalc(20)} 0`}>
          Optimization of your code can really help performance. It also helps
          us learn and progress as developers as it forces us to find better
          solutions than what is already known. It helps us try to think
          differantly about a problem and how to acheive the best results.
          However, sometimes optimizing code can come at a cost such as reduced
          readability. The pros and cons must be weighed before optimizing. Also
          premature optimization can come with it's own issues so it is best to
          avoid this and instead optimize after where needed. Below is an
          example of a task assigned. We will multiple differant solutions each
          optimized more than the other. A very good high level optimization
          tool is big O notation and it is good to keep this in mind as you
          write code. I won't go into detail of how big O notation works but at
          a high level it is used to give a high level overview of the
          complexity of a peice of code in terms of time and space.
        </Block>

        <CodeBlock language="javascript" margin={`${remCalc(20)} 0`}>
          {`
// task: create a function that gets the max profit possible from an array of stock prices listed in order of time.

const stocks = [5, 11, 6, 1, 8];

/**
 * @description First attempt is the brute force attempt looping through each stock price and comparing it against the the others.
 * complexity: time On^2 space O(8)
 * @param {[{int}]} stockPrices
 */
function maximiseProfitsv1(stockPrices) {
  let maxProfit = 0;

  // loop over stocks
  for (let i = 0; i < stockPrices.length; i++) {
    // compare current against all other stocks

    for (let j = 0; j < stockPrices.length; j++) {
      // get the lower and larger time between the 2
      const early = Math.min(i, j);
      const later = Math.max(i, j);

      // get the lower and larger stock prices between the 2
      const earlyPrice = stockPrices[early];
      const laterPrice = stockPrices[later];

      // get the differance between the 2
      const profit = laterPrice - earlyPrice;

      // get the larger of the 2 and mark it as max profit
      maxProfit = Math.max(maxProfit, profit);
    }
  }

  return maxProfit;
}

const v1Result = maximiseProfitsv1(stocks);

// console.log(v1Result); --> 7
`}
        </CodeBlock>

        <Block margin={`${remCalc(20)} 0`}>
          The first attempt at the task envolves using brute force to solve the
          problem. This works but it has issues. What if the profit is a
          negative because the stock price is always falling? Could it be easier
          to read? Also it is quite complex with big O of time O(n^2) and space
          O(8).
        </Block>

        <CodeBlock language="javascript" margin={`${remCalc(20)} 0`}>
          {`
/**
 * @description We can clean up the code by remembering we only need what omes after the early stock price as selling comes after buying. It also reduces the space complexity
 * complexity: time O(n^2) and space O(6)
 * @param {[{int}]} stockPrices
 */
function maximiseProfitsv2(stockPrices) {
  let maxProfit = 0;

  // loop over stocks
  for (let i = 0; i < stockPrices.length; i++) {
    // compare current against all other stocks

    // we know we have to buy before selling so we can set this as the earlier price always
    const earlyPrice = stockPrices[i];

    // we only need to loop through later prices
    for (let j = earlyPrice + 1; j < stockPrices.length; j++) {
      // buying has to come after selling
      const laterPrice = stockPrices[j];

      // get the differance between the 2
      const profit = laterPrice - earlyPrice;

      // get the larger of the 2 and mark it as max profit
      maxProfit = Math.max(maxProfit, profit);
    }
  }

  return maxProfit;
}

// console.log(maximiseProfitsv2(stocks)); --> 7
`}
        </CodeBlock>

        <Block margin={`${remCalc(20)} 0`}>
          The second attempt cleans up the code by moving the earlyPrice outside
          of the second for loop. We also reduced the space complexity to O(6)
          as we were able to remove 2 variables early and later.
        </Block>

        <CodeBlock language="javascript" margin={`${remCalc(20)} 0`}>
          {`
/**
 * @description We can reduce the complexity of the code by saving the min price seen previously
 * complexity: time O(n) and space O(4)
 * @param {[{int}]} stockPrices
 */
function maximiseProfitsv3(stockPrices) {
  let maxProfit = 0;

  // first stock is the minmum price seen
  let minPrice = stockPrices[0];

  // loop over stocks
  for (let i = 0; i < stockPrices.length; i++) {
    const current = stockPrices[i];

    // get the min price between current and minimum stock seen so far
    minPrice = Math.min(minPrice, current);

    // maxProfit is the larger of previous maxProfit vs current maxProfit
    maxProfit = Math.max(maxProfit, current - minPrice);
  }

  return maxProfit;
}

// console.log(maximiseProfitsv3(stocks)); --> 7
`}
        </CodeBlock>

        <Block margin={`${remCalc(20)} 0`}>
          The third attempt reduces the time complexity and space complexity by
          removing one of the for loops. This is the first major optimzation of
          time complexity we have done and it makes a big difference reducing
          the time complexity to O(n). We can do this by assigning the minPrice
          outside of the for loop because we know that the minPrice will start
          as the first value in the array. We can then update it if we find one
          lower.
        </Block>

        <CodeBlock language="javascript" margin={`${remCalc(20)} 0`}>
          {`
/**
 * @description We can reduce the complexity of the code by saving the min price seen previously
 * complexity: time O(n) and space O(3)
 * @param {[{int}]} stockPrices
 */
function maximiseProfitsv4(stockPrices) {
  if (stockPrices.length < 2) {
    throw new Error("Minimum of 2 stocks required");
  }

  let maxProfit = stockPrices[1] - stockPrices[0];

  // first stock is the minmum price seen
  let minPrice = stockPrices[0];

  // loop over stocks. we have to buy before we sell so start at 1 as 0 is already used.
  for (let i = 1; i < stockPrices.length; i++) {
    const current = stockPrices[i];

    // maxProfit is the larger of previous maxProfit vs current maxProfit
    maxProfit = Math.max(maxProfit, current - minPrice);

    // get the min price between current and minimum stock seen so far
    minPrice = Math.min(minPrice, current);
  }

  return maxProfit;
}

// console.log(maximiseProfitsv4([8, 4, 3, 2])); --> -1
`}
        </CodeBlock>

        <Block margin={`${remCalc(20)} 0`}>
          Another optimization we can do is is to move the minPrice out of the
          loop and save it. Now we can just reassign it each time a new min
          price is found. Also we have optimized to allow us to return the least
          loss possible if all values would result in a loss. Previously this
          would have been 0. We acheived this by assigning a maxProfit from the
          first and second elements in the array at the start as we know this
          will occur anyway. Next we start the loop at the second element as we
          have already used the first.
        </Block>

        <Block margin={`${remCalc(20)} 0`}>Published on 11/09/2018</Block>
      </Block>
    );
  }
}

export default Optimization;
