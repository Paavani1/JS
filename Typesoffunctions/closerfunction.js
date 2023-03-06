var student_name="student1"//global
function student_details()
{
    student_id=01//outer function scope
    console.log(student_id)
    function studentmarks() {
        maths=100//local
        console.log(maths)
        
    }
    studentmarks()
}
student_details()