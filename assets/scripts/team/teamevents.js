'use strict'
const getFormFields = require('../../../lib/get-form-fields')
const ui = require('./teamui')
const api = require('./teamapi')

const onCreateTeam = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createTeam(data)
    .then(ui.createTeamSuccess)
    .catch(ui.createTeamFailure)
}

const onUpdateTeam = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.updateTeam(data)
    .then(ui.updateTeamSuccess)
    .catch(ui.updateTeamFailure)
}

const onDeleteTeam = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.deleteTeam(data)
    .then(ui.deleteTeamSuccess)
    .catch(ui.deleteTeamFailure)
}

const onGetTeams = (event) => {
  event.preventDefault()
  // const data = getFormFields(event.target)
  api.getTeams()
    .then(ui.getTeamsSuccess)
    .catch(ui.getTeamsFailure)
}

const addHandlers = () => {
  $('#create-team').on('submit', onCreateTeam)
  $('#update-team').on('submit', onUpdateTeam)
  $('body').on('submit', '.delete-team', onDeleteTeam)
  $('#get-teams').on('click', onGetTeams)
  $('#hide-teams').on('click', () => {
    $('.Team').toggle()
    $('.hide-teams').addClass('hidden')
  })
  $('.modal').on('hidden.bs.modal', function (e) {
    $('input[type="email"], input[type="password"], input[type="text"], input[type="date"], input[type="number"], textarea').val('')
  })
}

module.exports = {
  addHandlers
}
