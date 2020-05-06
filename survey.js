const readline = require('readline');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? Nicknames are also acceptable :) : ', (name) => {
  rl.question('What\'s an activity you like doing? : ', (activity) => {
    rl.question('What do you listen to while doing that? : ', (music) => {
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) : ', (meal) => {
        rl.question('What\'s your favourite thing to eat for that meal? : ', (food) => {
          rl.question('Which sport is your absolute favourite? : ', (sport) => {
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! : ', (superpower) => {
    console.log(`My name is: ${name}. I like to ${activity} while I listen to ${music}. My favorite meal of the day is ${meal} and I usually have ${food}. My absolute favorite sport is ${sport} and I am amazing at ${superpower} `);
  rl.close();
})
})
})
})
})
})
});



// What's your name? Nicknames are also acceptable :)
// What's an activity you like doing?
// What do you listen to while doing that?
// Which meal is your favourite (eg: dinner, brunch, etc.)
// What's your favourite thing to eat for that meal?
// Which sport is your absolute favourite?
// What is your superpower? In a few words, tell us what you are amazing at!
