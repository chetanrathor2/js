console.log('async / await')

 async function myFun() {
    console.log('inside myFun')

    let myPromise = new Promise(function (resolve, reject) {
        let x = 100;

        if (x == 100) {
            resolve('done')
        }
        else {
            reject('not ok')
        }
    })
    let a = await  myPromise
    console.log(a)
}

myFun()