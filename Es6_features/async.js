console.log("log in")
setTimeout(()=>{
    console.log("timeout2")
},1000)
setTimeout(()=>{
    console.log("timeout1")
},1000)
setTimeout(()=>{
    console.log("timeout3")
},3000)
setInterval(()=>{
    
    console.log("repeat")

},3000)
console.log("log out")
