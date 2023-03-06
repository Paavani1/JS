function add(a,b)
{
    return a+b
}
function mul(a,b)
{
    return a*b
}
function sub(a,b)
{
    return a-b
}
function div(a,b)
{
    return a/b
}
function arithmetic_operation(a,b,funct)
{
    console.log(funct(a,b))
}
arithmetic_operation(2,10,sub)

