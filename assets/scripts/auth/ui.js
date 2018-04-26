'use strict'
const store = require('../store')

const signUpSuccess = function () {
  $('#message').html(`<div class="alert alert-success" role="alert">You have succesfully signed up, now sign in!</div>`)
  $('#message').css('background-color', 'green')
  $('#message').css('text-align', 'center')
  setTimeout(() => {
    $('#message').html('')
  }, 3000
  )
  $('.sign-up').addClass('hidden')
  $('.sign-up-modal').addClass('hidden')
  $('.modal').modal('hide')
  $('form').trigger('reset')
}

const signUpFailure = function () {
  $('#message').html(`<div class="alert alert-danger" role="alert">Failed to sign up</div>`)
  $('#message').css('background-color', 'red')
  $('#message').css('text-align', 'center')
  setTimeout(() => {
    $('#message').html('')
  }, 3000
  )
  $('form').trigger('reset')
}

const signInSuccess = function (data) {
  $('#message').html(`<div class="alert alert-success" role="alert">You have succesfully signed in</div>`)
  $('#message').css('background-color', 'green')
  $('#message').css('text-align', 'center')
  setTimeout(() => {
    $('#message').html('')
  }, 3000
  )
  $('changeDropdown').removeClass('hidden')
  $('.sign-in').addClass('hidden')
  $('.sign-up').addClass('hidden')
  $('.modal').modal('hide')
  $('.sign-up-modal').addClass('hidden')
  $('.sign-in-modal').addClass('hidden')
  $('.change-password').removeClass('hidden')
  $('.sign-out').removeClass('hidden')
  $('.create-team').removeClass('hidden')
  $('.update-team').removeClass('hidden')
  $('.delete-team').removeClass('hidden')
  $('.get-teams').removeClass('hidden')
  $('.dropdown').removeClass('hidden')
  $('.favTeams').removeClass('hidden')
  $('.glyphicon').removeClass('hidden')
  store.user = data.user
  $('form').trigger('reset')
}

const signInFailure = function () {
  $('#message').html(`<div class="alert alert-danger" role="alert">There was an issue signing in</div>`)
  $('#message').css('background-color', 'red')
  $('#message').css('text-align', 'center')
  setTimeout(() => {
    $('#message').html('')
  }, 3000
  )
  $('form').trigger('reset')
}

const changePasswordSuccess = function () {
  $('#message').html(`<div class="alert alert-success" role="alert">Password succesfully changed</div>`)
  $('#message').css('background-color', 'green')
  $('#message').css('text-align', 'center')
  setTimeout(() => {
    $('#message').html('')
  }, 3000
  )
  $('form').trigger('reset')
}

const changePasswordFailure = function () {
  $('#message').html(`<div class="alert alert-danger" role="alert">There was an issue changing your password</div>`)
  $('#message').css('background-color', 'red')
  $('#message').css('text-align', 'center')
  setTimeout(() => {
    $('#message').html('')
  }, 3000
  )
  $('form').trigger('reset')
}

const signOutSuccess = function () {
  $('#message').html(`<div class="alert alert-success" role="alert">Successfully signed out</div>`)
  $('#message').css('background-color', 'green')
  $('#message').css('text-align', 'center')
  setTimeout(() => {
    $('#message').html('')
  }, 3000
  )
  $('.change-password').addClass('hidden')
  $('.create-team').addClass('hidden')
  $('.update-team').addClass('hidden')
  $('.delete-team').addClass('hidden')
  $('.get-teams').addClass('hidden')
  $('.team-message').addClass('hidden')
  $('.sign-out').addClass('hidden')
  $('.dropdown').addClass('hidden')
  $('.favTeams').addClass('hidden')
  $('.glyphicon').addClass('hidden')
  $('#hide-teams').hide()
  $('#team-message').addClass('hidden')
  $('.sign-up').removeClass('hidden')
  $('.sign-in').removeClass('hidden')
  $('.sign-up-modal').removeClass('hidden')
  $('.sign-in-modal').removeClass('hidden')
}
const signOutFailure = function () {
  $('#message').html(`<div class="alert alert-danger" role="alert">There was an issue signing out</div>`)
  $('#message').css('background-color', 'red')
  $('#message').css('text-align', 'center')
  setTimeout(() => {
    $('#message').html('')
  }, 3000
  )
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
