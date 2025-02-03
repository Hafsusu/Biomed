
function func(){
    var email = document.getElementById("email").value;
    var pass =document.getElementById("password").value;
    if (email =='hilwa54@gmail.com'&& pass =='72545545'){
        alert("seccess full |")
        window.location.assign =("training.html");
    
    }
    else{
        alert("wrong entry invalid")
    }
    };
   














// document.addEventListener("DOMContentLoaded", () => {
//     navigateTo('home'); 
//     const navLinks = document.querySelectorAll('#home');
//     navLinks.forEach(link => {
//         link.addEventListener('click', (event) => {
//             event.preventDefault(); 
//             const targetSection = link.getAttribute('#home').substring(1);
//             navigateTo(targetSection);
//         });
//     });
// });
// function navigateTo(section) {
//     const sections = document.querySelectorAll('about > section');
//     sections.forEach((sec) => {
//         sec.style.display = 'none'; 
//     });
//     const activeSection = document.getElementById(section);
//     if (activeSection) {
//         activeSection.style.display = 'block'; 
//     }
// }

    

















// $(document).ready(function(){
//     $('.fa-bars').click(function(){
//         $(this).toggleClass('fa-times');
//         $('.nav').toggleClass('navv');
//     });
//     $(window).on('load scroll',function(){
//         $('.fa-bars').removeClass('fa-times');
//         $('.nav').removeClass('navv');

//             if($(window).scrollTop() > 10){
//                 $('header').addClass('header-active');
//             }
//             else{
//                 $('header').removeClass('header-active'); 
//             }
//     });
// })
//     $('.device').magnificPopup({
//         delegate:'a',
//         type:'image',
//         gallery:{
//             enabled:true
//     } })







