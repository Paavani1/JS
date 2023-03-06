function subtraction(a,b)
{//console.log(" subtraction function started")
    return a-b
    
}
function division(a,b)
{//console.log("division function started")
    return a/b
}
function arithmetic_operation(a,b,funct)
{ console.log(" calculator function started")
    console.log(funct(a,b))
    console.log("calculator function ended")
}
arithmetic_operation(2,10,division)
console.log("***********************************************************")
function arithmetic_operation(a,b,funct)
{ console.log(funct.name+" function started")
    console.log(funct(a,b))
    console.log(funct.name+" function ended")
}
arithmetic_operation(2,10,division)