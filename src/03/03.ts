import { readFileSync } from "fs";

const banks = readFileSync(`${import.meta.dirname}/banks.txt`, "utf-8").split('\n')

let t = 0
for (const bank of banks) {
  const largests = Array<number>();
  const largestIndexes = Array<number>();

  const MAX_BATTERY = 12;

  for (let i = 0; i < MAX_BATTERY; i++) {

    let largest = 0;
    let largestIndex = -1;

    const firstIndex = (largestIndexes.at(-1) ?? -1) + 1;
    const lastIndex = bank.length - (MAX_BATTERY - i);
    for (let i = firstIndex; i <= lastIndex; i++) {
      const n = Number(bank[i])
      if (n > largest) {
        largest = n
        largestIndex = i
      }
    }
    largests.push(largest)
    largestIndexes.push(largestIndex)

  }

  t += Number(largests.join(''))
}

console.log(t)
