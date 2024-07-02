const authorize = require('../../services/auth');
const uploadFile = require('../../services/uploadFile');

authorize(async (auth) => {
    try {  
        await uploadFile(auth, courseFolderId);
    } catch (error) {
      console.error('Erro ao executar operações:', error);
    }
  });
  