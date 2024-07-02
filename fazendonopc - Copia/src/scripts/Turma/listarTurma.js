const authorize = require('../../services/auth');
const listCourse = require('../../services/Turma/listCourse');

const studentId = 'me'; // Substitua pelo ID da turma desejada
const teacherId = 'me';
const courseStates = ['ACTIVE'];

authorize(async (auth) => {
    try {       
        const courses = await listCourse(auth, studentId, teacherId, courseStates);
        console.log('Cursos:', courses);
    } catch (error) {
        console.error('Erro ao listar cursos:', error);
    }
});