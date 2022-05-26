const orange = document.getElementById('orange');
const red = document.getElementById('red');
const blue = document.getElementById('blue');
const purple = document.getElementById('purple');
const green = document.getElementById('green');
const yellow = document.getElementById('yellow');

orange.addEventListener('click', () => {
    document.body.style.backgroundColor = 'orange'
    document.body.style.transition = '1s'
    document.body.style.color = 'black'

    let div = document.getElementById('text');
    div.className = 'stones'
    div.innerText = 'SOUL'
    document.body.appendChild(div)
})

red.addEventListener('click', () => {
    document.body.style.backgroundColor = 'red'
    document.body.style.transition = '1s'
    document.body.style.color = 'white'

    let div = document.getElementById('text');
    div.className = 'stones'
    div.innerText = 'REALITY'
    document.body.appendChild(div)
})

blue.addEventListener('click', () => {
    document.body.style.backgroundColor = 'lightskyblue'
    document.body.style.transition = '1s'
    document.body.style.color = 'black'

    let div = document.getElementById('text');
    div.className = 'stones'
    div.innerText = 'SPACE'
    document.body.appendChild(div)
})

purple.addEventListener('click', () => {
    document.body.style.backgroundColor = 'violet'
    document.body.style.transition = '1s'
    document.body.style.color = 'black'

    let div = document.getElementById('text');
    div.className = 'stones'
    div.innerText = 'POWER'
    document.body.appendChild(div)
})

green.addEventListener('click', () => {
    document.body.style.backgroundColor = 'green'
    document.body.style.transition = '1s'
    document.body.style.color = 'white'

    let div = document.getElementById('text');
    div.className = 'stones'
    div.innerText = 'TIME'
    document.body.appendChild(div)
})

yellow.addEventListener('click', () => {
    document.body.style.backgroundColor = 'yellow'
    document.body.style.transition = '1s'
    document.body.style.color = 'black'

    let div = document.getElementById('text');
    div.className = 'stones'
    div.innerText = 'MIND'
    document.body.appendChild(div)
})


function showCoords(event) {
    var x = event.clientX;
    var y = event.clientY;
    var coords = "X coords: " + x + ", Y coords: " + y;
    document.getElementById("demo").innerHTML = coords;
}

$(document).ready(function(e) {
    $('img[usemap]').rwdImageMaps();
});