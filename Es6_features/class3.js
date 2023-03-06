class exam{
    static examname="annual"
    exam1="maths"
    aexam(){
        console.log("monday-maths")
        console.log(exam.examname)
        console.log(this.exam1)


    }
    static aexam()
    {
        console.log("Tuesday-social")
        console.log(this.examname)
        let e1=new exam()
        console.log(e1.aexam)

    }
    aexam1(){
       this.aexam()
       exam.aexam()
    
    }
    static aexam1()
    {
        this.aexam()
        let e2=new exam()
        e2.aexam()

    }
    


}
let e=new exam()
console.log(e.exam1)
console.log(exam.examname)
e.aexam()
exam.aexam()