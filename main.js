console.log("Ho Ender.");

const firstObj = {};

const user = {
  username: 'biz.markie',
  password: 'abc123',
  lovesJavascript: true,
  favoriteNumber: 42,
}

// access object values with dot notation

console.log(user.lovesJavascript);
console.log(user.username);

// bracket notation
const password = 'password';
console.log(user[password]);
// has to be a string in the bracket, or a number otherwise password will be undefined.
console.log(user['password']);

console.log(user['favoriteNumber']);

console.log(user.favoriteNumber);

// assigning values

const newUser = {
  isNew: true,

}

newUser.username = 'fresh.prince';

console.log(newUser);

newUser['password'] = 'abcd1234';

console.log(newUser);

// Method or anonymus function within an object situation
const newObject = {
  sayHello: function () {
    console.log('Hi, Everyone!');
  }
}

newObject.sayHello();
//  new example
const newObject = {
  username: 'Teresa',
  sayHello: function () {
    console.log(`${this.username} says Hello!`);
  }
}
// change username
newObject.username = 'Aja;'
newObject.sayHello();

// iteration over an object

const userTwo = {
  username: 'trinity.christiana',
  password: 'xyz0987',
  lovesJavascript: true,
  favoriteNumber: 12,
}

for (let key in userTwo) {
  console.log(key);
}
// gives us all the keys

for (let key in userTwo) {
  console.log(userTwo[key]);
}
// gives us the values (bracket notation)(dot notation will not work)
