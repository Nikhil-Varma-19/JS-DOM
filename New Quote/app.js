// Varible

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
    quote: 'The greatest glory in living lies not in never falling, but in rising every time we fall.',
    person:'Nelson Mandela'
},{
    quote:'The way to get started is to quit talking and begin doing.',
    person:'Walt Disney'

},
{
    quote:'If life were predictable it would cease to be life, and be without flavor.',
    person:'Eleanor Roosevelt'
},{
    quote:'If you set your goals ridiculously high and its a failure, you will fail above everyone elses success.',
    person:'James Cameron'
},{
    quote:'Life is what happens when youre busy making other plans.',
    person:'John Lenno'
},];

btn.addEventListener('click',function(){
    let random =Math.floor(Math.random() * quotes.length);

    quote.innerText=quotes[random].quote;
    person.innerText=quotes[random].person;
})

