document.addEventListener("DOMContentLoaded", function(){
    const hamburgerBtn = document.getElementById("hamburger-btn");
    const navMenu = document.getElementById("nav-menu");
    const navLinks = document.querySelectorAll(".header__link");
    const heroBtn = document.getElementById("hero-btn");

    if(hamburgerBtn && navMenu){
        hamburgerBtn.addEventListener("click", function(){
            navMenu.classList.toggle("active");
        });
    }

    navLinks.forEach((link)=> {
        link.addEventListener("click", function(e){
            e.preventDefault();
            const targetId=this.getAttribute("href");
            const targetSection = document.querySelector(targetId);

            if(targetSection){
                targetSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });

                if(navMenu.classList.contains("active")){
                    navMenu.classList.remove("active");
                }
            }
        });
    });

    if (heroBtn){
        heroBtn.addEventListener("click", function(){
            const contactSection = document.getElementById("contact");
            if(contactSection){
                contactSection.scrollIntoView({
                    behavior:"smooth",
                });
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', ()=>{
    const form = document.getElementById('contactForm');
    const fullname = document.getElementById('fullname');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    const successMsg = document.getElementById('successMesage');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (form){
        form.addEventListener('submit', (e)=> {
            e.preventDefault();

            let isValid = true;

            if (fullname.value.trim()===''){
                showError(fullname, 'Ad və Soyad sahəsi boş ola bilməz');
                isValid=false;
            }
            else{
                showSucces(fullname);
            }

            if (email.value.trim()=== ''){
                showError (email, 'Elektron poçt sahəsi boş ola bilməz');
            }
            else if(!emailRegex.test(email.value.tirm())){
                showError(email, 'Düzgün bir elektron poçt ünvanı daxil edin');
            }
            else{
                showSuccess(email);
            }

            if(message.value.trim() === ''){
                showError(message, 'Mesaj sahəsi boş ola bilməz');
            }
            else{
                showSuccess(message);
            }

            if(isValid){
                successMsg.innerText='Mesajınız uğurla göndərildi!';
                successMsg.style.color='green';
                form.reset();

                setTimeout(()=>{
                    successMsg.innerText='';
                }, 3000);
            }
        });
    }
    function showError(input, msg){
        const formControl=input.parentElement;
        const errorSpan = formControl.querySelector('.error-message');
        errorSpan.innerText=msg;
        errorSpan.style.color = '#e74c3c';
        errorSpan.style.fontSize = '13px';
        errorSpan.style.marginTop = '4px';
        errorSpan.style.display = 'block';
        input.style.borderColor = '#e74c3c';
        input.style.outline = 'none';
    }

    function showSuccess(input){
        const formControl = input.parentElement;
        const errorSpan = formControl.querySelector('.error-message');
        errorSpan.innerText='';
        input.style.borderColor='#2ecc71';
        
    }
});