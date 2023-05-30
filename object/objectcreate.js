var courses=
   {
    coursename1:"maths",
   coursename2:"Js",
   courseyear:"1",
   skillcourses:["selenium","java"],
  cost: function()
  { 
    return 100000
  }
   }
Studentcourse=Object.create(courses)
Studentcourse.coursename1="mathematics"
Studentcourse.skillcourses=["java1"]
console.log(courses)
console.log(Studentcourse)
console.log(courses.cost())
console.log(Studentcourse.cost())










