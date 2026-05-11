const fs = require('fs');

function countStudents(path) {
  let data;

  try {
    data = fs.readFileSync(path, 'utf8');
  } catch (err) {
    throw new Error('Cannot load the database');
  }

  const lines = data.split('\n').filter((line) => line.trim() !== '');

  const students = lines.slice(1);

  console.log(`Number of students: ${students.length}`);

  const fields = new Map();

  students.forEach((line) => {
    const [firstname, , , field] = line.split(',');

    if (!fields.has(field)) {
      fields.set(field, []);
    }

    fields.get(field).push(firstname);
  });

  for (const [field, list] of fields) {
    console.log(
      `Number of students in ${field}: ${list.length}. List: ${list.join(', ')}`
    );
  }
}

module.exports = countStudents;
