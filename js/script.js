"use strict";
const cl = (massege) => console.log(massege)
const cd = (massege) => console.dir(massege)

/////////////////////////
// task: Persistent Bugger

// solve task: Persistent Bugger
const cont = document.querySelectorAll('.cont') 
const test = document.querySelector('.test')


for (let test of cont) {
    test.addEventListener('pointerdown', pointerdown)
}

function pointerdown(e) {
    if (e.target.closest('.test')) {
        e.target.addEventListener('pointermove', pointermove)        
    }   
}

function pointermove(e) {
    const eRect = e.target.closest('.cont').getBoundingClientRect()
    e.target.style.left =  e.clientX - eRect.x -e.target.offsetWidth/2 +'px'
    e.target.style.top =  e.clientY - eRect.y -e.target.offsetHeight/2 +'px'
    e.target.addEventListener('pointerup', deletePointermove)
    e.target.addEventListener('pointerleave', deletePointermove)
}

function deletePointermove(e) {
    e.target.removeEventListener('pointermove', pointermove)
}