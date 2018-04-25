'use strict'
const store = require('../store')

const signUpSuccess = function () {
  $('#message').text('Successfully signed up')
  $('#message').css('background-color', 'green')
  $('#message').css('text-align', 'center')
  $('.sign-up').addClass('hidden')
  $('.sign-up-modal').addClass('hidden')
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
  $('.sign-in').addClass('hidden')
  $('.sign-up').addClass('hidden')
  $('.sign-up-modal').addClass('hidden')
  $('.sign-in-modal').addClass('hidden')
  $('.change-password').removeClass('hidden')
  $('.sign-out').removeClass('hidden')
  $('.create-team').removeClass('hidden')
  $('.update-team').removeClass('hidden')
  $('.delete-team').removeClass('hidden')
  $('.get-teams').removeClass('hidden')
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
  $('.change-password').addClass('hidden')
  $('.create-team').addClass('hidden')
  $('.update-team').addClass('hidden')
  $('.delete-team').addClass('hidden')
  $('.get-teams').addClass('hidden')
  $('.team-message').addClass('hidden')
  $('.sign-out').addClass('hidden')
  $('#hide-teams').hide()
  $('#team-message').addClass('hidden')
  $('.sign-up').removeClass('hidden')
  $('.sign-in').removeClass('hidden')
  $('.sign-up-modal').removeClass('hidden')
  $('.sign-in-modal').removeClass('hidden')
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
