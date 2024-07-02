const authorize = require('../../services/auth');
const deleteActivity = require('../../services/Atividade/deleteCourseWork');

const courseId = '690931221526'; // Substitua pelo ID da turma desejada
const courseWorkId = '696898362585'; // Substitua pelo ID do material a ser deletado

authorize(async (auth) => {
    try {
        await deleteActivity(auth, courseId, courseWorkId);
        console.log('Material deletado da turma com sucesso.');
    } catch (error) {
        console.error('Erro ao deletar material da turma:', error);
    }
});
