const { google } = require('googleapis');

function patchMaterial(auth, courseId, materialId) {
  return new Promise((resolve, reject) => {
    const classroom = google.classroom({ version: 'v1', auth });
    const material = {
        title: 'Teste Patch API',
        description: 'Teste realizado API',
        //state: '',
        //scheduledTime: '',
        //topicId: ''
    };

    const updateMask = 'title,description'  //state,scheduledTime,topicId'

    classroom.courses.courseWorkMaterials.patch({
      courseId: courseId,
      id: materialId,
      updateMask: updateMask,
      resource: material,
    }, (err, res) => {
      if (err) {
        console.error('Erro ao atualizar material:', err);
        reject(err);
        return;
      }
      console.log('Material Atualizado:', res.data);
    });
  });
}

module.exports = patchMaterial;
