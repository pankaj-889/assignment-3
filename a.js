//question 1
var library = [
    {
    author: 'Bill Gates',
    title: 'The Road Ahead',
    readingStatus: true
    },
    {
    author: 'Steve Jobs',
    title: 'Walter Isaacson',
    readingStatus: true
    },
    {
    author: 'Suzanne Collins',
    title: 'Mockingjay: The Final Book of The Hunger Games',
    readingStatus: false
    }
];

console.log("Already read"+" "+library[0].title+" "+"by"+" "+library[0].author);
console.log("Already read"+" "+library[1].title+" "+"by"+" "+library[1].author);
console.log("You still need to read"+" "+library[2].title+" "+"by"+" "+library[2].author);

// question 2

var age= prompt("enter age");
if(age<18)
{
    alert("Not legal age to drive");
}
else
{
    alert("Driver safe");
}