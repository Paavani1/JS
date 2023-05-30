
// console.log("1")
// async function sync()
// {
// console.log("log in")
// var p=new Promise((resolve,reject)=>
// {
//     setTimeout(()=>{
//         resolve("resolved")
//         reject("rejected")

//     },2000)

    
// })
// await p.then((msg)=>{console.log(msg)}).catch((msg)=>{console.log(msg)})
// console.log("log out")
// }

// sync()
///////////////////////////////////////////////////////////////////////
    // console.log("1")

    // console.log("log in")
    // var p=new Promise((resolve,reject)=>
    // {
    //     setTimeout(()=>{
    //         resolve("resolved")
    //         reject("rejected")

    //     },2000)

    // })

    // p.then((msg)=>{console.log(msg)}).catch((msg)=>{console.log(msg)})
    // console.log("log out")

/////////////////////////////////////////////////////////////////////////
console.log("1")
async function sync()
{
console.log("log in")
var p=new Promise((resolve,reject)=>
{
    setTimeout(()=>{
        resolve("resolved")
        reject("rejected")

    },2000)

    
})
await p.then((msg)=>{console.log(msg)}).catch((msg)=>{console.log(msg)})
console.log("log out")
}

sync()



