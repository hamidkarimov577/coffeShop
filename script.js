navbar = document.querySelector('.main_item_card1').querySelectorAll('.cards')
// console.log(navbar);

navbar.forEach(element => {
  element.addEventListener('click', function() {
    navbar.forEach(nav=>nav.classList.remove('active1'))

    this.classList.add('active1')
  })
});
navbar2 = document.querySelector('.main_item_card2').querySelectorAll('.cards')
console.log(navbar2);

navbar2.forEach(element => {
  element.addEventListener('click', function() {
    navbar2.forEach(nav=>nav.classList.remove('active2'))

    this.classList.add('active2')
  })
});
navbar3 = document.querySelector('.main_item_card3').querySelectorAll('.cards')
console.log(navbar3);

navbar3.forEach(element => {
  element.addEventListener('click', function() {
    navbar3.forEach(nav=>nav.classList.remove('active3'))

    this.classList.add('active3')
  })
});
navbar4 = document.querySelector('.main_item_card4').querySelectorAll('.cards')
// console.log(navbar3);

navbar4.forEach(element => {
  element.addEventListener('click', function() {
    navbar4.forEach(nav=>nav.classList.remove('active4'))

    this.classList.add('active4')
  })
});
navbar5 = document.querySelector('.main_item_card5').querySelectorAll('.cards')
console.log(navbar5);

navbar5.forEach(element => {
  element.addEventListener('click', function() {
    navbar5.forEach(nav=>nav.classList.remove('active5'))

    this.classList.add('active5')
  })
});



const acc_btns =document.querySelectorAll('.main-item-cards-title');
 acc_btns.forEach((btn) => {
  btn.addEventListener('click', () =>{
    const panel = btn.nextElementSibling;
    panel.classList.toggle('active')
    btn.classList.toggle('active')
  })
})