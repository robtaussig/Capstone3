const Store = require('flux/utils').Store;
const AppDispatcher = require('../dispatcher/dispatcher.js');
const SavedProjectConstants = require('../constants/saved_project_constants.js');
const SavedProjectStore = new Store(AppDispatcher);

let _blankProject = {
                      image: {},
                      title: "",
                      blurb: "",
                      location: "",
                      duration: 0,
                      goal: 0,
                      saved: false,
                      errorMessage: ""
                    };

let _savedProject = _blankProject;

SavedProjectStore.find = (id) => {

};

SavedProjectStore.currentProject = () => {
  return _savedProject;
};

function _updateSavedProject (project) {
  for (let item in project) {
    if (project.hasOwnProperty(item)) {
      _savedProject[item] = project[item];
    }
  }
  SavedProjectStore.__emitChange();
}

function _removeSavedProject () {
  _savedProject = _blankProject;
  SavedProjectStore.__emitChange();
}

SavedProjectStore.__onDispatch = (payload) => {
  switch (payload.actionType) {
    case SavedProjectConstants.SAVED_PROJECT_RECEIVED:
      _updateSavedProject(payload.data);
    break;
    case SavedProjectConstants.SAVED_PROJECT_REMOVED:
      _removeSavedProject();
    break;
  }
};

module.exports = SavedProjectStore;