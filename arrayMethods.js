const mySlice = (arr, start = 0, end = arr.length) => {
    let result = [];
    if (start < 0) {
        start = Math.max(arr.length + start, 0);
    } 
    if (end < 0) {
        end = Math.max(arr.length + end, 0);
    }
    for (let i = start; i < end && i < arr.length; i++) {
        result.push(arr[i]);
    }
    return result;
}

const myIndexOf = (arr, item, from = 0) => {
    if (from < 0) {
        from = Math.max(arr.length + from, 0);
    }
    for (let i = from; i < arr.length; i++) {
        if (arr[i] === item) {
            return i;
        }
    }
    return -1;
}

const myIncludes = (arr, item, from = 0) => {
    return myIndexOf(arr, item, from) !== -1;
}

console.log(mySlice([1, 2, 3, 4, 5], 1, 3));
console.log(myIndexOf([10, 20, 30, 40], 30)); 
console.log(myIncludes(["apple", "banana", "cherry"], "banana"));