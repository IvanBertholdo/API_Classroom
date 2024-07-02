const authorize = require('../../services/auth');
const deleteAnnouncement = require('../../services/Aviso/deleteAnnouncement');

const courseId = '690931221526'; // Substitua pelo ID da turma desejada
const announcementId = '697006186603'; // Substitua pelo ID do material a ser deletado

authorize(async (auth) => {
    try {
        await deleteAnnouncement(auth, courseId, announcementId);
        console.log('Aviso deletado da turma com sucesso.');
    } catch (error) {
        console.error('Erro ao deletar aviso da turma:', error);
    }
});
