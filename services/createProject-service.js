const ProjectEntity = require("../domain/entities/project-entity");
const createProjectRepository = require("../infra/repositories/project/createProject-repository");

module.exports = async function (project) {
  const newProject = new ProjectEntity(project);
  newProject.validateFieldsCreation();
  return await createProjectRepository(newProject.getProject());
};
