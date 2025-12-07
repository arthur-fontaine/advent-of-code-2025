import { readFileSync } from "node:fs"

const input = readFileSync(`${__dirname}/input.txt`).toString()

const ops = rotate(input.split('\n').map(r => r.split(/ +/).map(v => v.trim()).filter(v => v !== "")))

let t = 0
for (const op of ops) {
  const numbers = op.slice(0, -1).map(Number)
  const operator = op.at(-1)!
  t += eval(numbers.join(operator))
}
console.log(t)

function rotate<T>(mat: T[][]) {
  const rotated = [] as T[][];
  for (let i = 0; i < mat.length; i++) {
    const row = mat[i]!;
    for (let j = 0; j < row.length; j++) {
      const el = row[j]!;
      rotated[j] ??= []
      rotated[j]![i] = el
    }
  }
  return rotated
}
