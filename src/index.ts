import { CsvFileReader } from "./CsvFileReader";

enum MatchResults {
  HomeWin = "H",
  AwayWin = "A",
  Draw = "D",
}
const reader = new CsvFileReader("soccer.csv");
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
