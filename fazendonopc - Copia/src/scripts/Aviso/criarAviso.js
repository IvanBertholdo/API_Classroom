const authorize = require('../../services/auth');
const createAnnouncement = require('../../services/Aviso/createAnnouncement');

const text = 'Sejam Bem Vindos!'
const fileId = '1uLPSHutcm0al9e95uRtrYRLHd5JW51wT'
const courseId = '690931221526'
const date = ''//'2024-08-03T12:00:00Z'


authorize(async (auth) => {
    try {
        createAnnouncement(auth, text, courseId, fileId, date);
    } catch (error) {
      console.error('Erro ao executar operações:', error);
    }
  });
  