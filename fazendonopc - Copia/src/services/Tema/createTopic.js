const { google } = require('googleapis');

function createTopic(auth, courseId, topicName) {
    return new Promise((resolve, reject) => {
      const classroom = google.classroom({ version: 'v1', auth });
      const topic = {
        name: topicName,
      };
  
      classroom.courses.topics.create({
        courseId: courseId, 
        resource: topic,
      }, (err, res) => {
        if (err) {
          console.error('Erro ao criar o tema:', err);
          reject(err);
          return;
        }
        console.log('Tema criado:', res.data);
        resolve(res.data);
      });
    });
}

module.exports = createTopic;