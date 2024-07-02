const { google } = require('googleapis');

// Função para obter uma pasta pelo ID
async function getFolderById(auth, folderId) {
  try {
    const drive = google.drive('v3');

    // Realiza a requisição para obter a pasta
    const response = await drive.files.get({
      auth: auth,
      fileId: folderId, // ID da pasta a ser obtida
      fields: '*', // Retorna todos os campos da pasta
    });

    // Imprime as informações da pasta
    console.log('Informações da pasta:', response.data);

    return response.data; // Retorna os dados da pasta

  } catch (error) {
    console.error('Erro ao obter a pasta:', error);
  }
}

module.exports = getFolderById