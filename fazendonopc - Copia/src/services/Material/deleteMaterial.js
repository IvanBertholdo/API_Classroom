const { google } = require('googleapis');

function deleteMaterial(auth, courseId, materialId) {
    return new Promise((resolve, reject) => {
        const classroom = google.classroom({ version: 'v1', auth });

        classroom.courses.courseWorkMaterials.delete({
            courseId: courseId,
            id: materialId,
        }, (err, res) => {
            if (err) {
                console.error('Erro ao deletar material da turma:', err);
                reject(err);
                return;
            }
            resolve(res.data);
        });
    });
}

module.exports = deleteMaterial;
