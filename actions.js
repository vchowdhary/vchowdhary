// JavaScript Document
function myFunction(){
	var pic = document.getElementById("picture");
	//picture.style.backgroundImage = 'url(twins.jpg)';
	
	//current image = twinnie
	//2nd image = twins 
	
	if(pic.style.backgroundImage === 'url("twinnie.jpg")'){
		pic.style.backgroundImage = 'url("twins.jpg")';
		console.log("if");
	}
	
	else
	{
		pic.style.backgroundImage = 'url("twinnie.jpg")';
		console.log("else");
	}
}

function toggle_visibility(){
	var text = document.getElementById("extra");
	var s_o = document.getElementById("girl_scouts");
	if(text.style.display === 'none')
	{
		fadeIn("extra", "block");
		text.style.top = '-3%';
		text.style.left = '22%';
		s_o.style.top = '400px';
		s_o.style.left = '0px';
	}
	else
	{
		fadeOut("extra");
	}
}

// fade out

function fadeOut(el){
	var el2 = document.getElementById(el);
  el2.style.opacity = 1;

  (function fade() {
    if ((el2.style.opacity -= 0.1) < 0) {
      el2.style.display = "none";
    } else {
      requestAnimationFrame(fade);
    }
  })();
}

// fade in

function fadeIn(el, display){
	var el2 = document.getElementById(el);
  el2.style.opacity = 0;
  el2.style.display = display || "block";

  (function fade() {
    var val = parseFloat(el2.style.opacity);
    if (((val += 0.1) <= 1)) {
      el2.style.opacity = val;
      requestAnimationFrame(fade);
    }
  })();
}
function toggleImage(){
var current_image = document.getElementById("projects-image");
if(current_image.src.match("blackjck-code.png"))
{
	current_image.src = "blackjack-output.PNG";
}
else
{
	current_image.src="blackjck-code.png";
}
}

function toggleProject(){
var current_project = document.getElementById("project-title");
}
