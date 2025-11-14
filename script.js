const body=document.body
const themeToggle=document.getElementById("themeToggle")
const menuToggle=document.getElementById("menuToggle")
const nav=document.getElementById("nav")
const yearEl=document.getElementById("year")
const contactForm=document.getElementById("contactForm")
const formStatus=document.getElementById("formStatus")
const stored=localStorage.getItem("theme")||"dark"
body.setAttribute("data-theme",stored)
function setTheme(t){body.setAttribute("data-theme",t);localStorage.setItem("theme",t);themeToggle.textContent=t==="dark"?"Light":"Dark"}
setTheme(stored)
themeToggle.addEventListener("click",()=>{const cur=body.getAttribute("data-theme");setTheme(cur==="dark"?"light":"dark")})
menuToggle.addEventListener("click",()=>{const open=nav.classList.toggle("open");menuToggle.setAttribute("aria-expanded",String(open))})
document.querySelectorAll('a[href^="#"]').forEach(a=>{a.addEventListener("click",e=>{const id=a.getAttribute("href").slice(1);const el=document.getElementById(id);if(el){e.preventDefault();el.scrollIntoView({behavior:"smooth"});nav.classList.remove("open");menuToggle.setAttribute("aria-expanded","false")}})})
yearEl.textContent=String(new Date().getFullYear())
contactForm.addEventListener("submit",e=>{e.preventDefault();const name=document.getElementById("name").value.trim();const email=document.getElementById("email").value.trim();const message=document.getElementById("message").value.trim();const valid=email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);if(!name||!email||!message||!valid){formStatus.textContent="Please fill all fields with a valid email.";formStatus.style.color="#ef4444";return}formStatus.textContent="Thanks, your message has been recorded.";formStatus.style.color="";contactForm.reset()})