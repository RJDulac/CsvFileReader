import { MatchReader } from "./MatchReader";
import { MatchResults } from "./MatchResult";

const reader = new MatchReader("soccer.csv");
let manUnitedWins = 0;

reader.read();

for (let match of reader.data) {
  if (match[1] === "Man United" && match[5] === MatchResults.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === "Man United" && match[5] === MatchResults.AwayWin) {
    manUnitedWins++;
  }
}

console.log(`Man United won ${manUnitedWins} games`);
