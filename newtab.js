let deg = 0;
function rotateImg(){
    let e = document.getElementById("rotation-img");
    e.src = sessionStorage.getItem('6b9ffec64667b065b7ec02825794f3c2');
}
function rLeft(){
    let e = document.getElementById("rotation-img");
    deg -= 90;
    e.style.transform = "rotate(" + deg + "deg)";
    if(deg%180 == 90){
        let h = e.height;
        e.style.marginTop = `${h/2}px`;
    }
}
function rRight(){
    let e = document.getElementById("rotation-img");
    deg += 90;
    e.style.transform = "rotate(" + deg + "deg)";
    if(deg%180 == 90){
        let h = e.height;
        e.style.marginTop = `${h/2}px`;
    }
}
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('rLeft').addEventListener('click', rLeft);
    document.getElementById('rRight').addEventListener('click', rRight);
});
rotateImg();