class student{
    sname
    sid
    marks

   constructor(sname,sid,marks){
       this.sname=sname
       this.sid=sid
       this.marks=marks

   }
   static a=10
   b=20
   mathsmarks()
   {    this.sciencemarks()
       student.socialmarks()
   }
   sciencemarks()
   {   
       console.log(this.b)//20
       console.log(student.a)//10

   }
  static englishmarks(object)
   {     this.socialmarks()
       object.sciencemarks()
   }
  static socialmarks()
   {  
       let s=new student()
        console.log(s.b)//20
       console.log(this.a)//20
   }
   


   
}
let s1=new student("student1",01,100)//instance variable
student.englishmarks(s1)
s1.mathsmarks()