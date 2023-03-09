function colorChange(){
    let head = document.getElementById('heading')
    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);
    
    head.style.color = `rgb(${r}, ${g}, ${b})`
}