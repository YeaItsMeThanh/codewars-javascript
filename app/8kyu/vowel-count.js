export const getCount = str =>
    str.split('').filter(e => 'aeiou'.includes(e)).length
