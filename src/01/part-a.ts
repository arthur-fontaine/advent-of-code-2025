import { readFileSync } from "fs";

const instructions = readFileSync(`${import.meta.dirname}/instructions.txt`).toString('utf-8')
function runInstructions(count: number) {
  let i = 0

  for (const line of instructions.split('\n')) {
    if (!line) continue;
    const isLeft = line[0] === 'L'
    const tickCount = Number(line.slice(1))

    if (isLeft) count -= tickCount
    else count += tickCount

    count = mod(count, 100)

    if (count === 0) i++
  }

  return i
}

function mod(a: number, b: number) {
  const div = a / b
  const intDiv = Math.floor(div)
  const dec = div - intDiv
  return Math.round(dec * b)
}

console.log(runInstructions(50))
