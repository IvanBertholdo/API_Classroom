const authorize = require('../../services/auth');
const createCoursework = require('../../services/Atividade/createCourseWork');

const title = 'Atividade de Soft Skill 5'
const description = 'Treinar suas Soft Skills'
const topicId = ''//'696899308529'
const fileId = '1uLPSHutcm0al9e95uRtrYRLHd5JW51wT'
const courseId = '690931221526'
const date = {
  "year": 2024,
  "month": 8,
  "day": 27
}
const maxPoints = 20

authorize(async (auth) => {
    try {
        createCoursework(auth, title, description, courseId, fileId, topicId, date, maxPoints);
    } catch (error) {
      console.error('Erro ao executar operações:', error);
    }
  });
  