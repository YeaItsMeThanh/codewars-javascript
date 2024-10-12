export const howManySmaller = (arr, n) =>
    arr.filter(e => +e.toFixed(2) < n).length
