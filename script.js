let slideIndex=1;

showslides(slideIndex);
setInterval(() => plusSlides(1), 5000);

function plusSlides(n){
    showslides(slideIndex+=n);
}

function currentSlide(n){
    showslides(slideIndex=n);
}

function showslides(n){
    let i;
    let slides=document.getElementsByClassName("mySlides");
    let dots=document.getElementsByClassName("dot");
    if (n>slides.length){
        slideIndex=1;
    }
    if (n<1){
        slideIndex=slides.length;
    }
    for (i=0;i<slides.length;i++){
        slides[i].style.display="none";
    }      
    for (i=0;i<dots.length;i++){
        dots[i].className=dots[i].className.replace(" active","");
    }   
    slides[slideIndex-1].style.display="block";
    dots[slideIndex-1].className+=" active";
}

// Toggle table display on menu icon click
document.getElementById('menu-icon').addEventListener('click', function() {
    const table = document.querySelector('.table');
    if (table.style.display === 'none' || table.style.display === '') {
        table.style.display = 'block';
    } else {
        table.style.display = 'none';
    }
});