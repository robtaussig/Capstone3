const React = require('react');
const ProjectCategoryIds = require('../constants/project_category_ids.js');
const SavedProjectActions = require('../actions/saved_project_actions.js');
const UserStore = require('../stores/user_store.js');
const UserActions = require('../actions/user_actions.js');
const SessionStore = require('../stores/session_store.js');
import { browserHistory } from 'react-router';

const ProjectPreview = React.createClass({

  getInitialState () {
    return ({user: ""});
  },

  _goToPage () {
    if (window.location.pathname === "/savedProjects") {
      SavedProjectActions.updateSavedProject(
        'savedProject', this.props.project
      );
      browserHistory.push('/finalizeProject');
    } else {
      browserHistory.push('/project/' + this.props.project.id);
    }
  },

  render: function() {
    let _user = this.props.project.author_full_name;
    let _width;
    if (this.props.project.progress) {
      _width = (335 * this.props.project.progress) > 335 ? 335 :
        (335 * this.props.project.progress);
    } else {
      _width = 0;
    }

    let _picture = this.props.project.image === "/assets/default_pic.png" ?
      window.default_pic : this.props.project.image;

    return (

      <div>
        <div onClick={this._goToPage} className="project-preview-wrapper">
          <div className="project-preview-image"><img id="default-pic"
          src={_picture || window.default_pic}></img></div>
          <div className="preview-bottom-half">
            <h3 className="project-preview-title">{this.props.project.title ===
              'null' ? "" : this.props.project.title}</h3>
            <p className="project-preview-username">{_user}</p>
            <br></br>
            <p className="project-preview-blurb">{this.props.project.blurb ===
              'null' ? "" : this.props.project.blurb}</p>
            <br></br>
            <p className="project-preview-location">{
              this.props.project.location ===
                'null' ? "Empty Location" : this.props.project.location
            }</p>
            <p className="project-preview-category">{
              ProjectCategoryIds[this.props.project.category_id === 'null' ?
               0 : this.props.project.category_id].label
            }</p>
            <br></br>
            <p className="funded-preview">
              <b>${this.props.project.funded}</b> funded to-date
            </p>
            <br></br>
            <div className="project-preview-progress-bar">
              <div style={{width: _width + 'px'}}
                className="progress-overflow"></div>
            </div>
            <ul className="project-preview-summary">
              <li className="preview-summary-cat">
                <ul className="project-preview-goal">
                  <li id="preview-basic-amount">${this.props.project.goal ===
                    'null' ? "" : this.props.project.goal}</li>
                  <li id="preview-basic-text">goal</li>
                </ul>
              </li>
              <li className="preview-summary-cat duration-li">
                <ul className="project-preview-duration">
                  <li id="preview-basic-amount">{this.props.project.duration ===
                    'null' ? "" : this.props.project.duration}</li>
                  <li id="preview-basic-text">{
                    this.props.project.duration === 1 ?
                     'day to go' : 'days to go'
                   }</li>
                </ul>
              </li>
              <li className="preview-summary-cat">
                <ul className="project-preview-funders">
                  <li id="preview-basic-amount">{this.props.project.funders ===
                    'null' ? "" : this.props.project.funders}</li>
                  <li id="preview-basic-text">{this.props.project.funders === 1 ?
                     'backer' : 'backers'}</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

});

module.exports = ProjectPreview;
