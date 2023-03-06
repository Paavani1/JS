var a=[1,"JavaScript",20.888,'js']
console.log("******break******")
    for(index=0;index<a.length;index++)
    {
        if(index<3)
        {
            console.log(index+" "+"Hello")
            break
        }
        console.log("Hi")
    }
    console.log("******continue******")
    for(index=0;index<a.length;index++)
    {
        if(index<3)
        {
            console.log(index+" "+"Hello")
            continue
        }
        console.log("Hi")
    }

