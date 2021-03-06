const AppDispatcher = require('../dispatcher/dispatcher.js');
const ProjectApiUtil = require('../utils/project_api_utils.js');
const ProjectConstants = require('../constants/project_constants.js');
const ErrorActions = require('./error_actions.js');

const ProjectActions = {

  submitProject (form, projectInfo) {
    ProjectApiUtil.submitProject(form, projectInfo, this.receiveProject,
      ErrorActions.receiveError);
  },

  updateProject (form, projectInfo) {
    ProjectApiUtil.updateProject(form, projectInfo, this.receiveUpdatedProject,
      ErrorActions.receiveError);
  },

  deleteProject (form, projectId) {
    ProjectApiUtil.removeProject(form, projectId,
      this.removeProject, ErrorActions.receiveError);
  },

  fetchAllProjects (form) {
    ProjectApiUtil.fetchAllProjects (form,
      this.receiveAllProjects, ErrorActions.receiveError);
  },

  fetchProject (form, projectId) {
    ProjectApiUtil.fetchProject (form, projectId,
      this.receiveProject, ErrorActions.receiveError);
  },

  receiveProject (data) {
    AppDispatcher.dispatch({
      actionType: ProjectConstants.PROJECT_RECEIVED,
      data: data
    });
  },

  filterBy (params) {
    AppDispatcher.dispatch({
      actionType: ProjectConstants.PARAMS_RECEIVED,
      params: params
    });
  },

  receiveAllProjects (data) {
    AppDispatcher.dispatch({
      actionType: ProjectConstants.PROJECTS_RECEIVED,
      data: data
    });
  },

  receiveUpdatedProject (data) {
    AppDispatcher.dispatch({
      actionType: ProjectConstants.PROJECT_UPDATED,
      data: data
    });
  },

  removeProject (data) {
    AppDispatcher.dispatch({
      actionType: ProjectConstants.PROJECT_REMOVED,
      data: data
    });
  }

};

module.exports = ProjectActions;
