"use strict";
const cl = (massege) => console.log(massege)

/////////////////////////
////////////////////////

const mouse = document.getElementById('mouse')
let speed = 5
const stepSpeed = 5
const maxSpeed = 100
const minSpeed = 3
const speedScroll = speed


document.body.addEventListener('keydown', mouseStart)
document.body.addEventListener('keyup', mouseStop)

function mouseStart(e) {
    if (speed < maxSpeed) speed += stepSpeed
    
    if (e.code === 'KeyD') {
        let left = mouse.offsetLeft
        mouse.style.left = left + speed +'px'
        if (left + mouse.offsetWidth > document.documentElement.clientWidth  - 11) {
            mouse.style.left = document.documentElement.clientWidth - mouse.offsetWidth - 10 +'px'
        }
    }
    if (e.code === 'KeyA') {
        let left = mouse.offsetLeft
        mouse.style.left = left - speed +'px'
        if (left < 11) {
            mouse.style.left = 10 +'px'
        }
    }
    if (e.code === 'KeyW') {
        let top = mouse.offsetTop
        mouse.style.top = top - speed +'px'
        if (top < 11) {
            mouse.style.top = 10 +'px'
        }
    }
    if (e.code === 'KeyS') {
        let top = mouse.offsetTop
        mouse.style.top = top + speed +'px'
        if (top + mouse.offsetHeight > document.documentElement.clientHeight  - 11) {
            mouse.style.top = document.documentElement.scrollTop + 
                                document.documentElement.clientHeight - 
                                mouse.offsetHeight - 10 +'px'
            window.scrollTo(0, window.pageYOffset + speedScroll)
        }
    }

    

}

function mouseStop (e) {
    speed = minSpeed
}