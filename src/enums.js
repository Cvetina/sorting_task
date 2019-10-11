import { descendingSort, sortByStatus, defaultSort } from './helpers'

const SORTING_STATUSES = {
    'default': defaultSort,
    'active': sortByStatus,
    'stars': descendingSort
};
export default SORTING_STATUSES;
