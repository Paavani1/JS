var array1=[20,10,20,30,40,50,10,60]
var array2=[90,30,90,30,10,20]
var arr=[...new Set(array1)]//remove duplicates
console.log(arr)
// var arr=[...array1,60]
// console.log(arr)
// var array4=[...array1]
// console.log(array4)
// var array3=[...array1,...array2]
// console.log(array3)
var a="javascript"
var a1=[...a]
console.log(a1)

console.log(...a)
var marks1={
    english:"90",
    physics:"80",
    maths:"100"
}
var marks2={
    social:"87",
    science:"98",
    maths:"99"
}
var marks={...marks1,...marks2}
console.log(marks)


