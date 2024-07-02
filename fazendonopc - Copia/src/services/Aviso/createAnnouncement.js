const { google } = require('googleapis');

function createAnnouncement(auth, text, courseId, fileId, date) {
  const classroom = google.classroom({ version: 'v1', auth });

  const announcement = {
    text: text,
    materials: [
      {
        driveFile: {
          driveFile: {
            id: fileId 
          }
        }
      }
    ],
    state: 'PUBLISHED',
  };

  if (date) {
    announcement.scheduledTime = date;
    announcement.state = 'DRAFT';
  }

  classroom.courses.announcements.create({
    courseId: courseId, 
    resource: announcement
  }, (err, res) => {
    if (err) {
      console.error('Erro ao criar o aviso:', err);
      return;
    }
    console.log('Aviso criado:', res.data);
  });
}

module.exports = createAnnouncement;