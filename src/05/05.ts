import { appendFileSync, readFileSync, writeFileSync } from "node:fs"

const input = readFileSync(`${__dirname}/input.txt`).toString()

const [rangesTxt] = input.split('\n\n') as [string, string]
const ranges = rangesTxt.split('\n').map(r => r.split('-').map(Number)) as [number, number][]
ranges.sort(([a], [b]) => a - b)

const realRanges = [...ranges] as [number, number][]

// writeFileSync('ranges.html', '<div style="position: relative; display: block; top: 30px">')
// const minRange1 = realRanges[0]![0]
// const maxRange1 = realRanges.at(-1)![1]
// const normalizeRange1 = (num: number) => (num - minRange1) / (maxRange1 - minRange1) * 100
// for (const range of realRanges) {
//   appendFileSync('ranges.html', `<div style="position: absolute; left: ${normalizeRange1(range[0])}%; width: ${normalizeRange1(range[1]) - normalizeRange1(range[0])}%; height: 20px; background: black;">
//     <!-- ${range[0]} - ${range[1]} -->
//   </div>\n`)
// }
// appendFileSync('ranges.html', '</div>')

for (let index = 0; index < realRanges.length - 1; index++) {
  const [min, max] = realRanges[index]!;
  const [min1, max1] = realRanges[index + 1]!;
  if (max > min1) {
    realRanges.splice(index, 2, [min, Math.max(max, max1)])
    index = 0
  }
  else if (max === min1) {
    realRanges.splice(index, 2, [min, Math.max(max, max1)])
    index = 0
  }
}

// writeFileSync('rangeMerged.html', '<div style="position: relative; display: block">')
// const minRange = realRanges[0]![0]
// const maxRange = realRanges.at(-1)![1]
// const normalizeRange = (num: number) => (num - minRange) / (maxRange - minRange) * 100
// for (const range of realRanges) {
//   appendFileSync('rangeMerged.html', `<div style="position: absolute; left: ${normalizeRange(range[0])}%; width: ${normalizeRange(range[1]) - normalizeRange(range[0])}%; height: 20px; background: black;">
//     <!-- ${range[0]} - ${range[1]} -->
//   </div>\n`)
// }
// appendFileSync('rangeMerged.html', '</div>')

let t = 0
for (const range of realRanges) {
  t += range[1] - range[0] + 1
}
console.log(t)
