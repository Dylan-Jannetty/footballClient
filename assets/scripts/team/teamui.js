'use strict'
const store = require('../store')

const createTeamSuccess = function (data) {
  $('#message').text('Team Created!')
  $('#message').css('text-align', 'center')
  store.user = data.user
}

const createTeamFailure = function () {
  $('#message').text('Failed to create team!')
  $('#message').css('text-align', 'center')
}

module.exports = {
  createTeamSuccess,
  createTeamFailure
}
