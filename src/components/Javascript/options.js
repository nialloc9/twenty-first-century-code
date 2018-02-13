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
    REDUX_SAGA
} from '../../constants/javascript';

export const dropdownOptions = [
    { key: JAVASCRIPT_OVERVIEW, value: JAVASCRIPT_OVERVIEW, text: 'Overview' },
    { key: JAVASCRIPT_BLOCK_CHAIN, value: JAVASCRIPT_BLOCK_CHAIN, text: 'Block Chain' },
    { key: JAVASCRIPT_REDUX_PUSH, value: JAVASCRIPT_REDUX_PUSH, text: 'Redux Push' },
    { key: ASYNC_AWAIT, value: ASYNC_AWAIT, text: 'Async/Await' },
    { key: GENERATORS, value: GENERATORS, text: 'Generators' },
    { key: CURRYING, value: CURRYING, text: 'Currying' },
    { key: HIGHER_ORDER_FUNCTIONS, value: HIGHER_ORDER_FUNCTIONS, text: 'Higher Order Functions' },
    { key: REDUX_SAGA, value: REDUX_SAGA, text: 'Redux Sagas' },
    { key: JAVASCRIPT_LIST_MAKER, value: JAVASCRIPT_LIST_MAKER, text: 'List Maker' },
    { key: JAVASCRIPT_SHOULD_I_INVEST, value: JAVASCRIPT_SHOULD_I_INVEST, text: 'Should I Invest' },
];