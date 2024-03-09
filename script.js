var crsr=document.querySelector("#cursor")
var blur=document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+"px"
    crsr.style.top = dets.y+"px"
    blur.style.left = dets.x-130+"px"
    blur.style.top = dets.y-130+"px"
})



gsap.to("nav",{
    backgroundColor :"#000",
    height:"120px",
    duration: 0.4,
    scrollTrigger:{
    trigger: "nav",
    scroller: "body",
    marker:true,
    start:"top 10px",
    end:"top -40px",
    scrub:2
    }
})

// registration datasheet

const scriptURL = 'https://script.google.com/macros/s/AKfycbx5eX_8KjIeetIW0QYtUCopYF0D_4CxhgbgOc2fYjAg7NXVaAgrHWjf0E9qM-Xg-_oxMw/exec'
  
const form = document.forms['submit-to-google-sheet']

const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {

        msg.innerHTML = "Message sent successfully..!!"
        setTimeout(function(){
            msg.innerHTML = ""
        },5000)
        form.reset()

      })
      .catch(error => console.error('Error!', error.message))
  })
// toggling of bars and X icon and there function
  const toggleBtn = document.getElementById('toggle');
  const dropdownMenu = document.querySelector('.dropdown-menu');
  const toggleIcon = document.getElementById('toggle-icon');
  
  function toggleMenu() {
    if (dropdownMenu.style.display === 'none') {
      dropdownMenu.style.display = 'block';
      toggleIcon.classList.replace('fa-bars', 'fa-xmark'); // Swap class names
    } else {
      dropdownMenu.style.display = 'none';
      toggleIcon.classList.replace('fa-xmark', 'fa-bars'); // Swap class names
    }
  }
  
  toggleBtn.addEventListener('click', toggleMenu);
  
  // Error handling (optional):
  if (!toggleBtn || !dropdownMenu || !toggleIcon) {
    console.error('Missing required elements: toggle button, dropdown menu, or icon');
  }
  
//dropdown menu button functionality
function toggleMenu(event) {
  event.preventDefault(); // Prevent default link behavior

  if (dropdownMenu.style.display === 'none') {
    dropdownMenu.style.display = 'block';
    toggleIcon.classList.replace('fa-bars', 'fa-xmark');
  } else {
    dropdownMenu.style.display = 'none';
    toggleIcon.classList.replace('fa-xmark', 'fa-bars');
  }
}

toggleBtn.addEventListener('click', toggleMenu);



  