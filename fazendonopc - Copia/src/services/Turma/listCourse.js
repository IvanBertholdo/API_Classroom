const { google } = require('googleapis');

function listCourse(auth, studentId, teacherId, courseStates) {
    return new Promise((resolve, reject) => {
        const classroom = google.classroom({ version: 'v1', auth });

        classroom.courses.list({
            //studentId: studentId,
            teacherId: teacherId,
            //courseStates: courseStates,
        }, (err, res) => {
            if (err) {
                console.error('Erro ao listar turmas:', err);
                reject(err);
                return;
            }
            const courses = res.data
            resolve(courses);
        });
    });
}

module.exports = listCourse;
