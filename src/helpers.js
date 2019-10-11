
export const defaultSort = (x, data) => [...data];
export const sortByStatus = (status, data) => data.filter((item) => item.status === status);
export const descendingSort = (x, data) => data.sort((a, b) => b[x] - a[x]);

export const SORTING_STATUSES = {
    'default': defaultSort,
    'active': sortByStatus,
    'stars': descendingSort
};
