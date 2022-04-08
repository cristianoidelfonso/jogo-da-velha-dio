const button = document.getElementById('mode-selector');
const body = document.getElementsByTagName('body')[0];
// const footer = document.getElementsByTagName('footer')[0];

function changeClasses(){
  body.classList.toggle('dark-mode');
  button.classList.toggle('dark-mode');
  // footer.classList.toggle('dark-mode');
}

function changeText(){
  if(body.classList.contains('dark-mode')){
    button.innerText = 'Dark Mode On';
    return;
  }
  button.innerText = 'Light Mode On';
}

function changeMode(){
  changeClasses();
  changeText();
}

button.addEventListener('click', changeMode);