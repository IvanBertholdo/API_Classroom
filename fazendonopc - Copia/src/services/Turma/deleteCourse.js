const { google } = require('googleapis');

function deleteCourse(auth, courseId) {
    return new Promise((resolve, reject) => {
        const classroom = google.classroom({ version: 'v1', auth });

        classroom.courses.delete({
            id: courseId,
        }, (err, res) => {
            if (err) {
                console.error('Erro ao deletar turma:', err);
                reject(err);
                return;
            }
            console.log('Turma deletada com sucesso.');
        });
    });
}

module.exports = deleteCourse;