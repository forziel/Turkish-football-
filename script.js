const logos = document.querySelectorAll('.logos img');
let i=1;


setInterval(function () {
   const logo = document.querySelector('.logos .change');
   logo.classList.remove('change');
   i++;
   
   if (i > logos.length) {
      i = 1;
      logos[0].classList.add('change')
      
   } else {
      logo.nextElementSibling.classList.add('change');
      
   }

}, 2500);

