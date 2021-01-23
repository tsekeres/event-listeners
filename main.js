console.log("Ho Ender.");

function sayLoveToUser(user) {
  return `I love ${user}!`;
}

function sayHateToUser(user) {
  return `I hate ${user}!`;
}

function createTeenageGreeting(user, cb) {
  return cb(user);
}

console.log(createTeenageGreeting('Dad', sayLoveToUser));
console.log(createTeenageGreeting('Dad', sayHateToUser));
