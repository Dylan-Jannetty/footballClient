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
  console.log(data)
}

const addHandlers = () => {
  $('#create-team').on('submit', onCreateTeam)
}

module.exports = {
  addHandlers
}
