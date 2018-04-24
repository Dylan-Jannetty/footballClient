'use strict'
const config = require('../config')
const store = require('../store')

const createTeam = function (data) {
  return $.ajax({
    url: config.apiUrl + `/teams`,
    method: 'POST',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const updateTeam = (data) => {
  console.log(data)
  return $.ajax({
    url: config.apiUrl + `/teams/` + data.id,
    method: 'PATCH',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const deleteTeam = function (data) {
  return $.ajax({
    url: config.apiUrl + `/teams/` + data.id,
    method: 'DELETE',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const getTeams = function (data) {
  return $.ajax({
    url: config.apiUrl + '/teams',
    method: 'GET',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

module.exports = {
  createTeam,
  updateTeam,
  deleteTeam,
  getTeams
}
