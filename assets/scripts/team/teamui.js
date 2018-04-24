'use strict'
// const store = require('../store')

const createTeamSuccess = function (data) {
  console.log(data)
  $('#message').text('Team Created!')
  $('#message').css('text-align', 'center')
}

const createTeamFailure = function () {
  $('#message').text('Failed to create team!')
  $('#message').css('text-align', 'center')
}

const updateTeamSuccess = function (data) {
  $('#message').text('Team Updated!')
  $('#message').css('text-align', 'center')
}

const updateTeamFailure = function () {
  $('#message').text('Failed to update team!')
  $('#message').css('text-align', 'center')
}

const deleteTeamSuccess = function () {
  $('#message').text('Team Deleted!')
  $('#message').css('text-align', 'center')
}

const deleteTeamFailure = function () {
  $('#message').text('Failed to delete team!')
  $('#message').css('text-align', 'center')
}
module.exports = {
  createTeamSuccess,
  createTeamFailure,
  updateTeamSuccess,
  updateTeamFailure,
  deleteTeamSuccess,
  deleteTeamFailure
}
