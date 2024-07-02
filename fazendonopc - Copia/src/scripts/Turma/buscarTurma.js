const authorize = require('../../services/auth');
const getCourse = require('../../services/Turma/getCourse');

const courseId = '697107572981'

authorize(async (auth) => {
    try {
        const course = await getCourse(auth, courseId);
        console.log('Curso:', course);
    } catch (error) {
      console.error('Erro ao executar operações:', error);
    }
  });
  
