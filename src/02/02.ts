import assert from "assert";
import { readFileSync } from "fs";

const idRangesTxt = readFileSync(`${import.meta.dirname}/id_ranges.txt`).toString('utf-8')
const idRanges = idRangesTxt.split(',')

console.time()

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
  for (let i = 1; i < s.length; i++) {
    if (s.length % i !== 0) continue;
    if (s.slice(0, i).repeat(s.length / i) === s) return true
  }
  return false
}

console.timeEnd()
