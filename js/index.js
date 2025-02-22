const number=Math.floor(Math.random()*101);
console.log(number);
var chance=7

function guessing(event){
  event.preventDefault();
  const guess=number_input.value;
  
  if (number==guess && chance>0){
    document.getElementById('m1').innerHTML = "Correct!";
  }else if (number<guess){
    document.getElementById('m1').innerHTML = "Down";
    chance=chance-1;
    document.getElementById('m2').innerHTML = "You have "+chance+" chances left.";
  }else if (number>guess){
    document.getElementById('m1').innerHTML = "Up";
    chance=chance-1;
    document.getElementById('m2').innerHTML = "You have "+chance+" chances left.";
  }
  if (chance<=0){
    document.getElementById('m1').innerHTML= "GAME OVER"
  }
  
}


submit.addEventListener('click',guessing);