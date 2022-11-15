document.querySelector('.menu-icon').addEventListener('click', () => {
  document.querySelector('.nav-desk').classList.toggle('active');
  document.querySelector('.nav-mobil-img').classList.toggle('active');
  document.querySelector('.nav-mobil-img-2').classList.toggle('active');
  document.querySelector('.body').classList.toggle('active');
  document.querySelector('.menu').classList.toggle('hide');
  document.querySelector('.close').classList.toggle('show');
});

const menuSections = document.querySelectorAll('.menu-sel');
for (let i = 0; i < menuSections.length; i++) {
  menuSections[i].addEventListener('click', function () {
    document.querySelector('.nav-desk').classList.remove('active');
    document.querySelector('.nav-mobil-img').classList.remove('active');
    document.querySelector('.nav-mobil-img-2').classList.remove('active');
    document.querySelector('.body').classList.remove('active');
    document.querySelector('.menu').classList.remove('hide');
    document.querySelector('.close').classList.remove('show');
  });
}
