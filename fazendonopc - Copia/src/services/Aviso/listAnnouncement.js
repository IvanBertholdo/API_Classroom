const { google } = require('googleapis');

function listAnnouncement(auth, courseId) {
    return new Promise((resolve, reject) => {
        const classroom = google.classroom({ version: 'v1', auth });

        classroom.courses.announcements.list({
            courseId: courseId,
            announcementStates: ['PUBLISHED', 'DRAFT'],
        }, (err, res) => {
            if (err) {
                console.error('Erro ao listar avisos da turma:', err);
                reject(err);
                return;
            }
            const activities = res.data
            resolve(activities);
        });
    });
}

module.exports = listAnnouncement;
