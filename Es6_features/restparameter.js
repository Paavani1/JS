//Rest parameter
function student(...studentdetails){
    
   console.log(studentdetails) 
    
}
student("js",01,123445666,"o-ve","female")
var {sname,sid,sphno,...otherdetails}={bloodgroup:"b-ve",sname:"student1",sid:02,gender:"female"}
console.log(otherdetails)

