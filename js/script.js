"use strict";
const cl = (massege) => console.log(massege)

/////////////////////////
////////////////////////

const mouse = document.getElementById('mouse')
let speed = 5
const stepSpeed = 5
const maxSpeed = 100
const minSpeed = 3


document.body.addEventListener('keydown', mouseStart)
document.body.addEventListener('keyup', mouseStop)

function mouseStart(e) {
    if (speed < maxSpeed) speed += stepSpeed
    
    if (e.code === 'KeyD') {
        let left = mouse.offsetLeft
        mouse.style.left = left + speed +'px'
    }
    if (e.code === 'KeyA') {
        let left = mouse.offsetLeft
        mouse.style.left = left - speed +'px'
    }
    if (e.code === 'KeyW') {
        let top = mouse.offsetTop
        mouse.style.top = top - speed +'px'
    }
    if (e.code === 'KeyS') {
        let top = mouse.offsetTop
        mouse.style.top = top + speed +'px'
    }

}

function mouseStop (e) {
    speed = minSpeed
}