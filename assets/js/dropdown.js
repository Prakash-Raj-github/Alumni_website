
let nav = document.querySelector('.navm');
const areaimg=document.querySelector(".area-img")
let dropdown = nav.querySelector('.dropdownm');
let dropdownToggle = nav.querySelector("[data-action='dropdown-toggle']");
let navToggle = nav.querySelector("[data-action='nav-toggle']");

dropdownToggle.addEventListener('click', () => {
  if (dropdown.classList.contains('show')) {
    dropdown.classList.remove('show');
  } else {
    dropdown.classList.add('show');
  }
});

navToggle.addEventListener('click', () => {
  if (nav.classList.contains('opened')) {
    nav.classList.remove('opened');
  } else {
    nav.classList.add('opened');
  }
});
function handler (entrys,observer){
    const [entry]=entrys;
    console.log(entry)
    if(entry.isIntersecting==true)
    nav.style.display='block';
   
    else
    nav.style.display='none';
    

}

let observer=new IntersectionObserver(handler,{root:null,threshold:0.8})

observer.observe(areaimg)