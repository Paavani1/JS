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

}

sync()


