let bg = document.querySelector('.apps__wrap_one img');
window.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;  
    bg.style.transform = 'translate(-' + x * 10 + 'px, -' + y * 10 + 'px)';
});
let bg2 = document.querySelector('.apps__wrap_two img');
window.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;  
    bg2.style.transform = 'translate(-' + x * 20 + 'px, -' + y * 20 + 'px)';
});


const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    const blockID = anchor.getAttribute('href').substr(1);
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
}