const authorize = require('../../services/auth');
const deleteCourse = require('../../services/Turma/deleteCourse');

const courseId = '697008816772'; // Substitua pelo ID da turma desejada

authorize(async (auth) => {
    try {
        await deleteCourse(auth, courseId);
        console.log('Turma deletada!');
    } catch (error) {
        console.error('Erro ao deletar turma:', error);
    }
});
