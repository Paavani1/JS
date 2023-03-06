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
    {   
        return 100
    }
    sciencemarks()
    {   
        console.log(this.b)
        console.log(student.a)

    }
   static englishmarks()
    {
        return 80
    }
   static socialmarks()
    {  
        let s=new student()
         console.log(s.b)
        console.log(this.a)
    }
    


    
}
let s1=new student("student1",01,100)//instance variable
// console.log(student.a)
// console.log(s1.b)
// console.log(student.englishmarks())
// console.log(s1.mathsmarks())
// console.log(s1.sname)
student.socialmarks()
s1.sciencemarks()


