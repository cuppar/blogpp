'use strict'
var login = document.getElementById('modal-login')
var signup = document.getElementById('modal-signup')
var bg = document.getElementById('modal-bg')
var btnLogin = document.getElementById('btnLogin')
var btnSignup = document.getElementById('btnSignup')
var cancelLogin = document.getElementById('cancel-login')
var confirmLogin = document.getElementById('confirm-login')
var cancelSignup = document.getElementById('cancel-signup')
var confirmSignup = document.getElementById('confirm-signup')



btnLogin.onclick = function () {
  bg.style.zIndex = '9998'
  login.style.zIndex = '9999'
}

bg.onclick = function () {
  this.style.zIndex = '-9998'
  login.style.zIndex = '-9999'
  signup.style.zIndex = '-9999'
}

cancelLogin.onclick = function () {
  login.style.zIndex = '-9999'
  bg.style.zIndex = '-9998'
}

confirmLogin.onclick = function () {
  login.style.zIndex = '-9999'
  bg.style.zIndex = '-9998'
}

btnSignup.onclick = function () {
  bg.style.zIndex = '9998'
  signup.style.zIndex = '9999'
}

cancelSignup.onclick = function () {
  signup.style.zIndex = '-9999'
  bg.style.zIndex = '-9998'
}

confirmSignup.onclick = function () {
  signup.style.zIndex = '-9999'
  bg.style.zIndex = '-9998'
}