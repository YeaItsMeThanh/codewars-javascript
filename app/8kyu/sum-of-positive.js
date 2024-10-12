export const positiveSum = arr =>
    arr.reduce((acc, cur) => acc + (cur > 0 ? cur : 0), 0)
