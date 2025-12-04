import { readFileSync } from "fs";

const diagramTxt = readFileSync(`${__dirname}/diagram.txt`).toString()

const diagram = diagramTxt.split('\n').filter(Boolean).map(r => r.split(''))

const matrix = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, -1],
  [0, 1],
  [1, -1],
  [1, 0],
  [1, 1]
]

let t = 0
for (let y = 0; y < diagram.length; y++) {
  const row = diagram[y]!;
  for (let x = 0; x < row.length; x++) {
    const el = row[x];

    if (el !== '@') continue;

    let filledAround = 0;
    for (const move of matrix) {
      if (diagram[y + move[1]!]?.[x + move[0]!] === '@') filledAround++
      if (filledAround >= 4) break
    }
    if (filledAround < 4) t++
  }
}

console.log(t)
