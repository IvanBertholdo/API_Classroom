const { google } = require('googleapis');

// Função para mover a pasta
async function moveFolder(auth, folderId, newParentFolderId, parentFolderId, name) {
  try {
    const drive = google.drive('v3');

    // Realiza a requisição para mover a pasta
    const response = await drive.files.update({
      auth: auth,
      fileId: folderId, // ID da pasta a ser movida
      requestBody: {
        name: name // Define o novo nome da pasta
      },
      addParents: newParentFolderId, // ID da nova pasta pai
      removeParents: parentFolderId, // Remove qualquer pasta pai anterior
      fields: 'id', // Retorna o ID da pasta movida
    });

    // Imprime a ID da pasta movida
    console.log(`Pasta movida com sucesso: ${response.data.id}`);

  } catch (error) {
    console.error('Erro ao mover a pasta:', error);
  }
}

module.exports = moveFolder