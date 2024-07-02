const { google } = require('googleapis');

function deleteTopic(auth, courseId, topicId) {
    return new Promise((resolve, reject) => {
        const classroom = google.classroom({ version: 'v1', auth });
  
        classroom.courses.topics.delete({
            courseId: courseId,
            id: topicId,
        }, (err, res) => {
            if (err) {
                console.error('Erro ao excluir tópico:', err);
                reject(err);
                return;
            }
            resolve(res.data);
        });
    });
}

module.exports = deleteTopic;