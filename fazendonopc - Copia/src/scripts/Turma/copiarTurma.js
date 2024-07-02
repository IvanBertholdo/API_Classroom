const authorize = require('../../services/auth');
const createCourse = require('../../services/Turma/createCourse');
const copyCourse = require('../../services/Turma/copyCourse')

const name = 'Turma Copiada'
const section = 'Sistemas de Informação'
const description = 'Classroom da disciplina copiada'
const room = 'copiado'
const copyCourseId = '690931221526'

authorize(async (auth) => {
    try {
        //const newCourse = await createCourse(auth, name, section, description, room);
        //console.log(newCourse.id)
        const newCourseId = '697207236603'//newCourse.id
        await copyCourse(auth, copyCourseId, newCourseId)
    } catch (error) {
      console.error('Erro ao executar operações:', error);
    }
  });