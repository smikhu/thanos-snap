const orange = document.getElementById('orange');
const red = document.getElementById('red');
const blue = document.getElementById('blue');
const purple = document.getElementById('purple');
const green = document.getElementById('green');
const yellow = document.getElementById('yellow');

orange.addEventListener('click', () => {
    document.body.style.backgroundColor = 'orange'
})

red.addEventListener('click', () => {
    document.body.style.backgroundColor = 'red'
})

blue.addEventListener('click', () => {
    document.body.style.backgroundColor = 'lightskyblue'
})

purple.addEventListener('click', () => {
    document.body.style.backgroundColor = 'violet'
})

green.addEventListener('click', () => {
    document.body.style.backgroundColor = 'green'
})

yellow.addEventListener('click', () => {
    document.body.style.backgroundColor = 'yellow'
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