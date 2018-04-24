'use strict'
// const store = require('../store')

const createTeamSuccess = function (data) {
  console.log(data)
  $('#message').text('Team Created!')
  $('#message').css('text-align', 'center')
  $('form').trigger('reset')
}

const createTeamFailure = function () {
  $('#message').text('Create some of your favorite teams!')
  $('#message').css('text-align', 'center')
  $('form').trigger('reset')
}

const updateTeamSuccess = function (data) {
  $('#message').text('Team Updated!')
  $('#message').css('text-align', 'center')
  $('form').trigger('reset')
}

const updateTeamFailure = function () {
  $('#message').text('Failed to update team!')
  $('#message').css('text-align', 'center')
  $('form').trigger('reset')
}

const deleteTeamSuccess = function () {
  $('#message').text('Team Deleted!')
  $('#message').css('text-align', 'center')
  $('form').trigger('reset')
}

const deleteTeamFailure = function () {
  $('#message').text('Failed to delete team!')
  $('#message').css('text-align', 'center')
  $('form').trigger('reset')
}

const getTeamsSuccess = function (data) {
// declare teamsHtml as empty string
  let teamsHtml = ''
  // loop through data.teams declaring team as function name
  data.teams.forEach((team) => {
    // teamsHtml = '' + team.name team.location and team.id
    teamsHtml = teamsHtml + `<p>name: ${team.name}</p>
        <p>location: ${team.location}</p>
        <p>ID: ${team.id}</p>`
    console.log(team.location)
  })
  console.log(data)
  // appends teamHtml to the end of string
  $('#team-message').append('These are your Favorite teams:' + teamsHtml)
  $('#team-message').css('text-align', 'center')
}

const getTeamsFailure = function () {
  $('#team-message').text('Failed to get your favorite teams!')
  $('#team-message').css('text-align', 'center')
}
module.exports = {
  createTeamSuccess,
  createTeamFailure,
  updateTeamSuccess,
  updateTeamFailure,
  deleteTeamSuccess,
  deleteTeamFailure,
  getTeamsSuccess,
  getTeamsFailure
}
