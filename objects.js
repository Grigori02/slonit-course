const getNumericValuesSum = (userData) => {
    return Object.values(userData)
        .filter(value => typeof value === 'number')
        .reduce((sum, num) => sum + num, 0);
}

const getSortedNumericKeys = (userData) => {
    return Object.entries(userData)
        .filter(([key, value]) => typeof value === 'number')
        .sort((a, b) => b[1] - a[1])
        .map(([key]) => key);
}

const userData = { name: 'Vasya', friends: 5, likes: 19, projects: 7 };
console.log(getNumericValuesSum(userData));
console.log(getSortedNumericKeys(userData)); 