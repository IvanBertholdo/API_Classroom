const { google } = require('googleapis');

function createCourse(auth, name, section, description, room) {
  return new Promise((resolve, reject) => {
    const classroom = google.classroom({ version: 'v1', auth });
    const course = {
      name: name,
      section: section,
      description: description,
      room: room,
      teacherFolder: {
        title: name
      },
      ownerId: 'me',
      courseState: 'PROVISIONED',
    };

    classroom.courses.create({
      resource: course,
    }, (err, res) => {
      if (err) {
        console.error('Erro ao criar a turma:', err);
        reject(err);
        return;
      }
      console.log('Turma criada:', res.data);
      resolve(res.data.teacherFolder.id);
    });
  });
}

module.exports = createCourse;
