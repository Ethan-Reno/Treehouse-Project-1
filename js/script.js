/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/*** 
 * `quotes` array 
***/

const quotes = [
  { quote: 'Justice is the first virtue of social institutions, as truth is of systems of thought.', 
    source: 'John Rawls', 
    citation: 'A Theory of Justice', 
    year: '1971',
    subject: 'Normative Ethics'
  },
  { quote: 'Man is by nature a political animal.', 
    source: 'Aristotle', 
    citation: 'Politics, Book 1', 
    year: '350 B.C.E.',
    subject: 'Political Philosophy'
  },
  { quote: 'Only thought is capable of inventing the fiction of a State that is universal by right', 
    source: 'Gilles Deleuze', 
    citation: 'A Thousand Plateuas', 
    year: '1980',
    subject: 'Political Philosophy'
  },
  { quote: 'Seeking what is true is not seeking what is desirable.', 
    source: 'Albert Camus', 
    citation: 'The Myth of Sisyphus', 
    year:'1942',
    subject: 'Existentialism'
  },
  { quote: 'Only the refusal to listen guarantees one against being ensnared by the truth', 
    source: 'Robert Nozick', 
    citation: 'Anarchy, State, and Utopia', 
    year: '1974',
    subject: 'Political Philosophy'
  },
  { quote: 'Act in such a way that you treat humanity, whether in your own person or in the person of any other, never merely as a means to an end, but always at the same time as an end.', 
    source: 'Immanuel Kant', 
    citation: 'Grounding for the Metaphysics of Morals', 
    year: '1785',
    subject: 'Normative Ethics'
  }
];

/***
 * `getRandomQuote` function - 
 * returns a random number between 1 and the number of objects in the quotes array
***/

function getRandomQuote( arr ) {
  let num = Math.floor( Math.random() * arr.length );
  return arr[num];
}

/***
 * `RandomRBG` function - returns a random RBG value
***/

function RandomRBG() {
  return Math.floor(Math.random() * 256) 
}

/***
 * `printQuote` function - 
 * loops through the quotes array until the number returned by the getRandomQuote function is identical to i.
 * generates html to print the quote and all of its properties.
 * replaces the 'main' html element with the newly generated html
 * changes the background color with three values from the randomRGB function
***/

function printQuote() {
  let randomQuote = getRandomQuote( quotes );
  let html;
  for ( let i = 0; i < quotes.length; i++ ) {
    if ( randomQuote === quotes[i] ) {
      html = `
        <div class="container">
          <div id="quote-box" class="quote-box">
            <p class="quote">${quotes[i].quote}</p>
            <p class="source">${quotes[i].source}
            <span class="citation">${quotes[i].citation}</span>
            <span class="year">${quotes[i].year}</span></p>
            <span class="subject">${quotes[i].subject}</span>
          </div>
        </div>`;
    }
  }
  document.querySelector('main').innerHTML = html;
  document.body.style.background = 
    `rgb( ${RandomRBG()}, ${RandomRBG()}, ${RandomRBG()} )`;
}

/***
  * Cycle through quotes every 10 seconds
***/ 

setInterval(printQuote, 10000);
    
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);