console.log('arrow function')


// myObj = {
//     name: 'AnyName',
//     salary: 12000,
//     geeet: function () {
//         console.log(this.name);
//     }
// }
// mainObj = {
//     mainname: 'hello',
//     obj1: myObj2 = {
//         name: 'otherName',
//         salary: 15000,
//         greet: () => {
//            let name = 'hello';
//             console.log(this.name);
//         }
//     }
// }

console.log(this)

function myFun(){
    console.log(this)
}
myFun()