import { readFileSync } from "node:fs"

const input = readFileSync(`${__dirname}/input.txt`).toString()

const [rangesTxt, idsTxt] = input.split('\n\n') as [string, string]

const ranges = rangesTxt.split('\n').map(r => r.split('-').map(Number)) as [number, number][]

const ids = idsTxt.split('\n').map(Number)

let i = 0
for (const id of ids) {
  for (const [min, max] of ranges) {
    if (min <= id && id <= max) {
      i++
      break
    }
  }
}

console.log(i)
