const authorize = require('../../services/auth');
const listActivity = require('../../services/Atividade/listCourseWork');

const courseId = '690931221526'; // Substitua pelo ID da turma desejada

authorize(async (auth) => {
    try {       
        const activities = await listActivity(auth, courseId);
        console.log('Materiais da turma:', activities);
    } catch (error) {
        console.error('Erro ao listar materiais da turma:', error);
    }
});