var student={
    student_name:"student1",
    student_id:"01",
    percentage:88,
   marks:function()
    {
console.log(this.student_name+"  "+this.student_id)
    }

}
var s={
    student_name:"student2",
    student_id:"02",
    percentage:85,
    marks:function()
    {
    console.log(this.student_name+"  "+this.student_id+"  "+this.percentage)
    },
    marks1:function(value1,value2)
    {
    console.log(value1+" "+this.student_name+"  "+value2+" "+this.student_id)
    }
    
}
s.marks.call(student)
student.marks.call(s)
s.marks1.call(student,"your name is","your id is")