function add(x,y)
{
    var a=1 //local
    let b=2 //local
    {
        var d=4 //local
        function sub(x,y)
        {
            var g=7 //local
            let h=9 //local
            {
                const i=10 //block
            }
        }
        sub(10,11)//local
        let e=5 //block
        const f=6 //block
    }
    const c=3 //local
}
{
    var i=11 //global
    let j=12 //local
    add(20,30)
    const k=13 //local
}
var l=14 //global
let m=15 //script
const n=16 //script