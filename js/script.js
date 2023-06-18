
const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnpopup = document.querySelector('.btnLogin-popup');
const iconclose = document.querySelector('.icon-close');



registerLink.addEventListener('click', ()=>{
    wrapper.classList.add('active');/*з логіна на регістр переключається*/ 
});

loginLink.addEventListener('click', ()=>{
    wrapper.classList.remove('active');/*з регістра на логін */
}); 



btnpopup.addEventListener('click', ()=>{
    wrapper.classList.add('active-popup');
});/*натискається на логін і відкривається реєстрація not play*/
iconclose.addEventListener('click', ()=>{
    wrapper.classList.remove('active-popup');
});/*закривається регістрація*/