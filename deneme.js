number1 = 5
number2 = 3
result1 = (number1 + number2)
result1_wrong = (number1 * number2)

number3 = 9
number4 = 3
result2 = (number3/number4)
result2_wrong = (number3 * number4)

const promise1 = new Promise((accept, reject) => {
    if(number1 + number2 == result1_wrong)
    {
        accept("Promise 1 succeed. Result: " + result1)
    }
    else
    {
        reject("Promise 1 failed. Result: " + result1)
    }
})

const promise2 = new Promise((accept, reject) => {
    if(number3 / number4 == result2)
    {
        accept("Promise 2 succeed. Result: " + result2)
    }
    else
    {
        reject("Promise 2 failed. Result: " + result2)
    }
})

Promise.all([promise1, promise2])
    .then(value => {
        console.log(value)
    })
    .catch((e) => {
        console.log("Error: " + e)
    })