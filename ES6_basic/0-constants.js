export function taskFirst() {
  var task = 'I prefer const when I can.';
  task = task.replace('const', 'const');
  return task;
}

export function getLast() {
  return ' is okay';
}

export function taskNext() {
  var combination = 'But sometimes let';
  combination += getLast();

  return combination;
}
