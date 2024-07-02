const authorize = require('../../services/auth');
const listMaterial = require('../../services/Material/listMaterial');

const courseId = '690931221526'; // Substitua pelo ID da turma desejada

authorize(async (auth) => {
    try {
        const materials = await listMaterial(auth, courseId);
        console.log('Materiais da turma:', materials);
    } catch (error) {
        console.error('Erro ao listar materiais da turma:', error);
    }
});