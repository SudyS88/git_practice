/* Nonsensical Horoscope Generator
This tool will generate a randomized and quasi-nonsensical horoscope prediction. 
1. It will first analyze the positions of the heavenly bodies. 
2. It will then make a horoscope prediction
3. Finally, it will give the user advice on how to mitigate the dire fate they have in store
Enjoy!
*/


//The randomizer function returns a random element from an array that is passed in.
function randomizer (arrayIn){
    let randLoc = Math.floor(Math.random()*arrayIn.length);
    return arrayIn[randLoc];
    arrayIn.splice(randLoc,1);
}


const heavenlyBodiesArray = ['Mercury','Venus','Mars','Jupiter','Saturn', 'Uranus ... stop giggling! ...', 'Neptune', 'the heavenly body formerly known as Pluto', 'Krypton' , 'Andromeda', 'Blorgon'];
const planetaryPosition = ['in the seventh House', 'in the twelfth house', 'in the thirteenth house', 'in retrograde', 'in aphelion', 'is under the influence of our Blorgish overlords', 'is under the influence of... (sniffs)... is that weed??'];
const preAmble = ['Beware!', 'Most dire tidings indeed for you...', 'The future is hazy...', 'Hmm, in your future...', 'Favorable omens for you, my friend!'];
const adj = ['furious', 'dark', 'grim', 'wistful', 'elegant', 'platonic', 'nuclear-powered', 'patronizing', 'sanguinary', 'elegaic', 'fulgent', 'lilliputian', 'mysterious'];
const noun = ['dogs', 'suitors', 'assassins', 'omens', 'poop-flinging monkeys', 'unresolved emotions', 'time-travelers ', 'elder gods', 'opportunities'];
const timePeriod = ['today', 'in your upcoming week', 'in the near future', 'in a galaxy far, far, away', 'in an unspecified time', 'when the sun rises in the west and sets in the east', 'when the seas go dry and the mountains blow like dust in the wind', 'like... soon... dude... i dunno'];
const action = ['drink', 'eat', 'pray to', 'lick', 'insult', 'fart on', 'propitate', 'bow before', 'run away from', 'sniff', 'step on', 'assassinate', 'nuke']
const subject = ['a dog', 'the dread demon Lord Baal', 'Mysterious Dr. X', 'a goose', 'twenty-two thousand lemmings', 'a nose', 'a meerkat', 'a time machine', 'Hagrid']
const item = ['gooseberries', 'AT&T customer support', 'a butterknife', 'four and twenty blackbirds, baked in a pie', 'stolen dentures', 'a baguette', 'Baby Jesus']


let planetaryAnalysisStatement = `Today, ${randomizer(heavenlyBodiesArray)} is ${randomizer(planetaryPosition)}, while ${randomizer(heavenlyBodiesArray)} is ${randomizer(planetaryPosition)}.`;
let horoscopePredictionStatement = `${randomizer(preAmble)} There will be ${randomizer(adj)} ${randomizer(noun)} ${randomizer(timePeriod)}.`;
let adviceStatement = `A dire fate indeed. To avoid this, you must ${randomizer(action)} ${randomizer(subject)} with ${randomizer(item)}.`;


console.log("====================================================");
console.log("Welcome to the Nonsensical Horoscope Generator!")
console.log("====================================================");
console.log("");
console.log("Your Horoscope for today... Hmm... very interesting!")
console.log("");
console.log(planetaryAnalysisStatement);
console.log(horoscopePredictionStatement);
console.log(adviceStatement);
console.log("");
console.log(`Thank you for using the Random Horoscope Generator. Come again soon, ... if you escape your grisly fate!`)
console.log("");
console.log("====================================================");