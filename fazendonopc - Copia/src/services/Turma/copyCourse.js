const { google } = require('googleapis');

async function copyCourse(auth, copyCourseId, newCourseId) {
    try {
        const classroom = google.classroom({ version: 'v1', auth });

        const topicsResponse = await classroom.courses.topics.list({
            courseId: copyCourseId,
            pageSize: 100,
        });
 
        const topics = topicsResponse.data.topic;

        const topicMap = {}

        for (const topic of topics) {
            const newTopic = {
                name: topic.name,
                courseId: newCourseId,
            };
            try {
                const createdTopic = await classroom.courses.topics.create({
                    courseId: newCourseId,
                    resource: newTopic,
            });
            console.log(createdTopic)
            topicMap[topic.topicId] = createdTopic.data.topicId
            } catch (error) {
                console.error(`Erro ao criar tópico '${topic.name}'`, error);
            }
        }

        const courseworkResponse = await classroom.courses.courseWork.list({
            courseId: copyCourseId,
            pageSize: 100,
        });

        const coursework = courseworkResponse.data.courseWork;

        for (const activity of coursework) {
            const topicId = topicMap[activity.topicId]
            const newActivity = {
                title: activity.title,
                description: activity.description,
                workType: activity.workType,
                materials: activity.materials,
                state: activity.state,
                //dueDate: activity.dueDate,
                courseId: newCourseId,
                maxPoints: activity.maxPoints,
                topicId: topicId
                //precisa colocar os if para identificar a existencia ou nao de alguns parametros
            };
            try {
                classroom.courses.courseWork.create({
                    courseId: newCourseId,
                    resource: newActivity,
                });
            } catch (error) {
                console.error(`Erro ao criar atividade '${activity.title}'`, error);
            }
        }

        const courseworkResponseMaterial = await classroom.courses.courseWorkMaterials.list({
            courseId: copyCourseId,
            pageSize: 100,
        });

        const courseworkMaterial = courseworkResponseMaterial.data.courseWorkMaterial;

        for (const material of courseworkMaterial) {
            const topicId = topicMap[material.topicId]
            const newMaterial = {
                title: material.title,
                description: material.description,
                courseId: newCourseId,
                materials: material.materials,
                topicId: topicId,
            };
            try {
                classroom.courses.courseWorkMaterials.create({
                    courseId: newCourseId,
                    resource: newMaterial,
                });
            } catch (error) {
                console.error(`Erro ao criar atividade '${material.title}'`, error);
            }
        }
        console.log(`Atividades e tópicos copiados para o curso ${newCourseId}`);
        console.log(topicMap)
    } catch (error) {
        console.error(`Erro ao copiar atividades e tópicos:`, error);
    }  
}

module.exports = copyCourse;
