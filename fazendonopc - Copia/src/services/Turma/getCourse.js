const { google } = require('googleapis');

function getCourse(auth, courseId) {
    return new Promise((resolve, reject) => {
        const classroom = google.classroom({ version: 'v1', auth });

        classroom.courses.get({
            id: courseId,
        }, (err, res) => {
            if (err) {
                console.error('Erro ao buscar turma:', err);
                reject(err);
                return;
            }
            const course = res.data
            resolve(course)
        });
    });
}

module.exports = getCourse;