console.log("Ho Ender.");

// const button = document.getElementById('main-btn');

// const whatIsTheId = (e) => {
//   return `The element ID is ${e.target.id}!`;

// }

// button.addEventListener('click', whatIsTheId);



// const button = document.querySelector('#main-btn');
// button.addEventListener('click', ()=> {
//   console.log('You Clicked Me!');
// })



// const button = document.querySelector('#main-btn');
// button.addEventListener('click', (event)=> {
//   console.log('You Clicked Me!');
//   console.log(event);
// })
// you can add .notation for that event tag above. It's a list of key pairs that are useful in the "event" list in the console. For instance event.id

//  now making it with a callback to make it reusable

// const whatIsTheId = (event) => {
//   console.log(`YOU CLICKED ${event.target.id}!`);

// }

// button.addEventListener('click', whatIsTheId);

// // target the other button

// const button2 = document.querySelector('#other-btn');

// button2.addEventListener('click', whatIsTheId);


// adding functionality
const button = document.querySelector('#main-btn');
const container = document.querySelector('#container');

const whatIsTheId = (event) => {
  console.log(`YOU CLICKED ${event.target.id}!`);

  if (event.target.id === 'main-btn') {
    container.innerHTML = 'You clicked the MAIN BUTTON';
  } else {
    container.innerHTML = 'You clicked the OTHER BUTTON';
  }
  console.log(event);
}

button.addEventListener('click', whatIsTheId);

// target the other button

const button2 = document.querySelector('#other-btn');

button2.addEventListener('click', whatIsTheId);
