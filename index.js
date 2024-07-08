// Multiple tabcontents part(About part)
var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");
    function opentab(tabname) {
        for (tablink of tablinks) {
            tablink.classList.remove("active-link");
        }
        for (tabcontent of tabcontents) {
            tabcontent.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
        }

// Responsive navbar
var sidemenu = document.getElementById("sidemenu");
function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}

// Form Submit
// const scriptURL = 'https://script.google.com/macros/s/AKfycbxob2HH2ua8bA_lwGasNJ392OmRoXr58VofiXjlmsRo29_MdS0TmQGCxA8ypYfi9CgLeQ/exec'
// const form = document.forms['submit-to-google-sheet']
// const msg = document.getElementById("msg")

// form.addEventListener('submit', e => {
//   e.preventDefault()
//   fetch(scriptURL, { method: 'POST', body: new FormData(form)})
//     .then(response => {
//         msg.innerHTML = "Message sent successfully"
//         setTimeout(function(){
//             msg.innerHTML = ""
//         },5000)
//         form.reset()
//     })
//     .catch(error => console.error('Error!', error.message))
// })
// Changing Text(Home part)
    const typed = new Typed('.multiple-text', {
strings: ['Frontend Developer', 'UI/UX Designer', 'Web Developer'],
typeSpeed: 100,
backSpeed: 100,
backDelay: 1000,
loop: true
});

// Sticky navbar part

var header = document.querySelector(".nav")
document.addEventListener('scroll',()=>{
    var scroll_position = window.scrollY;
    if (scroll_position < 300) {
        header.style.backgroundColor= 'transparent';
        header.style.color='#fff';

    } else {
        header.style.backgroundColor='#da2d28';  
        header.style.color='#000';
        header.style.zIndex='100';
    }
})
// Custom Cursor
// var cursor = document.querySelector('#cursor')
// var blur = document.querySelector('#cursor-blur')
// document.addEventListener('mousemove',(dets)=>{
//     cursor.style.left = dets.x + "px";
//     cursor.style.top = dets.y+ "px";
//     blur.style.left = dets.x  + "px";
//     blur.style.top = dets.y + "px";
// })
// document.addEventListener("mousemove", function(dets) {
//     // const x = event.pageX - 10;
//     // const y = event.pageY - 10;
//     const cursor = document.querySelector("#cursor");
//     cursor.style.left = dets.x + "px";
//     cursor.style.top = dets.y + "px";
//   });
  

gsap.from("#header nav, nav li", { 
    opacity: 0, 
    y: -100, 
    duration: 1,
    stagger:0.2
});

gsap.from(".header-text h1,.header-text h2,.header-text a", { 
    opacity: 0, 
    y: 150, 
    duration: 1,
    stagger:0.5
});
gsap.from(".about-container", { 
    opacity: 0, 
    y: 100, 
    duration: 1,
    scrollTrigger:{
        trigger: ".about-container",
        scroller:"body",
    }
 });
gsap.from("#skill", { 
    opacity: 0, 
    scale:0, 
    duration: 1,
    scrollTrigger:{
        trigger: "#skill",
        scroller:"body",
    }
});
// gsap.from(".wrapper", { 
//     opacity: 0, 
//     y: 100, 
//     duration: 1,
//     scrollTrigger:{
//         trigger: ".wrapper",
//         scroller:"body",
//     }
//  });
//  gsap.from(".services-list", { 
//     opacity: 0, 
//     y: 150, 
//     duration: 1,
//     scrollTrigger:{
//         trigger: ".services-list",
//         scroller:"body",
//         stagger:0.2
//     }
//  });
//  gsap.from(".work-list", { 
//     opacity: 0, 
//     y: 150, 
//     duration: 1,
//     scrollTrigger:{
//         trigger: ".work-list",
//         scroller:"body",
//         stagger:0.2
//     }
//  });
gsap.registerPlugin(ScrollTrigger);
gsap.set('.service i', {
    opacity: 0,
    y: 75,
    scale: 0.9,
  });
  gsap.set('.service h2', {
    opacity: 0,
    y: 50,
  });
  gsap.set('.service p', {
    opacity: 0,
    y: 40,
  });
  gsap.set('.service a', {
    opacity: 0,
    y: 30,
  });
  ScrollTrigger.batch('.service', {
    onEnter: batch => {
      batch.forEach((service, index) => gsap.to(service.children, {opacity: 1, y: 0, scale: 1, stagger: 0.5, delay: index * 0.3}))
    },
    once: true
  });

  gsap.set('.work', {
    opacity: 0,
    y: 50,
  });

  ScrollTrigger.batch('.work', {
    onEnter: batch => {
      batch.forEach((work, index) => gsap.to(work, {opacity: 1, y: 0, scale: 1, stagger: 0.5, delay: index * 0.3}))
    },
    once: true
  });

gsap.from("#contact",{
    opacity: 0, 
    y: 150, 
    duration: 1,
    stagger:0.5,
    scrollTrigger:{
        trigger: "#contact",
        scroller:"body",
    }
})


//Email JS
// function sendmail(){

//     var name = document.getElementById('name').value;
//     var email = document.getElementById('email').value;
//     var message = document.getElementById('message').value;

//     var templateParams = {
//       from_name: name,
//       from_email: email,
//       message: message
//     };

//     emailjs.send('service_eb1nutn', 'template_zpzfqmi', templateParams)
//       .then(function(response) {
//         console.log('SUCCESS!', response.status, response.text);
//         alert('Message sent successfully!');
//       }, function(error) {
//         console.log('FAILED...', error);
//         alert('Failed to send message. Please try again.');
//       });

//     // Clear form fields
//     document.getElementById('name').value = '';
//     document.getElementById('email').value = '';
//     document.getElementById('message').value = '';
// };
