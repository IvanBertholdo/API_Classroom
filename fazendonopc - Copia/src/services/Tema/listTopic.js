const { google } = require('googleapis');

function listTopic(auth, courseId) {
    return new Promise((resolve, reject) => {
        const classroom = google.classroom({ version: 'v1', auth });
  
        classroom.courses.topics.list({
            courseId: courseId,
        }, (err, res) => {
            if (err) {
                console.error('Erro ao listar tópicos:', err);
                reject(err);
                return;
            }
            resolve(res.data.topic);
        });
    });
}

module.exports = listTopic;