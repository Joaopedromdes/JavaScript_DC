var elementos = document.querySelectorAll('.playes-options div > img')
for(var i = 0; i < elementos.length ; i ++){
    elementos[i].addEventListener('click',function(t){
        t.target.style.opacity = 1;
    });
}