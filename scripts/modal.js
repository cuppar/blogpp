var login = document.getElementById('modal-login');
var bg = document.getElementById('modal-bg')
var btnLogin = document.getElementById('btnLogin')
var cancelLogin = document.getElementById('cancel-login')
var confirmLogin = document.getElementById('confirm-login')


btnLogin.onclick=function () {
  bg.style.zIndex = '1';
  login.style.zIndex = '1';
};

bg.onclick=function () {
  this.style.zIndex = '-1';
  login.style.zIndex = '-1';
};

cancelLogin.onclick=function(){
  login.style.zIndex = '-1';
  bg.style.zIndex = '-1';
};

confirmLogin.onclick=function(){
  login.style.zIndex = '-1';
  bg.style.zIndex = '-1';
};