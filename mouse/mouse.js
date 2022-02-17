"use strict";
const cl = (massege) => console.log(massege)

/////////////////////////
////////////////////////

const mouse = document.getElementById('mouse')
const mouseImg = document.querySelectorAll('.mouse__img') 
const mouseEnter = document.querySelector('.mouse__enter')
let speed = 5
const stepSpeed = 5
const maxSpeed = 50
const minSpeed = 3
const speedScroll = speed


document.body.addEventListener('keydown', mouseStart)
document.body.addEventListener('keyup', mouseStop)

function mouseStart(e) {
    wavTail()
    if (speed < maxSpeed) speed += stepSpeed
    if (e.code === 'KeyS') goDown()
    if (e.code === 'KeyW') goUp()
    if (e.code === 'KeyA') goLeft()
    if (e.code === 'KeyD') goRight()
    if (e.code === 'Enter') mouseClick()

}

function mouseStop (e) {
    speed = minSpeed
}
/////////////////////////////
function wavTail() {
    Array.from(mouseImg).forEach(img => {
        img.classList.toggle('mouse__img_tail-change')
    })
}



function goUp() {
    let top = mouse.offsetTop
    
    mouseRotate(180)

    mouse.style.top = top - speed +'px'

    if (top  < 11) {
        mouse.style.top = 10 +'px'
    }
    if (top < window.pageYOffset ) {
           window.scrollBy(0, -speedScroll)
    }
}

function goLeft() {
    let left = mouse.offsetLeft

    mouseRotate(90)
    mouse.style.left = left - speed +'px'

    if (left < 11) {
        mouse.style.left = 0 +'px'
    }
}

function goDown() {
    let top = mouse.offsetTop

    mouseRotate(0)
    mouse.style.top = top + speed +'px'

    if (top + mouse.offsetHeight > document.documentElement.clientHeight + 
        window.pageYOffset - 20)  {
         mouse.style.top = document.documentElement.scrollTop + 
                        document.documentElement.clientHeight - 
                        mouse.offsetHeight - 10 +'px'
        window.scrollBy(0, speedScroll)
    }
}

function goRight() {
    let left = mouse.offsetLeft

    mouseRotate(-90)
    
    mouse.style.left = left + speed +'px'
    if (left + mouse.offsetWidth > document.documentElement.clientWidth  - 11) {
        mouse.style.left = document.documentElement.clientWidth - mouse.offsetWidth - 10 +'px'
    }
}

function mouseRotate(deg) {
    if (mouse.style.transform == `rotate(${deg}deg)`) return
    mouse.style.transform = `rotate(${deg}deg)` 
}

function mouseClick() {
    
    let x = mouseEnter.getBoundingClientRect().x 
    let y = mouseEnter.getBoundingClientRect().y
    mouse.hidden = true
    let element = document.elementFromPoint(x, y)
    mouse.hidden = false
    let event = new MouseEvent("click")
    element.dispatchEvent(event)
    if (element.matches('input')) {
        element.focus()
    } // else element.blur()
    ////////// не работает element.blur()
    
}