const authorize = require('../../services/auth');
const createMaterial = require('../../services/Material/createMaterial');

const courseId = '690931221526' 
const content = [
  {
      driveFile: {
          driveFile: {
              id: materials
          }
      }
  },
  {
      youtubeVideo: {
          id: 'PbIxUmKiguU'
      }
  }
]
const topicId = '696906207358'

authorize(async (auth) => {
    try {
        await createMaterial(auth, courseId, content, topicId);
    } catch (error) {
      console.error('Erro ao executar operações:', error);
    }
  });