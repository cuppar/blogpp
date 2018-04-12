var login = document.getElementById('modal-login');
var bg = document.getElementById('modal-bg')
var btnLogin = document.getElementById('btnLogin')
var cancelLogin = document.getElementById('cancel-login')
var confirmLogin = document.getElementById('confirm-login')


btnLogin.onclick = function () {
  bg.style.zIndex = '9998';
  login.style.zIndex = '9999';
};

bg.onclick = function () {
  this.style.zIndex = '-9998';
  login.style.zIndex = '-9999';
};

cancelLogin.onclick = function () {
  login.style.zIndex = '-9999';
  bg.style.zIndex = '-9998';
};

confirmLogin.onclick = function () {
  login.style.zIndex = '-9999';
  bg.style.zIndex = '-9998';
};