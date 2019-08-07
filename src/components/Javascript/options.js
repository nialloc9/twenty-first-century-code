import {
  JAVASCRIPT_OVERVIEW,
  JAVASCRIPT_REDUX_PUSH,
  JAVASCRIPT_LIST_MAKER,
  JAVASCRIPT_SHOULD_I_INVEST,
  JAVASCRIPT_BLOCK_CHAIN,
  GENERATORS,
  ASYNC_AWAIT,
  CURRYING,
  HIGHER_ORDER_FUNCTIONS,
  REDUX_SAGA,
  REACT_RENDER_CALLBACKS,
  OPTIMIZATION,
  VCHECK,
  REDUX_REDUCER_MAP,
  REACT_LONDON_CSS_IN_JS
} from "../../constants/javascript";

export const dropdownOptions = [
  { key: JAVASCRIPT_OVERVIEW, value: JAVASCRIPT_OVERVIEW, text: "Overview" },
  {
    key: REACT_LONDON_CSS_IN_JS,
    value: REACT_LONDON_CSS_IN_JS,
    text: "React London CSS in JS"
  },
  {
    key: REDUX_REDUCER_MAP,
    value: REDUX_REDUCER_MAP,
    text: "A better way to handle redux reducers"
  },
  {
    key: JAVASCRIPT_BLOCK_CHAIN,
    value: JAVASCRIPT_BLOCK_CHAIN,
    text: "Block Chain"
  },
  {
    key: JAVASCRIPT_REDUX_PUSH,
    value: JAVASCRIPT_REDUX_PUSH,
    text: "Redux Push"
  },
  { key: ASYNC_AWAIT, value: ASYNC_AWAIT, text: "Async/Await" },
  { key: GENERATORS, value: GENERATORS, text: "Generators" },
  { key: CURRYING, value: CURRYING, text: "Currying" },
  {
    key: HIGHER_ORDER_FUNCTIONS,
    value: HIGHER_ORDER_FUNCTIONS,
    text: "Higher Order Functions"
  },
  { key: REDUX_SAGA, value: REDUX_SAGA, text: "Redux Sagas" },
  {
    key: REACT_RENDER_CALLBACKS,
    value: REACT_RENDER_CALLBACKS,
    text: "React Render Callbacks"
  },
  { key: OPTIMIZATION, value: OPTIMIZATION, text: "Optimization" },
  { key: VCHECK, value: VCHECK, text: "VCheck" },
  {
    key: JAVASCRIPT_LIST_MAKER,
    value: JAVASCRIPT_LIST_MAKER,
    text: "List Maker"
  },
  {
    key: JAVASCRIPT_SHOULD_I_INVEST,
    value: JAVASCRIPT_SHOULD_I_INVEST,
    text: "Should I Invest"
  }
];
