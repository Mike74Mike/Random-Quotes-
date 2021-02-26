/**
* @file This is a file of a random quote Generator
*@author Ikey Mikey
*/
/**
* @name myArray
* @description - This documents quotes and their sources
*/
const myArray = [
  {
    quote:"I'll be back",
    person: "Arnold Schwarzenegger",
    citation: " The Terminator",
    tag: "Movie",
    year: 1984
},
{
  quote:"You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
  person: "Dr. Seuss",
  tag: "Dreams",
  year: 1986
},
{
quote: "Without music, life would be a mistake",
person: " Friedrich Nietzsche",
tag:"Music",
year:1888
},
{
  quote: "It is our choices, Harry, that show what we truly are, far more than our abilities.",
  person:"J.K. Rowling",
  citation: "Harry Potter and the Chamber of Secrets",
  tag:"Abilities",
  year:1998
},
{
  quote:"Life is like riding a bicycle. To keep your balance, you must keep moving.",
  person: "Albert Einstein",
  tag:"Life",
  year: 1943
}
//End of Array

]
/**@function getRandomArray()
* @description - Gives a random Array value
*/
function getRandomArray(){
  let quote1 = Math.floor(Math.random() * myArray.length);
  return quote1
}
//End of Function

/**
* @function printQuote()
* @description- This outputs HTML Text if the quote
*/
function printQuote(){
  const i = getRandomArray();
  let html=''
  if(myArray[i].citation){

    html += document.querySelector('figure').innerHTML =
   `<blockquote>"${myArray[i].quote}"</blockquote>
   <figcaption>
    - ${myArray[i].person}, <i>${myArray[i].citation}</i>, ${myArray[i].year} [${myArray[i].tag}]
    </figcaption>`;
  }else {

    html += document.querySelector('figure').innerHTML =
 `<blockquote>"${myArray[i].quote}"</blockquote>
 <figcaption>

 - ${myArray[i].person}, ${myArray[i].year} [${myArray[i].tag}]

 </figcaption> `;
}
  return html;
}
// End of function


printQuote()


/**
*@desciption -The statement below is a onclick
*/
document.querySelector('button').addEventListener("click", printQuote, false);


/**
* @setInterval -This was just me trying to do extra credit
*/
setInterval(function(){ printQuote() ; }, 10000);
