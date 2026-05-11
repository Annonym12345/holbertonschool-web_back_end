const express = require('express');
const fs = require('fs');

const app = express();

const database = process.argv[2];

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter((line) => line.trim() !== '');

      const students = lines.slice(1);

      let response = `Number of students: ${students.length}`;

      const fields = {};

      students.forEach((student) => {
        const parts = student.split(',');
        const firstname = parts[0];
        const field = parts[3];

        if (!fields[field]) {
          fields[field] = [];
        }

        fields[field].push(firstname);
      });

      Object.keys(fields).forEach((field) => {
        response += `\nNumber of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`;
      });

      resolve(response);
    });
  });
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  let text = 'This is the list of our students';

  try {
    const students = await countStudents(database);
    text += `\n${students}`;
  } catch (err) {
    text += `\n${err.message}`;
  }

  res.send(text);
});

app.listen(1245);

module.exports = app;
