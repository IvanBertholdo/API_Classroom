const authorize = require('../../services/auth');
const createMultipleChoice = require('../../services/MultiplaEscolha/createMultipleChoice');

const title = 'Atividade de Soft Skill 6'
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
const multipleChoiceQuestion = { "choices": ['Arara', 'Besouro', 'Camelo']}

authorize(async (auth) => {
    try {
        createMultipleChoice(auth, title, description, courseId, fileId, topicId, date, maxPoints, multipleChoiceQuestion);
    } catch (error) {
      console.error('Erro ao executar operações:', error);
    }
  });
  