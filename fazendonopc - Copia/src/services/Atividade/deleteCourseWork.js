const { google } = require('googleapis');

function deleteCoursework(auth, courseId, courseworkId) {
    return new Promise((resolve, reject) => {
        const classroom = google.classroom({ version: 'v1', auth });

        classroom.courses.courseWork.delete({
            courseId: courseId,
            id: courseworkId,
        }, (err, res) => {
            if (err) {
                console.error('Erro ao deletar o trabalho:', err);
                reject(err);
                return;
            }
            console.log('Trabalho deletado com sucesso.');
        });
    });
}

module.exports = deleteCoursework;