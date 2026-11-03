//SIDE MENU
const sideMenu = document.querySelectorAll('.menu-title a');
sideMenu.forEach(a => {
  a.addEventListener('click', (event)=>{
    sideMenu.forEach(menu => menu.classList.remove('menu-selected'));
    event.currentTarget.classList.add('menu-selected');
  });
});

const sections = document.querySelectorAll('.main-info section');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.scrollY >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute('id');
    }
  });

  sideMenu.forEach(a => {
    a.classList.remove('menu-selected');
    if (a.getAttribute('href') === '#' + current) {
      a.classList.add('menu-selected');
    }
  });
});


function selectedCard(cards, selectedClass){
  cards.forEach(card => {
    card.addEventListener('click', (event)=>{
      cards.forEach(item => item.classList.remove(selectedClass));
      event.currentTarget.classList.add(selectedClass);
    });
  }); 
}

//MEMBERS
const memCard = document.querySelectorAll('.sb-mem-names li');
selectedCard(memCard, 'mem-selected');

//ALBUMS
const albCard = document.querySelectorAll('.sb-disco li');
selectedCard(albCard, 'alb-selected');

//MEMBERS
/*const memCard = document.querySelectorAll('.sb-mem-names li');
memCard.forEach(li => {
  li.addEventListener('click', (event)=>{
    memCard.forEach(member => member.classList.remove('mem-selected'));
    event.currentTarget.classList.add('mem-selected');
  });
});

//ALBUMS
const albCard = document.querySelectorAll('.sb-disco li');
albCard.forEach(li => {
  li.addEventListener('click', (event)=>{
    albCard.forEach(member => member.classList.remove('alb-selected'));
    event.currentTarget.classList.add('alb-selected');
  });
});*/