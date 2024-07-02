const authorize = require('../../services/auth');
const patchMaterial = require('../../services/Material/patchMaterial');

const courseId = '690931221526'
const materialId = '697191566474'

authorize(async (auth) => {
    try {
        await patchMaterial(auth, courseId, materialId);
    } catch (error) {
      console.error('Erro ao executar operações:', error);
    }
  });
  