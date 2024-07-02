const fs = require('fs');
const { google } = require('googleapis');

function uploadFile(auth, coursePasteId) {
  return new Promise((resolve, reject) => {
    const drive = google.drive({ version: 'v3', auth });
    const fileMetadata = {
      'name': 'teste.txt',
      'parents': [coursePasteId]  // ID da pasta onde deseja fazer o upload
    };
    const media = {
      mimeType: 'text/plain',
      body: fs.createReadStream('teste.txt')  // Caminho para o seu arquivo local
    };

    drive.files.create({
      resource: fileMetadata,
      media: media,
      fields: 'id'
    }, (err, file) => {
      if (err) {
        console.error('Erro ao fazer upload do arquivo:', err);
        reject(err);
        return;
      }
      console.log('Arquivo enviado com sucesso, ID:', file.data.id);
      resolve(file.data.id); // Retorna o ID do arquivo enviado
    });
  });
}

module.exports = uploadFile;
