function mapForEach(arr, fn) {
    let newArr = [];
    for(let i = 0; i < arr.length; i++) {
        newArr.push(
            fn(arr[i])
        )
    };
    return newArr;
}

const newArr = mapForEach([1,2, 3], function(item) {
    return item * 3
})

const checkByLimitet = function(limiter) {
    return function(item, limiter) {
        return item > limiter;
    }.bind(this, limiter)
};


console.log(newArr)
