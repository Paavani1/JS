class fruits{
    constructor(mango,banana,orange,configuration,cost)
{
    this.mango=mango
    this.banana=banana
    this.orange=orange
    this.configuration=configuration
    this.cost=function(){
        return cost
    }
}}
var f1=new fruits("green","yellow","orange",{mango:"100",banana:"50"},500) 
console.log(f1)
console.log(f1.cost())
console.log(f1.mango)
console.log(f1.configuration)