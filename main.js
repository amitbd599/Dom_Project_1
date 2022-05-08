

window.onload=()=>{
  main();
}

function main(){
    let root= document.querySelector('.container');
    let btn = document.querySelector('.btn');

    btn.addEventListener('click', function(){
      let bgColor= rgbColor();
      root.style.backgroundColor=bgColor;
    })
}


function rgbColor(){
  let r = Math.floor(Math.random()*255);
  let g = Math.floor(Math.random()*255);
  let b = Math.floor(Math.random()*255);

  return `rgb(${r}, ${g}, ${b})`
}