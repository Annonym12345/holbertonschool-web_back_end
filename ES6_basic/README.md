─┬──────────────────────────────────────────────────────────────────────────────────────────────
       │ File: 0-constants.js
───────┼──────────────────────────────────────────────────────────────────────────────────────────────
   1   │ export function taskFirst() {
   2   │   const task = 'I prefer const when I can.';
   3   │   return task;
   4   │ }
   5   │
   6   │ export function getLast() {
   7   │   return ' is okay';
   8   │ }
   9   │
  10   │ export function taskNext() {
  11   │   let combination = 'But sometimes let';
  12   │   combination += getLast();
  13   │
  14   │   return combination;
  15   │ }
───────┴──────────────────────────────────────────────────────────────────────────────────────────────
───────┬──────────────────────────────────────────────────────────────────────────────────────────────
       │ File: 10-loops.js
───────┼──────────────────────────────────────────────────────────────────────────────────────────────
   1   │ export default function appendToEachArrayValue(array, appendString) {
   2   │   for (const [index, value] of array.entries()) {
   3   │     array[index] = appendString + value;
   4   │   }
   5   │
   6   │   return array;
   7   │ }
───────┴──────────────────────────────────────────────────────────────────────────────────────────────
───────┬──────────────────────────────────────────────────────────────────────────────────────────────
       │ File: 1-block-scoped.js
───────┼──────────────────────────────────────────────────────────────────────────────────────────────
   1   │ export default function taskBlock(trueOrFalse) {
   2   │   const task = false;
   3   │   const task2 = true;
   4   │
   5   │   if (trueOrFalse) {
   6   │     const task = true;
   7   │     const task2 = false;
   8   │   }
   9   │
  10   │   return [task, task2];
  11   │ }
───────┴──────────────────────────────────────────────────────────────────────────────────────────────
───────┬──────────────────────────────────────────────────────────────────────────────────────────────
       │ File: 2-arrow.js
───────┼──────────────────────────────────────────────────────────────────────────────────────────────
   1   │ export default function getNeighborhoodsList() {
   2   │   this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

