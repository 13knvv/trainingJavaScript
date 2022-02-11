"use strict";
const cl = (massege) => console.log(massege)
const cd = (massege) => console.dir(massege)

/////////////////////////
// task: 

// solve task: 
const cont = document.querySelector('.cont') 
const tests = document.querySelectorAll('.test')


for (let test of tests) {
    test.addEventListener('pointerdown', pointerdown)
    test.ondragstart = () => false
}

function pointerdown(e) {
        e.target.addEventListener('pointermove', pointermove)
        e.target.setPointerCapture(e.pointerId) 
}

function pointermove(e) {
    const contRect = cont.getBoundingClientRect()
 
    e.target.style.left =  e.clientX - contRect.x - e.target.offsetWidth/2 +'px'
    e.target.style.top =  e.clientY - contRect.y - e.target.offsetHeight/2 +'px'
    
    if (e.target.style.left < 0+'px') {
        e.target.style.left = 0 +'px'
    }

    if (contRect.left + e.target.offsetLeft + e.target.offsetWidth  > contRect.right -3) {
        e.target.style.left = contRect.right - contRect.left - e.target.offsetWidth - 3 +'px'
    }

    if (e.target.style.top < 0+'px') {
        e.target.style.top = 0 +'px'
    }

    if (contRect.top + e.target.offsetTop + e.target.offsetHeight  > contRect.bottom -3) {
        e.target.style.top = contRect.bottom - contRect.top - e.target.offsetHeight - 3 +'px'
    }

    e.target.addEventListener('pointerup', deletePointermove)
 }   

function deletePointermove(e) {
    e.target.removeEventListener('pointermove', pointermove)
}