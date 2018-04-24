'use strict'
const store = require('../store')

const signUpSuccess = function () {
  $('#message').text('Successfully signed up')
  $('#message').css('background-color', 'green')
  $('#message').css('text-align', 'center')
  $('#sign-up').addClass('hidden')
  $('form').trigger('reset')
}

const signUpFailure = function () {
  $('#message').text('Failure signing up')
  $('#message').css('background-color', 'red')
  $('#message').css('text-align', 'center')
  $('form').trigger('reset')
}

const signInSuccess = function (data) {
  $('#message').text('Sign In Success')
  $('#message').css('background-color', 'green')
  $('#message').css('text-align', 'center')
  store.user = data.user
  $('form').trigger('reset')
}

const signInFailure = function () {
  $('#message').text('Failure signing in')
  $('#message').css('background-color', 'red')
  $('#message').css('text-align', 'center')
  $('form').trigger('reset')
}

const changePasswordSuccess = function () {
  $('#message').text('Successfully changed password')
  $('#message').css('background-color', 'green')
  $('#message').css('text-align', 'center')
  $('form').trigger('reset')
}

const changePasswordFailure = function () {
  $('#message').text('Change password failure')
  $('#message').css('background-color', 'red')
  $('#message').css('text-align', 'center')
  $('form').trigger('reset')
}

const signOutSuccess = function () {
  $('#message').text('Signed Out Success!')
  $('#message').css('background-color', 'green')
  $('#message').css('text-align', 'center')
}
const signOutFailure = function () {
  $('#message').text('Sign Out Failure')
  $('#message').css('background-color', 'red')
  $('#message').css('text-align', 'center')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
