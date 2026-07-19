// ============================
// Typing Animation
// ============================

const typing = document.getElementById("typing");

const words = [
    "Full Stack Developer",
    "Web Designer",
    "UI / UX Designer",
    "JavaScript Developer",
    "PHP & MySQL Developer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect(){

    const current = words[wordIndex];

    if(!deleting){

        typing.textContent = current.substring(0,charIndex++);
    }
    else{

        typing.textContent = current.substring(0,charIndex--);
    }

    let speed = 120;

    if(!deleting && charIndex === current.length + 1){

        deleting = true;
        speed = 1500;
    }

    if(deleting && charIndex === 0){

        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        speed = 400;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();


// ============================
// Scroll Reveal Animation
// ============================

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});

document.querySelectorAll("section,.card,.project").forEach(el=>{

    el.classList.add("hidden");

    observer.observe(el);

});


// ============================
// Navbar Background
// ============================

window.addEventListener("scroll",()=>{

    const nav = document.querySelector("nav");

    if(window.scrollY>50){

        nav.style.background="rgba(0,0,0,.75)";
    }
    else{

        nav.style.background="rgba(255,255,255,.08)";
    }

});


// ============================
// Back To Top Button
// ============================

const topBtn=document.createElement("button");

topBtn.innerHTML="⬆";

topBtn.id="topBtn";

document.body.appendChild(topBtn);

topBtn.style.position="fixed";
topBtn.style.right="25px";
topBtn.style.bottom="25px";
topBtn.style.width="50px";
topBtn.style.height="50px";
topBtn.style.borderRadius="50%";
topBtn.style.border="none";
topBtn.style.cursor="pointer";
topBtn.style.fontSize="22px";
topBtn.style.display="none";
topBtn.style.background="#38bdf8";
topBtn.style.color="#000";
topBtn.style.boxShadow="0 10px 20px rgba(0,0,0,.3)";
topBtn.style.zIndex="999";

window.addEventListener("scroll",()=>{

    if(window.scrollY>400){

        topBtn.style.display="block";
    }
    else{

        topBtn.style.display="none";
    }

});

topBtn.onclick=()=>{

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

};


// ============================
// Mouse Glow Effect
// ============================

const glow=document.createElement("div");

document.body.appendChild(glow);

glow.style.position="fixed";
glow.style.width="25px";
glow.style.height="25px";
glow.style.borderRadius="50%";
glow.style.pointerEvents="none";
glow.style.background="rgba(56,189,248,.45)";
glow.style.filter="blur(12px)";
glow.style.zIndex="9999";

document.addEventListener("mousemove",(e)=>{

    glow.style.left=e.clientX-12+"px";
    glow.style.top=e.clientY-12+"px";

});