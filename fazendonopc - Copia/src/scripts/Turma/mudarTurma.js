const authorize = require('../../services/auth');
const patchCourse = require('../../services/Turma/patchCourse');

const name = 'Imagens 3D'
const section = 'Design'
const description = 'Classroom da disciplina de Design da UNIVALE'
const room = '2024-01AB'
const id = '697008816772'


authorize(async (auth) => {
    try {
        await patchCourse(auth, name, section, description, room, id);
    } catch (error) {
      console.error('Erro ao executar operações:', error);
    }
  });
  