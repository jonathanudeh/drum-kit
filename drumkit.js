
//EventListener for when a key on the keyboard is pressed.
window.addEventListener("keydown", (e) => {
    //keycode is used here to match/ know which key on the keyboard was clicked
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`)

    if (!audio) return

    key.classList.add("playing")
    audio.currentTime = 0;
    audio.play();

})



//Returns the div back to its initial state after being clicked.
const removeClass = e => {
    if(e.propertyName !== "transform") return;
    e.target.classList.remove("playing")
}

const keys = Array.from(document.querySelectorAll(".key"))
keys.forEach(key => key.addEventListener("transitionend", removeClass))



// EventListener for when our div is clicked using a mouse.
const audio = document.querySelector(".sound");

keys.forEach(key => 
    key.addEventListener("click", () => {
    key.classList.add("playing");
    
    const sound = key.getAttribute("data-sound");
    audio.src = sound;
    audio.currentTime = 0;
    audio.play();
}))
