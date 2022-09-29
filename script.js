document.body.addEventListener('keyup', (event)=>{
    playsSound(event.code.toLowerCase());
});

function playsSound(sound) {
    let audioElement = document.querySelector(`#s_${sound}`);
    let keyElement = document.querySelector(`div[data-key="${sound}"]`);

    if(audioElement){
        audioElement.play();
    } 

    if(keyElement){
        keyElement.classList.add('active');
    }

}