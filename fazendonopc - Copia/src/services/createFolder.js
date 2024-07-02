const { google } = require('googleapis');

const createFolder = async (auth, parentFolderId, folderLetivo, folderCurso, folderPeriodo, folderDisciplina) => {
    try {
        const drive = google.drive('v3'); 
        
        // 1. Cria a pasta do ano letivo (se não existir)
        let letivoExistsId = await checkFolderExists(auth, parentFolderId, folderLetivo);
        if (!letivoExistsId) {
          const letivoMetadata = {
            name: folderLetivo,
            mimeType: 'application/vnd.google-apps.folder',
            parents: parentFolderId ? [parentFolderId] : [],
          };
          const letivoNew = await drive.files.create({
            auth: auth,
            resource: letivoMetadata,
            fields: 'id',
          });
          letivoExistsId = letivoNew.data.id;
          console.log(`Pasta do ano letivo criada com sucesso: ${letivoNew.data.id}`);
        } else {
          console.log(`Pasta do ano letivo "${folderLetivo}" já existe.`);
        }

        // 2. Cria a pasta do curso dentro da pasta do ano letivo (se não existir)
        let cursoExistsId = await checkFolderExists(auth, letivoExistsId, folderCurso);
        if (!cursoExistsId) {
          const cursoMetadata = {
            name: folderCurso,
            mimeType: 'application/vnd.google-apps.folder',
            parents: [letivoExistsId], // Use letivoResult.data.id se a pasta do letivo foi criada
          };
          const cursoNew = await drive.files.create({
            auth: auth,
            resource: cursoMetadata,
            fields: 'id',
          });
          cursoExistsId = cursoNew.data.id;
          console.log(`Pasta do curso criada com sucesso: ${cursoNew.data.id}`);
        } else {
          console.log(`Pasta do curso "${folderCurso}" já existe.`);
        }

        // 3. Cria a pasta do período dentro da pasta do curso (se não existir)
        let periodoExistsId = await checkFolderExists(auth, cursoExistsId, folderPeriodo);
        if (!periodoExistsId) {
          const periodoMetadata = {
            name: folderPeriodo,
            mimeType: 'application/vnd.google-apps.folder',
            parents: [cursoExistsId], // Use cursoResult.data.id se a pasta do curso foi criada
          };
          const periodoNew = await drive.files.create({
            auth: auth,
            resource: periodoMetadata,
            fields: 'id',
          });
          periodoExistsId = periodoNew.data.id;
          console.log(`Pasta do período criada com sucesso: ${periodoNew.data.id}`);
          return periodoExistsId
        } else {
          console.log(`Pasta do período "${folderPeriodo}" já existe.`);
        }

        // // 4. Cria a pasta da disciplina dentro da pasta do período (se não existir)
        // let disciplinaExistsId = await checkFolderExists(auth, periodoExistsId, folderDisciplina);
        // if (!disciplinaExistsId) {
        //   const disciplinaMetadata = {
        //     name: folderDisciplina,
        //     mimeType: 'application/vnd.google-apps.folder',
        //     parents: [periodoExistsId], // Use periodoResult.data.id se a pasta do período foi criada
        //   };
        //   const disciplinaNew = await drive.files.create({
        //     auth: auth,
        //     resource: disciplinaMetadata,
        //     fields: 'id',
        //   });
        //   disciplinaExistsId = disciplinaNew.data.id;
        //   console.log(`Pasta da disciplina criada com sucesso: ${disciplinaNew.data.id}`);
        //   return disciplinaExistsId
        // } else {
        //   console.log(`Pasta da disciplina "${folderDisciplina}" já existe.`);
        // }

      } catch (err) {
        console.error('Erro ao criar pastas:', err);
    } 
};

// Função para verificar se a pasta já existe
async function checkFolderExists(auth, parentFolderId, folderName) {
  try {
    const drive = google.drive('v3');
    const response = await drive.files.list({
      auth: auth,
      q: `name='${folderName}' and mimeType='application/vnd.google-apps.folder' and parents in '${parentFolderId}'`,
      fields: 'files(id)',
    });
    if (response.data.files.length > 0) {
      return response.data.files[0].id; // Retorna o ID da pasta encontrada
    } else {
      return null; // Retorna null se a pasta não for encontrada
    }
  } catch (error) {
    console.error('Erro ao verificar se a pasta existe:', error);
    return null;
  }
}

module.exports = createFolder