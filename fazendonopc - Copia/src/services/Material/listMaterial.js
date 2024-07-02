const { google } = require('googleapis');

function listMaterial(auth, courseId) {
    return new Promise((resolve, reject) => {
        const classroom = google.classroom({ version: 'v1', auth });

        classroom.courses.courseWorkMaterials.list({
            courseId: courseId,
        }, (err, res) => {
            if (err) {
                console.error('Erro ao listar materiais da turma:', err);
                reject(err);
                return;
            }
            const materials = res.data
            resolve(materials);
        });
    });
}

module.exports = listMaterial;
