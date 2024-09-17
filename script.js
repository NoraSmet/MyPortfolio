document.addEventListener("DOMContentLoaded", function () {
  const lightModeSwitch = document.getElementById('light-mode-switch'); 
  const backgroundContainer = document.getElementById('background-container'); 
  const graphicImages = document.querySelectorAll('.graphic-image'); 
  const revealText = document.querySelector('.reveal.par');
  const overlay = document.getElementById('overlay');   

  document.addEventListener('mousemove', function (event) {    
    const x = event.clientX / window.innerWidth;
    const y = event.clientY / window.innerHeight;   
    overlay.style.background = `radial-gradient(600px at ${x * 100}% ${y * 100}%, rgba(29, 78, 216, 0.15), transparent 80%)`;
  });
 
   const h1 = document.querySelector('#section1 .header-logo h1');
   const span = h1.querySelector('span');

  lightModeSwitch.addEventListener('change', function () {    
    backgroundContainer.classList.toggle('light-mode', this.checked);
  
    graphicImages.forEach(image => {
      image.classList.toggle('hidden', !this.checked);
    });
    
    revealText.classList.toggle('hidden', !this.checked);
    
    if (this.checked) {
      type();
      span.style.color = 'rgb(40, 134, 112)'; 
      scrollToSection('section2'); 
    } else {      
      revealText.textContent = "";
      span.style.color = 'white';
    }
  });
  
  function type() {
    let text = "Shulyak";
    let i = 0;
    let speed = 150;
  
    function innerType() {
      if (i < text.length) {
        revealText.textContent += text.charAt(i);
        i++;
        setTimeout(innerType, speed);
      }
    }    
    revealText.textContent = "";      
    innerType();
  }
  
  AOS.init();

  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  const projectDetailsContainer = document.createElement("div");
  projectDetailsContainer.classList.add("project-details");
  document.body.appendChild(projectDetailsContainer);
  const openDetailsBtns = document.querySelectorAll(".open-details-btn"); 
  
  if (projectDetailsContainer) { 
 
  openDetailsBtns.forEach(btn => {
    btn.addEventListener("click", function (event) {    
    event.preventDefault();       
    const project = this.closest('.project');
    const projectTitle = project.querySelector('.item-title');
    const projectCategory = project.querySelector('.category');
    const projectMockupSrc = this.getAttribute('data-mockup-src');   
    
  if (project && projectTitle && projectCategory && projectMockupSrc) {         
      projectDetailsContainer.innerHTML = "";
      projectDetailsContainer.classList.remove("show-details");
    projectDetailsContainer.innerHTML = `
    <button class="close-details-btn">Close</button>
    <div class="details-content">
    <h3>${projectTitle.textContent}</h3>
    <p>${projectCategory.innerHTML}</p>
    <img class="project-mockup" src="${projectMockupSrc}" alt="Project Image2" width="1200px">     
    </div>
    `;     
  projectDetailsContainer.classList.add("show-details");       

  const closeDetailsBtn = document.querySelector(".close-details-btn");
        closeDetailsBtn.addEventListener("click", function () {
        projectDetailsContainer.innerHTML = "";
        projectDetailsContainer.classList.remove("show-details");              
        });
      }
    });
  });
}
projectDetailsContainer.addEventListener("click", function (event) {
    if (event.target.classList.contains("close-details-btn")) {    
      this.classList.remove("show-details");               
    }
  });
  gsap.fromTo("#container", { x: "-100%" }, { x: "0%", duration: 1, ease: "power2.out" });
  gsap.fromTo(".services", { x: "100%" }, { x: "0%", duration: 1, ease: "power2.out" });

});

