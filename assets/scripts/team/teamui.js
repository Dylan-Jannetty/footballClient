'use strict'
// const store = require('../store')

const createTeamSuccess = function (data) {
  console.log(data)
  $('#message').html(`<div class="alert alert-success" role="alert">Your team has been created</div>`)
  $('#message').css('text-align', 'center')
  $('form').trigger('reset')
  setTimeout(() => {
    $('#message').html('')
  }, 3000
  )
}

const createTeamFailure = function () {
  $('#message').html(`<div class="alert alert-danger" role="alert">There was an issue creating your team</div>`)
  $('#message').css('text-align', 'center')
  $('form').trigger('reset')
  setTimeout(() => {
    $('#message').html('')
  }, 3000
  )
}

const updateTeamSuccess = function (data) {
  $('#message').html(`<div class="alert alert-success" role="alert">Your team has been updated</div>`)
  $('#message').css('text-align', 'center')
  $('form').trigger('reset')
  setTimeout(() => {
    $('#message').html('')
  }, 3000
  )
}

const updateTeamFailure = function () {
  $('#message').html(`<div class="alert alert-danger" role="alert">There was an issue updating your team</div>`)
  $('#message').css('text-align', 'center')
  $('form').trigger('reset')
  setTimeout(() => {
    $('#message').html('')
  }, 3000
  )
}

const deleteTeamSuccess = function () {
  $('#message').html(`<div class="alert alert-success" role="alert">That team has been deleted</div>`)
  $('#message').css('text-align', 'center')
  $('.Team').addClass('hidden')
  $('form').trigger('reset')
  setTimeout(() => {
    $('#message').html('')
  }, 3000
  )
}

const deleteTeamFailure = function () {
  console.log('failed')
  $('#message').html(`<div class="alert alert-danger" role="alert">There was an issue deleting your team</div>`)
  $('#message').css('text-align', 'center')
  $('form').trigger('reset')
  setTimeout(() => {
    $('#message').html('')
  }, 3000
  )
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
  $('#message').html(`<div class="alert alert-danger" role="alert">There was an issue getting your teams</div>`)
  $('#team-message').css('text-align', 'center')
  setTimeout(() => {
    $('#message').html('')
  }, 3000
  )
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
