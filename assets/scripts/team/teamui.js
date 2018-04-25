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
  console.log('deleted')
  $('#message').text('Team Deleted!')
  $('#message').css('text-align', 'center')
  $('.Team').addClass('hidden')
  $('form').trigger('reset')
}

const deleteTeamFailure = function () {
  console.log('failed')
  $('#message').text('Failed to delete team!')
  $('#message').css('text-align', 'center')
  $('form').trigger('reset')
}

const getTeamsSuccess = function (data) {
  $('#team-message').empty()
  // loop through data.teams declaring team as function name
  data.teams.forEach((team) => {
    const teamsHtml = `
      <div class="Team">
        <p>name: ${team.name}</p>
        <p>location: ${team.location}</p>
        <p>ID: ${team.id}</p>
        <form id="delete-team-${team.id}" class="delete-team border">
          <fieldset>
            <input type="hidden" name="id" placeholder="ID" value="${team.id}">
            <input id="button-${team.id}" type="submit" value="Delete Team">
          </fieldset>
        </form>
      </div>`
    // appends teamHtml to the end of string
    $('#team-message').append(teamsHtml)
    $(`#delete-team-${team.id}`).on('submit', () => {
      // Do the delete ajax
    })
  })
  $('#team-message').css('text-align', 'center')
  $('#team-message').removeClass('hidden')
  $('.hide-teams').removeClass('hidden')
  $('.hide-teams').show()
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
