const authorize = require('../../services/auth');
const listAnnouncement = require('../../services/Aviso/listAnnouncement');

const courseId = '690931221526'; // Substitua pelo ID da turma desejada

authorize(async (auth) => {
    try {       
        const activities = await listAnnouncement(auth, courseId);
        console.log('Avisos da turma:', activities);
    } catch (error) {
        console.error('Erro ao listar avisos da turma:', error);
    }
});