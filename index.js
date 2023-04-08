let toggle = document.querySelector(".toggle");
function animated(){
    toggle.classList.toggle("active");
    document.body.classList.toggle("dark-theme");

}


// change heart color 
let changeColor = document.querySelectorAll('.song .right-section i');
for(let s of changeColor){
    s.setAttribute('clr-btn' , 'false');
}
for(let s of changeColor){
    s.addEventListener('click',()=>{
        if(s.getAttribute('clr-btn') == 'true'){
            s.style.color = 'white';
            s.setAttribute('clr-btn','false');
        }else{
            s.style.color = 'red';
            s.setAttribute('clr-btn','true');

        }
    })
}




//play-pause option and dancing bar
let play = document.getElementById('play');
let pause = document.getElementById('pause');
let playPause = document.getElementById('p-btn');
let dancingBar = document.querySelector('.dancing-bars')


if(playPause.getAttribute('flag') == 'false'){
    play.style.display = 'none';
}

playPause.addEventListener('click',()=>{
    if(playPause.getAttribute('flag') == 'false'){
        play.style.display = 'unset';
        pause.style.display = 'none';
        playPause.setAttribute('flag','true');
        dancingBar.style.display = 'none';
    }else{
        pause.style.display = 'unset';
        play.style.display = 'none';
        playPause.setAttribute('flag','false');
        dancingBar.style.display = 'flex';
    }
})



// image change of song bar 
let songImg = document.querySelectorAll('.latest-song-img img');
let k = document.querySelector('.music-img');
console.log(k.style.background)
for(let a of songImg){
    a.addEventListener('click',()=>{

    })
}