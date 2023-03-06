console.log("******For Loop******")
var arr=[20,,"Javascript",'hi',20.99]
for (let index = 0; index < arr.length; index++) {

    console.log(arr[index]);
    
}
console.log("******For In Loop******")

for (const a in arr) {
    
        const element = arr[a]
        console.log(a+" "+element)
        
    }
    console.log("******For of Loop******")
    for (const iterator of arr) {

        console.log(iterator)
    }
