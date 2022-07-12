const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
  printGoals: function (...printGoals) {
    for (let i = 0; i < printGoals.length; i++) {
      console.log(printGoals[i]);
    }
    console.log(`Total Scored: ${printGoals.length}`);
  },
};

// Coding Challenge 1
/**  
const [players1, players2] = game.players;
const [gk, ...fieldPlayers] = players1;
const allPlayers = [...players1, ...players2];
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
const { team1, x: draw, team2 } = game.odds;
team1 > team2 && console.log('Team 1 Wins!');

console.log(players1, players2);
console.log(gk, fieldPlayers);
console.log(allPlayers);
console.log(players1Final);
console.log(team1, draw, team2);
team1 < team2 && console.log('Team 2 Wins!');
console.log(game.printGoals('Davies', 'Muller', 'Lewadowski', 'Kiwich'));
console.log(game.printGoals(...game.scored));
*/

// Coding Challenge 2
/** 
for (const [goal, name] of game.scored.entries()) {
  console.log(`Goal ${Number(goal) + 1}: ${name}`);
}

let count = 0;
for (const value of Object.values(game.odds)) {
  count += value;
}
console.log(`The average odd is ${count / 3}`);

for (const [team, odds] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odds of ${teamStr}: ${odds}`);
}
*/

// CODING CHALLENGE 3
const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔄 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔄 Substitution'],
  [64, '💛 Yellow Card'],
  [69, '🔴 Red card'],
  [70, '🔄 Substitution'],
  [72, '🔄 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '💛 Yellow Card'],
]);

// 1. Create an array 'evemts' pf the differentgame events that happened [no duplicates]
const eventsSet = new Set();
for (const [time, event] of gameEvents) {
  eventsSet.add(event);
}
const events = [...eventsSet];
const events1 = [...new Set(gameEvents.values())];
console.log(events);
console.log(events1);

// 2. Remove the yellow card at minute 64 from the game events log
gameEvents.delete(64);
console.log(gameEvents);

// 3. Print the following String to console:
// "An event happened, on average, every 9 minutes"
const time = [...gameEvents.keys()].pop();
console.log(
  `An events happened, on average, every ${time / gameEvents.size} minutes.`
);

// 4. Loop over events and log to console
// Marking whether its in the first half or second half of the game [after 45 minutes]
const HALF_TIME = 45;
for (const [time, event] of gameEvents) {
  console.log(
    time <= HALF_TIME
      ? `[FIRST HALF] ${time}: ${event}`
      : `[SECOND HALF] ${time}: ${event}`
  );
}
