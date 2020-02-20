// get the element into a javascript variable:
const element = document.getElementById("myHeading");
// current contents
console.log("Current content: ", element.innerText);
// change content
element.innerText = "Hello Bubu";

window.addEventListener('keydown',function(e){
  const audio = this.document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  this.console.log(key);
  this.console.log(audio);
  if(!audio){
      return;
  }
  audio.currentTime = 0;//rewind to the start
  audio.play();
  key.classList.add('playing');
  function removeTransition(e){
     
      if(e.propertyName !== 'transform'){
          return;
      }
      this.classList.remove('playing');
  }
  const keys = this.document.querySelectorAll('.key');
  this.console.log(keys);
  keys.forEach(key => key.addEventListener('transitionend',removeTransition));
});