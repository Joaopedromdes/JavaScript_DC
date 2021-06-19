var p = document.getElementsByTagName('p')
alert(p.length)
alert(p[2].innerHTML)
p[1].innerHTML = 'Manipulado via JS'

for(var i = 0; i < p.length; i++){
    p[i].innerHTML = 'Manipulado via JS - ' + i
}

