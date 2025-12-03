import { readFileSync } from "fs";

const banks = readFileSync(`${import.meta.dirname}/banks.txt`, "utf-8").split('\n')

let t = 0
for (const bank of banks) {
  let largest1 = 0
  let largest1Index = -1
  for (let i = 0; i < bank.length - 1; i++) {
    const n = Number(bank[i])
    if (n > largest1) {
      largest1 = n
      largest1Index = i
    }
  }

  let largest2 = 0
  let largest2Index = -1
  for (let i = largest1Index + 1; i < bank.length; i++) {
    const n = Number(bank[i])
    if (n > largest2) {
      largest2 = n
      largest2Index = i
    }
  }

  t += Number(`${largest1}${largest2}`)
}

console.log(t)
