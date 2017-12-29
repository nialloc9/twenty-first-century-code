import {
    NODE_OVERVIEW,
    NODE_CLUSTER,
    NODE_APOLLO,
    NODE_ASYNC_AWAIT
} from '../../constants/node';

export const dropdownOptions = [
    { key: NODE_OVERVIEW, value: NODE_OVERVIEW, text: 'Overview' },
    { key: NODE_CLUSTER, value: NODE_CLUSTER, text: 'Node Clusters' },
    { key: NODE_APOLLO, value: NODE_APOLLO, text: 'Apollo Chat' },
    { key: NODE_ASYNC_AWAIT, value: NODE_ASYNC_AWAIT, text: 'Async Await' }
];