const { google } = require('googleapis');

function listMultipleChoice(auth, courseId) {
    return new Promise((resolve, reject) => {
        const classroom = google.classroom({ version: 'v1', auth });

        classroom.courses.courseWork.list({
            courseId: courseId,
        }, (err, res) => {
            if (err) {
                console.error('Erro ao listar materiais da turma:', err);
                reject(err);
                return;
            }
            const activities = res.data
            resolve(activities);
        });
    });
}

module.exports = listMultipleChoice;
