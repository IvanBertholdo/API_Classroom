const authorize = require('../../services/auth');
const createCourse = require('../../services/Turma/createCourse');
const createFolder = require('../../services/createFolder');
const moveFolder = require('../../services/moveFolder');

const name = 'Códigos de Alta Performance'
const section = 'Sistemas de Informação'
const description = '6º Período'
const room = '2024-02'
const parentFolderId = '0B-2hyulmm2FSfnV6Z1VxU3hVVWhhdF9NaFZaM2x5YUQxWHdEVGF2NV9JT2RCdFVxczJKNTg'


authorize(async (auth) => {
    try {  
      const teacherFolderId = await createCourse(auth, name, section, description, room);
      const courseFolder = await createFolder(auth, parentFolderId, room, section, description, name);
      await moveFolder(auth, teacherFolderId, courseFolder, parentFolderId, name)

    } catch (error) {
      console.error('Erro ao executar operações:', error);
    }
});