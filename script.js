const sideMenu = dcument.querySelectorAll('.menu-title a');
sideMenu.forEach(a => {
  a.addEventListener('click', (event)=>{
    sideMenu.forEach(menu => menu.classList.remove('menu-selected'));

    event.currentTarget.classList.add('menu-selected');
  });
});

const sections = document.querySelectorAll('.main-info section');

window.addEventListener('scroll', ()=>{
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if(window.scrollY >= sectionTop - sectionHeight / 3){
      current = section.getAttribute('id');
    }
  });

  sideMenu.forEach(a => {
    a.classList.remove('menu-selected');
    if(a.getAttribute('href') === `#${current}`){
      a.classList.add('menu-selected');
    }
  }); 
});


const memCard = document.querySelectorAll('.sb-mem-names li');
memCard.forEach(li => {
  li.addEventListener('click', (event)=>{
    memCard.forEach(member => member.classList.remove('mem-selected'));
    event.target.classList.add('mem-selected');
  });
});


const albCard = document.querySelectorAll('.sb-alb-names li');
albCard.forEach(li => {
  li.addEventListener('click', (event)=>{
    albCard.forEach(member => member.classList.remove('alb-selected'));
    event.target.classList.add('alb-selected');
  });
});