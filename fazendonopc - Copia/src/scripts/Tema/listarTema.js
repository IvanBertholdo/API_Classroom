const authorize = require('../../services/auth');
const listTopic = require('../../services/Tema/listTopic');

authorize(async (auth) => {
    try {
        const courseId = '690931221526'; // Substitua pelo ID do curso desejado
        const topics = await listTopic(auth, courseId);
        console.log('Tópicos:', topics);
    } catch (error) {
        console.error('Erro ao listar tópicos:', error);
    }
});
