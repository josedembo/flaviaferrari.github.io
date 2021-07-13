// get all keys 
const keys = document.querySelectorAll(".key")

//play notes function
function playNote(event){

 let audioKeyCode = getKeyCode(event);
// type or pressed key
const key = document.querySelector(`.key[data-key="${audioKeyCode}"]`)

//if key existe
const cantFounAnyKey = !key;

if(cantFounAnyKey){
  return;
}
//play audoio
addPlayingClass(key);
playAudio(audioKeyCode);
}

function addPlayingClass(key){
  key.classList.add("playing")
}

function playAudio(audioKeyCode) {
  const audio = document.querySelector(`audio[data-key="${audioKeyCode}"]`)
  audio.currentTime = 0;
  audio.play();
}

// getKeyCode function
function getKeyCode(event){
  let keyCode;
  const iskeyboard = event.type === "keydown"
  if(iskeyboard){
   keyCode = event.keyCode
  }else{
   keyCode = event.target.dataset.key
  }
  return keyCode;
}

removePlayingClass = (event) => {
  event.target.classList.remove("playing")
}

function registerEvents(){
  //click with mouse
  keys.forEach(function(key){
    key.addEventListener("click", playNote)
    key.addEventListener("transitionend", removePlayingClass)
  })
  
  //keybord type
  window.addEventListener("keydown", playNote )
}

window.addEventListener("load", registerEvents);