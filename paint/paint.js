"use strict";

const canvas = document.getElementById('paint__canvas')
const ctx = canvas.getContext('2d')
const inputColor = document.querySelector('.paint__color')
const inputSize = document.querySelector('.paint__size')


inputColor.addEventListener('input', (e) => {
    ctx.strokeStyle  = e.target.value
})

inputSize.addEventListener('input', (e) => {
    ctx.lineWidth = e.target.value
})

 canvas.addEventListener('mousedown', () => {
     canvas.addEventListener('mousemove', draw)
     canvas.addEventListener('mouseup', () => {
         canvas.removeEventListener('mousemove', draw)
     })
 })

 function draw(e) {
    let x = e.offsetX/4.76 + e.offsetX*0.0025
    let y = e.offsetY/4.76 + e.offsetY*0.0025
    let dx = e.movementX/4.76// + e.movementX*0.0025
    let dy = e.movementY/4.76 //+ e.movementX*0.0025

    ctx.lineCap = "round";    
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x - dx, y - dy);
    ctx.stroke();
    ctx.closePath();
}  

//     // очистка изображения
//     document.getElementById("clear").onclick = function clear() {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
//     };