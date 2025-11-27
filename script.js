const body=document.body
const themeToggle=document.getElementById("themeToggle")
const menuToggle=document.getElementById("menuToggle")
const nav=document.getElementById("nav")
const yearEl=document.getElementById("year")
const contactForm=document.getElementById("contactForm")
const formStatus=document.getElementById("formStatus")
const stored=localStorage.getItem("theme")||"dark"
function setTheme(t){body.setAttribute("data-theme",t);body.classList.toggle("dark-mode",t==="dark");body.classList.toggle("light-mode",t==="light");localStorage.setItem("theme",t);themeToggle.textContent=t==="dark"?"Light":"Dark"}
setTheme(stored)
themeToggle.addEventListener("click",()=>{const cur=body.getAttribute("data-theme");setTheme(cur==="dark"?"light":"dark")})
menuToggle.addEventListener("click",()=>{const open=nav.classList.toggle("open");menuToggle.setAttribute("aria-expanded",String(open))})
document.querySelectorAll('a[href^="#"]').forEach(a=>{a.addEventListener("click",e=>{const id=a.getAttribute("href").slice(1);const el=document.getElementById(id);if(el){e.preventDefault();el.scrollIntoView({behavior:"smooth"});nav.classList.remove("open");menuToggle.setAttribute("aria-expanded","false")}})})
yearEl.textContent=String(new Date().getFullYear())
const fills=document.querySelectorAll("#skillBars .fill")
const io=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){const el=e.target;const p=Number(el.dataset.percent||0);requestAnimationFrame(()=>{el.style.width=p+"%"});io.unobserve(el)}})},{threshold:.4})
fills.forEach(f=>io.observe(f))
document.querySelectorAll(".project-open").forEach(btn=>{btn.addEventListener("click",()=>{const card=btn.closest(".project");const url=card?.dataset.url;if(url)window.location.href=url})})
document.querySelectorAll(".card.project").forEach(card=>{card.addEventListener("click",e=>{if(e.target.closest(".project-open"))return;const url=card.dataset.url;if(url)window.location.href=url})})
const canvas=document.getElementById("demoCanvas")
if(canvas){const ctx=canvas.getContext("2d");const g=ctx.createLinearGradient(0,0,600,0);g.addColorStop(0,"#6366f1");g.addColorStop(1,"#22c55e");ctx.fillStyle=g;ctx.fillRect(0,0,600,180);ctx.fillStyle="#0b0f14";ctx.font="24px system-ui";ctx.fillText("Hello from Canvas",20,40)}
const slider=document.getElementById("slider")
if(slider){const slides=slider.querySelector(".slides");const imgs=slides.querySelectorAll("img");let idx=0;function render(){slides.style.transform=`translateX(-${idx*100}%)`}slider.querySelector(".prev").addEventListener("click",()=>{idx=(idx-1+imgs.length)%imgs.length;render()});slider.querySelector(".next").addEventListener("click",()=>{idx=(idx+1)%imgs.length;render()});render()}
const backToTop=document.getElementById("backToTop")
if(backToTop){window.addEventListener("scroll",()=>{const show=window.scrollY>300;backToTop.classList.toggle("show",show)});backToTop.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})})}
const photoInput=document.getElementById("photoInput")
const profilePhoto=document.getElementById("profilePhoto")
const clearPhoto=document.getElementById("clearPhoto")
const avatarBtn=document.getElementById("avatarBtn")
const navAvatar=document.getElementById("navAvatar")
const storedPhoto=localStorage.getItem("profilePhoto")
if(storedPhoto&&profilePhoto)profilePhoto.src=storedPhoto
if(storedPhoto&&navAvatar){navAvatar.src=storedPhoto}else if(avatarBtn){navAvatar?.setAttribute("style","display:none");const span=document.createElement("span");span.className="avatar-fallback";span.textContent="SC";avatarBtn.appendChild(span)}
if(avatarBtn){avatarBtn.addEventListener("click",()=>{document.getElementById("about").scrollIntoView({behavior:"smooth"})})}
if(photoInput){photoInput.addEventListener("change",()=>{const file=photoInput.files?.[0];if(!file)return;const reader=new FileReader();reader.onload=()=>{const data=reader.result;localStorage.setItem("profilePhoto",String(data));if(profilePhoto)profilePhoto.src=String(data)};reader.readAsDataURL(file)})}
if(clearPhoto){clearPhoto.addEventListener("click",()=>{localStorage.removeItem("profilePhoto");if(profilePhoto)profilePhoto.src="";if(navAvatar){navAvatar.src="";navAvatar.style.display="none";const span=document.createElement("span");span.className="avatar-fallback";span.textContent="SC";avatarBtn.appendChild(span)}})}
contactForm.addEventListener("submit",e=>{e.preventDefault();const name=document.getElementById("name").value.trim();const email=document.getElementById("email").value.trim();const message=document.getElementById("message").value.trim();const valid=email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);if(!name||!email||!message||!valid){formStatus.textContent="Please fill all fields with a valid email.";formStatus.style.color="#ef4444";return}const data={name,email,message,date:new Date().toISOString()};localStorage.setItem("contactData",JSON.stringify(data));window.location.href="form-details.html"})