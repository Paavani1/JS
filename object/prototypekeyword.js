var courses=
   {coursename1:"maths",
   coursename2:"Js",
   courseyear:"1",
   skillcourses:["selenium","java"],
  cost: function()
  { 
    return 100000
  }
   }

var subjects={}
console.log(subjects.coursename1)//undefined
subjects.__proto__=courses
console.log(subjects)//{}
console.log(subjects.coursename1)//maths
subjects.coursename1="JAVA"
console.log(subjects.coursename1)//"JAVA"
