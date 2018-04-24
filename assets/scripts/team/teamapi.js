'use strict'
const config = require('../config')
const store = require('../store')

const createTeam = function (data) {
  console.log(data)
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

module.exports = {
  createTeam
}
