var student={
    student_name:"student1",
    student_id:"01",
   marks:function()
    {
console.log(this.student_name+"  "+this.student_id)
    },
    marks1:function(value1,value2)
    {
    console.log(value1+" "+this.student_name+"  "+value2+" "+this.student_id)
    }

}
var s={
    student_name:"student2",
    student_id:"02",
    marks:function()
    {
    console.log(this.student_name+"  "+this.student_id)
    },
    marks1:function(v1,v2)
    {
    console.log(v1+" "+this.student_name+"  "+v2+" "+this.student_id)
    }
    
}

 student.marks1.apply(s,["your name is","your id is"])
 