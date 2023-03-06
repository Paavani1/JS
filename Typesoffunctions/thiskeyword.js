var student={
    student_name:"student1",
    student_id:1,
s:function(){
    console.log(this.a)//undefined
    console.log(this.student_name)//student1
}
//*"this" keyword it restrict the object creation it improves security
}
let studentdetails={
    a:10,
    student_name:"student2",
    studentgrade:"A",
    s:function(){
    console.log(this.student_name)//student2
    console.log(studentdetails.a)//10
    console.log(student.student_name)//student1

}
}
student.s()
studentdetails.s()