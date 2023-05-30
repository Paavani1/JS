// let arr1=[10,20,30,40,50,60]
// let x=arr1[2]
// let y=arr1[3]
// console.log(x,y)
// let [u,v]=arr1
// console.log(u,v)
// let [a,,,b]=arr1
// console.log(a,b)

var upskill= {
    f_name :"Javascript",
    l_name :"js",
    yoe :4,
    skillset : ["java", "selenium", "javascript"],           //===>array

    greet :function(){                                                //===>function
        return"Hello all, I am "+" "+this.f_name+" "+this.l_name
    },

    company : {                                             //===>object
    c_name :"Tyss",
    dept :"sdet40",

    }
}

//case 1: regular method
// let myName = upskill.f_name
// let skills = upskill.skillset
// console.log(myName);
// console.log(skills);

// //case 2: 
// let {f_name} = upskill
// let {company} = upskill
// console.log(f_name);
// console.log(company);
// //c0ndition 1: curly braces
// //condition 2: reference name should be same as that which is in the object

// //case 3: change the reference variable => so that we can decalre our own reference variable
// //f_name in object upskill will be renamed as myName
let {f_name: myName} = upskill
//console.log(myName);                    
console.log(f_name);                //undefined /error

