import { readFileSync } from "node:fs"

const input = readFileSync(`${__dirname}/input.txt`).toString()

const ops = rotate(input.split('\n').map(r => r.split('').map(v => v.trim())))
let t = 0
let currentT = null as number | null
let currentOperator = ''
for (const op of ops) {
  if (op.every(v => v === '')) {
    if (currentT === null) throw new Error('currentT should not be null')
    t += currentT
    currentT = -1
    currentOperator = ''
    continue;
  }
  if (currentOperator === '') {
    const operator = op.at(-1)!
    currentOperator = operator
    if (operator === '*') currentT = 1
    else if (operator === '+') currentT = 0
    else throw new Error(`Illegal operator ${JSON.stringify(operator)}`)
  }
  const number = Number(op.join('').replace(/\+|\*/, ''))
  if (currentOperator === '*') currentT! *= number
  else if (currentOperator === '+') currentT! += number
  else throw new Error(`Illegal currentOperator ${JSON.stringify(currentOperator)}`)
}
t += currentT ?? 0
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
