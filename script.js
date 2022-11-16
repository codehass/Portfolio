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
let obectsinfo = {
  Name: 'Project name goes here',
  Img: 'imgs/Union close.png',
  tech: ['HTML/CSS', 'Ruby on Rais', 'JavaScript'],
  description:
    'Lorem ipsum dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisiUt aliquip ex ea commodo consequat  Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi.',
};

function popupProjects(project) {
  project.addEventListener('click', () => {
    const new_div = document.createElement('div');
    new_div.innerHTML += `
        <div class ="desk-popup">
          <div class ="top-popup" >
          <img src="${obectsinfo.Img}" class ="menuClose" id ="menuClose" />
          <p class ="popup-title"> ${obectsinfo.Name} </p>
          </div>
          <ul>
              <li>${obectsinfo.tech[0]}</li>
              <li>${obectsinfo.tech[1]}</li>
              <li>${obectsinfo.tech[2]}</li>
          </ul>
          <img src="imgs/Group 110.png"  />
          <div>
            <p class ="popup-descp">${obectsinfo.description}</p>
          </div>
          <div class ="buttPopup">
          <a class ="popup-butt1" href="#" >See live</a>
          <a class ="popup-butt2" href="#" >See source</a>
          </div>
          <div class="Next-ele">
            <a class="Next-one">Previous project</a>
            <a class="Next-one">Next project</a>
          </div>


        </div>
    `;
    new_div.setAttribute('class', 'my_div closepopup');
    const projects = document.querySelector('.projects');
    projects.appendChild(new_div);
  });
}

const projects = document.querySelectorAll('.project-butt');
projects.forEach(popupProjects);

// document.querySelector('.menuClose').addEventListener('click', () => {
//   console.log('clicked');
// });

console.log(document.querySelector('#menuClose'));
