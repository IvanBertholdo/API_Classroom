const { google } = require('googleapis');

function createMultipleChoice(auth, title, description, courseId, fileId, topicId, date, maxPoints, multipleChoiceQuestion) {
  const classroom = google.classroom({ version: 'v1', auth });

  const coursework = {
    title: title,
    description: description,
    materials: [
      {
        driveFile: {
          driveFile: {
            id: fileId 
          }
        }
      }
    ],
    maxPoints: maxPoints,
    workType: 'MULTIPLE_CHOICE_QUESTION',
    state: 'PUBLISHED',
    multipleChoiceQuestion: multipleChoiceQuestion
  };
  
  if (topicId) {
    coursework.topicId = topicId;
  }

  if (date) {
    coursework.dueDate = date;
    coursework.dueTime = {
      "hours": 2,
      "minutes": 59,
      "seconds": 59
    }
  }

  classroom.courses.courseWork.create({
    courseId: courseId, 
    resource: coursework
  }, (err, res) => {
    if (err) {
      console.error('Erro ao criar o trabalho:', err);
      return;
    }
    console.log('Trabalho criado:', res.data);
  });
}

module.exports = createMultipleChoice;
