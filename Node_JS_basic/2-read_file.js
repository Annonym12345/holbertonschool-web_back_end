const fs = require('fs');

function countStudents(path) {
  let data;

  try {
    data = fs.readFileSync(path, 'utf8');
  } catch (error) {
    throw new Error('Cannot load the database');
  }

  const lines = data.split('\n').filter((line) => line.trim() !== '');

  const students = lines.slice(1);

  console.log(`Number of students: ${students.length}`);

  const fields = {};

  students.forEach((line) => {
    const parts = line.split(',');

    const firstname = parts[0];
    const field = parts[3];

    if (!fields[field]) {
      fields[field] = [];
    }

    fields[field].push(firstname);
  });

  const keys = Object.keys(fields);

  for (let i = 0; i < keys.length; i += 1) {
    const field = keys[i];
    const list = fields[field];

    console.log(
      `Number of students in ${field}: ${list.length}. List: ${list.join(', ')}`
    );
  }
}

module.exports = countStudents;
