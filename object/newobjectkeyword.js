var fruits=new Object()
fruits.mango="green",
fruits.apple="red",
fruits.banana="yellow",

fruits.configuration={
    mango:"100",
    Banana:"50",
    apple:"200",
    newfruits:["guava","sapota"]
}
fruits.cost=function()
{
    return 100
}

console.log(fruits)
console.log(fruits.cost())
console.log(fruits.configuration.mango)
console.log(fruits.configuration.newfruits[0])
fruits.configuration.newfruits=["watermelon"]
console.log(fruits.configuration.newfruits[0])