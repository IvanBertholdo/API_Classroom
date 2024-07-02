const { google } = require('googleapis');

function deleteAnnouncement(auth, courseId, announcementId) {
    return new Promise((resolve, reject) => {
        const classroom = google.classroom({ version: 'v1', auth });

        classroom.courses.announcements.delete({
            courseId: courseId,
            id: announcementId,
        }, (err, res) => {
            if (err) {
                console.error('Erro ao deletar o aviso:', err);
                reject(err);
                return;
            }
            console.log('Aviso deletado com sucesso.');
        });
    });
}

module.exports = deleteAnnouncement;