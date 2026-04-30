┬──────────────────────────────────────────────────────────────────────────────────────────────
       │ File: 0-classroom.js
───────┼──────────────────────────────────────────────────────────────────────────────────────────────
   1   │ export default class ClassRoom {
   2   │   constructor(maxStudentsSize) {
   3   │     this._maxStudentsSize = maxStudentsSize;
   4   │   }
   5   │ }
───────┴──────────────────────────────────────────────────────────────────────────────────────────────
───────┬──────────────────────────────────────────────────────────────────────────────────────────────
       │ File: 1-make_classrooms.js
───────┼──────────────────────────────────────────────────────────────────────────────────────────────
   1   │ import ClassRoom from './0-classroom.js';
   2   │
   3   │ export default function initializeRooms() {
   4   │   return [
   5   │     new ClassRoom(19),
   6   │     new ClassRoom(20),
   7   │     new ClassRoom(34),
   8   │   ];
   9   │ }
───────┴──────────────────────────────────────────────────────────────────────────────────────────────
───────┬──────────────────────────────────────────────────────────────────────────────────────────────
       │ File: 2-hbtn_course.js
───────┼──────────────────────────────────────────────────────────────────────────────────────────────
   1   │ export default class HolbertonCourse {
   2   │   constructor(name, length, students) {
   3   │     this.name = name;
   4   │     this.length = length;
   5   │     this.students = students;
   6   │   }
   7   │
   8   │   get name() {
   9   │     return this._name;
  10   │   }
  11   │
  12   │   set name(value) {
  13   │     if (typeof value !== 'string') {
  14   │       throw new TypeError('Name must be a string');
  15   │     }
  16   │     this._name = value;
  17   │   }
  18   │
  19   │   get length() {
  20   │     return this._length;
  21   │   }
  22   │
  23   │   set length(value) {
  24   │     if (typeof value !== 'number') {
  25   │       throw new TypeError('Length must be a number');
