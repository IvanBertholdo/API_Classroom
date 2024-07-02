const { google } = require('googleapis');

function patchCourse(auth, name, section, description, room, id) {
  return new Promise((resolve, reject) => {
    const classroom = google.classroom({ version: 'v1', auth });
    const course = {
      name: name,
      section: section,
      description: description,
      room: room,
    };

    const updateMask = 'name,section,description,room'

    classroom.courses.patch({
      id: id,
      updateMask: updateMask,
      resource: course,
    }, (err, res) => {
      if (err) {
        console.error('Erro ao atualizar a turma:', err);
        reject(err);
        return;
      }
      console.log('Turma Atualizada:', res.data);
      resolve[res.data.id, res.data.teacherFolder.id]; // Retorna o ID da turma criada e da Pasta da Turma
    });
  });
}

module.exports = patchCourse;
