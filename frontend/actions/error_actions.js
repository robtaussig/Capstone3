const AppDispatcher = require('../dispatcher/dispatcher.js');
const ApiUtil = require('../utils/session_api_util.js');
const ErrorConstants = require('../constants/error_constants.js');

const ErrorActions = {

  mismatchedBoth () {
    AppDispatcher.dispatch({
      actionType:ErrorConstants.SIGNUP_ERROR_RECEIVED,
      form: 'signup',
      message: "Neither your email nor your password match"
    });
  },

  mismatchedPasswords () {
    AppDispatcher.dispatch({
      actionType:ErrorConstants.SIGNUP_ERROR_RECEIVED,
      form: 'signup',
      message: "Your password doesn't match"
    });
  },

  mismatchedEmails () {
    AppDispatcher.dispatch({
      actionType:ErrorConstants.SIGNUP_ERROR_RECEIVED,
      form: 'signup',
      message: "Your email doesn't match"
    });
  },

  receiveError (form, data) {
    AppDispatcher.dispatch({
      actionType:ErrorConstants.ERROR_RECEIVED,
      form: form,
      data: data
    });
  }

};

module.exports = ErrorActions;
