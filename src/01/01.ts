import { readFileSync } from "fs";

class Dial {

  position: number

  constructor(position: number) {
    this.position = position;
  }

  left() {
    this.position--;
    if (this.position === -1) this.position = 99
  }

  right() {
    this.position++;
    if (this.position === 100) this.position = 0;
  }

}

const instructions = readFileSync(`${import.meta.dirname}/instructions.txt`).toString('utf-8')
function runInstructions(dial: Dial) {
  let count = 0;

  for (const line of instructions.split('\n')) {
    if (!line) continue;
    const isLeft = line[0] === 'L'
    const tickCount = Number(line.slice(1))

    for (let i = 0; i < tickCount; i++) {
      if (isLeft) dial.left()
      else dial.right()
      if (dial.position === 0) count++;
    }
  }

  return count
}

console.log(runInstructions(new Dial(50)))
