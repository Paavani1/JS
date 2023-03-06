var  Book={
   bookbrand:"classic",
    No_ofpages:"300",
    book_colour:"white",
    
configuration:{
    height:"50cm",
     width:"5cm",

},
cost:function ()
    {
        return 100
    }
}
// console.log(Book)
// console.log(Book.bookbrand)
 Book.book_quality="good"
console.log(Book)
delete Book.book_quality
console.log(Book)
// console.log(Book.No_ofpages)
console.log(Book["configuration"])
// Book.pencolour=["blue","red","black"]
// console.log(Book)
// console.log(Book.pencolour[1])
console.log(Book.cost())
delete Book.cost()
//console.log(Book)