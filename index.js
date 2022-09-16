
var n = document.querySelectorAll(".drum").length;
for(var i=0;i<n;i++)
{
  var a = this.innerHTML;
  document.querySelectorAll(".drum")[i].addEventListener("click",function(event)
                                                                {
                                                                  clicked(this.innerHTML)
                                                                  animation(this.innerHTML)
                                                                } );
}
document.addEventListener("keypress", function(event)
                                      {
                                        clicked(event.key)
                                        animation(event.key)
                                      } );

function clicked(a)
{
  var audio;
  // var a = this.innerHTML;
  if(a == 'w') audio = new Audio("sounds/tom-1.mp3");
  else if(a == 'a') audio = new Audio("sounds/snare.mp3");
  else if(a == 's') audio = new Audio("sounds/tom-2.mp3");
  else if(a == 'd') audio = new Audio("sounds/kick-bass.mp3");
  else if(a == 'j') audio = new Audio("sounds/tom-3.mp3");
  else if(a == 'k') audio = new Audio("sounds/crash.mp3");
  else if(a == 'l') audio = new Audio("sounds/tom-4.mp3");
  audio.play();
}

function animation(a)
{
  document.querySelector("."+a).classList.add("pressed");
  setTimeout(function(event)
            {
              document.querySelector("."+a).classList.remove("pressed");
            },150);
}
