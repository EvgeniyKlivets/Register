
const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');/*not play*/
const iconClose = document.querySelector('.icon-close');/*not play*/



registerLink.addEventListener('click', ()=>{
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=>{
    wrapper.classList.remove('active');
}); /* not play*/



btnPopup.addEventListener('click', ()=>{
    wrapper.classList.add('active-popup');
});/*not play*/
iconClose.addEventListener('click', ()=>{
    wrapper.classList.remove('active-popup');
});