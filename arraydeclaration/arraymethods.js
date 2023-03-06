console.log("*************concat****************")
var array=[1,"js",3.9]
var array1=["javascript"]
console.log(array.concat(array1))
console.log(array)
 console.log("*************push****************")
var array=[1,8,"p","k"]
array1=[1,8,9,0]
console.log(array)
console.log(array.push(array1))
console.log(array)
console.log("**************pop***************")
var array=[1,8,"p","k","js"]
console.log(array)
console.log(array.pop())
console.log(array)
console.log("**************unshift***************")
var array=[1,8,"p","k","js"]
console.log(array)
console.log(array.unshift("javascript"))
console.log(array)
console.log("*************shift****************")
var array=[1,8,"p","k","js"]
console.log(array)
console.log(array.shift())
console.log(array)
console.log("*************splice****************")
var array=[1,8,"p","k","js"]
console.log(array)
console.log(array.splice(0,2,"hi"))
console.log(array)
console.log("*************slice****************")
var array=[1,8,"p","k","js"]
console.log(array)
console.log(array.slice(0,2))//ending index will be excluded
console.log(array.slice(2,3))
console.log(array)
console.log("**************every***************")
var array=[-1,-8,-2.9,-4,-9,-0.1]
console.log(array)
console.log(array.every((element)=>{

    return element>0
}))

console.log(array)

console.log(array.every((element)=>{

    return element<0
}))
console.log("**************some***************")
var array=[-1,-8,-2.9,-4,9,1]
console.log(array)
console.log(array.some((element)=>{

    return element<1
}))
console.log(array)

console.log(array.some((element)=>{

    return element<-10
}))
console.log(array)
console.log("*************indexOf****************")
var array=[1,8,"p","k","js",5,8,"js"]
console.log(array)
console.log(array.indexOf('js',5))

console.log(array)
console.log("*************lastIndexOf****************")
var array=[1,8,"p","k","js",5,8,"js",0.9]
console.log(array)
console.log(array.lastIndexOf('js',5))

console.log(array)
console.log("*************includes****************")
var array=[1,8,"p","k","js",5,8,"js",0.9]
console.log(array)
console.log(array.includes("js"))

console.log(array)
console.log("*************join****************")
var array=[1,8,"p","k","js",5,8,"js",0.9]
console.log(array)
console.log(array.join(9))

console.log(array)
console.log("*************reverse****************")
var array=[1,8,"p","k","js",5,8,"js",0.9]
console.log(array)
console.log(array.reverse())
console.log(array)
console.log("*************foreach****************")
var array=[1,8,"p","k","js",5,8,"js",0.9]
console.log(array)
array.forEach((element,index) => {
    console.log(element*2)
})
console.log(array)
console.log("*************map****************")
var array=[1,8,3,0.9,"h"]
console.log(array)
console.log(array.map((element,index) => {
    return element*2
}))
console.log(array)
console.log("*************filter****************")
var array=[1,8,3,0.9,"h"]
console.log(array)
console.log(array.filter((element,index) => {
    if(element>2)
    return element
}))
console.log(array)
console.log("*************ascending sort****************")
var array=[1,8,3,0.9]
console.log(array)
console.log(array.sort((a,b) => {
    return a-b
}))
console.log(array)
console.log("*************descending sort****************")
var array=[1,8,3,0.9]
console.log(array)
console.log(array.sort((a,b) => {
    return b-a
}))
console.log(array)
console.log("*************reducing array****************")
var number=[2,8,9,7]
function sub(total,number)
{
    return total-number
}
console.log(number.reduce(sub))
console.log(number)
console.log("*************reduce right****************")
var number=[2,8,9,7]
function sub(total,number)
{
    return total-number
}
console.log(number.reduceRight(sub))
console.log(number)





