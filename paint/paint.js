"use strict";

const canvas = document.getElementById('paint__canvas')
const ctx = canvas.getContext('2d')
const positionCanvas = canvas.getBoundingClientRect()
const inputColor = document.querySelector('.paint__color')
const inputSize = document.querySelector('.paint__size')
let color = 'black'
let size = '4'
ctx.lineCap = "round"

inputColor.addEventListener('input', (e) => {
    color = e.target.value
})

inputSize.addEventListener('input', (e) => {
    size = e.target.value
})

 canvas.addEventListener('mousedown', () => {
     canvas.addEventListener('mousemove', draw)
     canvas.addEventListener('mouseup', () => {
         canvas.removeEventListener('mousemove', draw)
     })
 })

 function draw(e) {
    let x = e.offsetX;
    let y = e.offsetY;
    
    ctx.fillRect(x/4.76 + x*0.0025, y/4.76+ y*0.0025, size, size)
    ctx.fillStyle = color
    ctx.fill()
}