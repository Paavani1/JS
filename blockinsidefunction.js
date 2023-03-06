var a=10 //global
let b=20 //script
const c=30 //script

{
    var d=40//global
    let e=50//block
    function add(x,y)
    {
        var j=100 //local
        let k=110 //local
        const l=120 //local
    }
    const f=60 //block

}
add(1,2)
