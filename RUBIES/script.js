
/*---------navbar--------*/
let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

document.querySelector('#menu-btn').onclick = () =>{
  navbar.classList.toggle('active');
  btnLogin.classList.remove('active');
}



/*---------login-btn---------*/
let login = document.querySelector('#login');
let btnLogin = document.querySelector('.btn-login');

login.onclick = () =>{
login.classList.toggle('fa-times');
btnLogin.classList.toggle('active');
}

document.querySelector('#login').onclick = () =>{
  btnLogin.classList.toggle('active');
  navbar.classList.remove('active');
}

 

/*-------navbar-active------*/

$(document).on('click', '.nav-link', function(){
    $(this).addClass('active').siblings().removeClass('active')
})


/*-------Header------*/

window.onscroll = () =>{

  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  login.classList.remove('fa-times');
  btnLogin.classList.remove('active');

  if(window.scrollY > 0){
    document.querySelector('.header').classList.add('active');
  }else{
    document.querySelector('.header').classList.remove('active');
  };

};

 