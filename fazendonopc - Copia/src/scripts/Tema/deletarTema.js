const authorize = require('../../services/auth');
const deleteTopic = require('../../services/Tema/deleteTopic');

authorize(async (auth) => {
    try {
        const courseId = '690931221526'; // Substitua pelo ID do curso desejado
        const topicId = '696903137061'; // Substitua pelo ID do tópico desejado
        await deleteTopic(auth, courseId, topicId);
        console.log('Tópico excluído com sucesso.');
    } catch (error) {
        console.error('Erro ao excluir tópico:', error);
    }
});