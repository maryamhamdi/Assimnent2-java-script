const quotes = [{
  quote: `"You only live once, but if you do it right, once is enough."`,
  writer: `― Mae West`
}, {
  quote: `“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”`,
  writer: ` ― Marilyn Monroe`
}, {
  quote: `“So many books, so little time.”`,
  writer: `― Frank Zappa`
}, {
  quote: `“A room without books is like a body without a soul.”`,
  writer: `― Marcus Tullius Cicero`
}, {
  quote: `"In order to write about life first you must live it."`,
  writer: `― Ernest Hemingway`
}, {
  quote: `"Life is not a problem to be solved, but a reality to be experienced."`,
  writer: `― Soren Kierkegaard`
}, {
  quote: `“Be the change that you wish to see in the world.”`,
  writer: `― Mahatma Gandhi`
}, {
  quote: `"Turn your wounds into wisdom."`,
  writer: `― Oprah Winfrey`
}, {
  quote: `"The purpose of our lives is to be happy."`,
  writer: `- Dalai Lama`
}, {
  quote: `"Live for each second without hesitation."`,
  writer: `- Elton John`
}, ]
let btn = document.querySelector("#Qbtn");
let quote = document.querySelector(".quote");
let writer = document.querySelector(".writer");
btn.addEventListener("click", function() {
  let random = Math.floor(Math.random() * quotes.length);
  quote.innerHTML = quotes[random].quote;
  writer.innerHTML = quotes[random].writer;
})


