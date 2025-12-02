import assert from "assert";
import { readFileSync } from "fs";

const idRangesTxt = readFileSync(`${import.meta.dirname}/id_ranges.txt`).toString('utf-8')
const idRanges = idRangesTxt.split(',')

let sum = 0

for (const idRange of idRanges) {
  const [minStr, maxStr] = idRange.split('-')
  assert(minStr !== undefined, 'Min is not defined')
  assert(maxStr !== undefined, 'Max is not defined')
  const min = Number(minStr)
  const max = Number(maxStr)

  for (let i = min; i <= max; i++) {
    if (checkPattern(i.toString())) {
      sum += i
    }
  }
}

console.log(sum)

function checkPattern(s: string) {
  const mid = s.slice(0, s.length / 2)
  return `${mid}${mid}` === s
}
