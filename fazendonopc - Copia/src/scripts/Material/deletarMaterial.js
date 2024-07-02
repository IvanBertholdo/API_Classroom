const authorize = require('../../services/auth');
const deleteMaterial = require('../../services/Material/deleteMaterial');

const courseId = '690931221526'; // Substitua pelo ID da turma desejada
const materialId = '696907086517'; // Substitua pelo ID do material a ser deletado

authorize(async (auth) => {
    try {
        await deleteMaterial(auth, courseId, materialId);
        console.log('Material deletado da turma com sucesso.');
    } catch (error) {
        console.error('Erro ao deletar material da turma:', error);
    }
});
