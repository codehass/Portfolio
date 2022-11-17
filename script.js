document.querySelector('.menu-icon').addEventListener('click', () => {
  document.querySelector('.nav-desk').classList.toggle('active');
  document.querySelector('.nav-mobil-img').classList.toggle('active');
  document.querySelector('.nav-mobil-img-2').classList.toggle('active');
  document.querySelector('.body').classList.toggle('active');
  document.querySelector('.menu').classList.toggle('hide');
  document.querySelector('.close').classList.toggle('show');
});

function myFunction(element) {
  element.addEventListener('click', () => {
    document.querySelector('.nav-desk').classList.remove('active');
    document.querySelector('.nav-mobil-img').classList.remove('active');
    document.querySelector('.nav-mobil-img-2').classList.remove('active');
    document.querySelector('.body').classList.remove('active');
    document.querySelector('.menu').classList.remove('hide');
    document.querySelector('.close').classList.remove('show');
  });
}

const menuSections = document.querySelectorAll('.menu-sel');
menuSections.forEach(myFunction);

// **************Popup*******************
let projectsInfo = {
  name: 'Project name goes here',
  img: 'imgs/Union close.png',
  tech: ['HTML/CSS', 'Ruby on Rais', 'JavaScript'],
  description:
    'Lorem ipsum dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisiUt aliquip ex ea commodo consequat  Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi.',
  liveLink: 'https://codehass.github.io/Portfolio/',
  sourceLink: 'https://github.com/codehass/Portfolio/tree/mobil-menu',
};

function popupProjects(project) {
  project.addEventListener('click', () => {
    const new_div = document.createElement('div');
    new_div.innerHTML += `
        <div class ="desk-popup">
          <div class ="top-popup" >
          <img src="${projectsInfo.img}" class ="menuClose" id ="menuClose" />
          <p class ="popup-title"> ${projectsInfo.name} </p>
          </div>
          <ul>
              <li>${projectsInfo.tech[0]}</li>
              <li>${projectsInfo.tech[1]}</li>
              <li>${projectsInfo.tech[2]}</li>
          </ul>
          <img class ="desimg"  src="imgs/Group 110.png"  />
          <div>
            <p class ="popup-descp">${projectsInfo.description}</p>
          </div>
          <div class ="buttPopup">
              <div class ="buttPopupflex">
                <a class ="popup-butt1" href="${projectsInfo.liveLink}" >See live</a>
                <img  class ="popup-butt1img" src="imgs/Union (1).svg" />
              </div>
              <div class ="buttPopupflex">
                <a class ="popup-butt2" href="${projectsInfo.sourceLink}" >See source</a>
                <i class="fa-brands fa-github"></i>
              </div>
          </div>

          <div class="Next-ele">
            <div>
              <img src="imgs/Union (4).png" />
              <a class="prev-one">Previous project</a>
            </div> 
            <div>
              <a class="next-one">Next project </a>
              <img src="imgs/Union (3).png" />
            </div>
          </div>


        </div>
    `;
    new_div.setAttribute('class', 'my_div closepopup');
    const projects = document.querySelector('.projects');
    projects.appendChild(new_div);
    document.querySelector('.menuClose').addEventListener('click', () => {
      document.querySelector('.my_div').remove();
      console.log('clicked');
    });
  });
}

const projects = document.querySelectorAll('.project-butt');
projects.forEach(popupProjects);
