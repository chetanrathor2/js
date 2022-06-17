console.log('promise')

let promiseObj = new Promise(function (resolve, reject) {
    let x =101;

    if (x == 100) {
        resolve('fine')
    }
    else {
        reject('not fine')
    }
});
promiseObj.then(
    function (value) { console.log(value) })
promiseObj.catch(
    function (error) { console.log(error) }
)
