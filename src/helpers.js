
export const descendingSort = (x, data) => data.sort((a, b) => b[x] - a[x]);

export const sortByStatus = (status, data) => data.filter((item) => item.status === status);

export const defaultSort = (x, data) => [...data];
