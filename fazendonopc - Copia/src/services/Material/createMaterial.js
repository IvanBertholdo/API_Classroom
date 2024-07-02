const { google } = require('googleapis');

function createMaterial(auth, courseId, content, topicId) {
    return new Promise((resolve, reject) => {
        const classroom = google.classroom({ version: 'v1', auth });

        const material = {
            courseId: courseId,
            title: 'Material de Estudo',
            description: 'Descrição do material de estudo.',
            materials: content
        };

        if (topicId) {
            material.topicId = topicId;
        }

        classroom.courses.courseWorkMaterials.create({
            courseId: courseId,
            resource: material
        }, (err, res) => {
            if (err) {
                console.error('Erro ao adicionar material à turma:', err);
                reject(err);
                return;
            }
            resolve(res.data);
        });
    });
}

module.exports = createMaterial;
