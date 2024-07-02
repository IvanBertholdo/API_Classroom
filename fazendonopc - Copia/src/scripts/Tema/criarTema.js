const authorize = require('../../services/auth');
const createTopic = require('../../services/Tema/createTopic');

const courseId = '690931221526'
const topicName = 'Hard Skills'
authorize(async (auth) => {
    try {
        await createTopic(auth, courseId, topicName);
    } catch (error) {
      console.error('Erro ao executar operações:', error);
    }
  });