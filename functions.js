// $(document).ready(function()
// {
// 	$('.switch').click(function()
// 	{
// 		$(this).toggleClass("switchOn");
// 	});
// });

 // document.addEventListener("DOMContentLoaded", function(event) { 
 //    document.getElementsByClassName("default_clicked")[0].focus();
 // });

var lollipop_cost = document.getElementsByClassName("lollipop-cost")[0];
var icecandy_cost = document.getElementsByClassName("icecandy-cost")[0];
var savings_amount = document.getElementsByClassName("saved-amount")[0];
var lollipop=1;
var icecandy=2;
var savings=100;

var servings = 0;
var duration = 1;
var options = document.getElementsByClassName("servings_quantity");

options[0].onclick = setServings0;
options[1].onclick = setServings1;
options[2].onclick = setServings2;
options[3].onclick = setServings3;

options[2].classList.add("focus");

var x = document.getElementsByClassName("item-quantity");

function setServings0()
{
	  for(i = 0; i < x.length; i++) 
	  {
    	x[i].innerHTML = options[0].value;
    }

  	lollipop_cost.innerHTML = lollipop*options[0].value;
  	icecandy_cost.innerHTML = icecandy*options[0].value;
  	savings_amount.innerHTML = icecandy*options[0].value-lollipop*options[0].value;
    
    options[0].classList.add("focus");

    for(i = 0; i < options.length; i++) 
    {
      if(i!=0)
      options[i].classList.remove("focus");
    } 
}

function setServings1()
{
	  for(i = 0; i < x.length; i++) 
	  {
    	x[i].innerHTML = options[1].value;
  	}
  	
    lollipop_cost.innerHTML = lollipop*options[1].value;
  	icecandy_cost.innerHTML = icecandy*options[1].value;
  	savings_amount.innerHTML = icecandy*options[1].value-lollipop*options[1].value;
    // options[1].focus();
    options[1].classList.add("focus");

    for(i = 0; i < options.length; i++) 
    {
      if(i!=1)
      options[i].classList.remove("focus");
    } 
}

function setServings2()
{
	  for (i = 0; i < x.length; i++) 
	  {
    	x[i].innerHTML = options[2].value;
  	}
  	
    lollipop_cost.innerHTML = lollipop*options[2].value;
  	icecandy_cost.innerHTML = icecandy*options[2].value;
  	savings_amount.innerHTML = icecandy*options[2].value-lollipop*options[2].value;

    options[2].classList.add("focus");

    for(i = 0; i < options.length; i++) 
    {
      if(i!=2)
      options[i].classList.remove("focus");
    } 
}

function setServings3()
{
  	for (i = 0; i < x.length; i++) 
	  {
    	x[i].innerHTML = options[3].value;
  	}
  	
    lollipop_cost.innerHTML = lollipop*options[3].value;
  	icecandy_cost.innerHTML = icecandy*options[3].value;
  	savings_amount.innerHTML = icecandy*options[3].value-lollipop*options[3].value;

    options[3].classList.add("focus");

    for(i = 0; i < options.length; i++) 
    {
      if(i!=3)
      options[i].classList.remove("focus");
    } 
}


document.getElementsByClassName("toggle-button")[0].onclick = setDuration;

var duration_option = document.getElementsByClassName("duration-option");

function setDuration()
{
	lollipop = (duration == 0) ? 1:0.5;
	icecandy = (duration == 0) ? 2:1;
	duration = (duration == 0) ? 1:0;
	for (i = 0; i < duration_option.length; i++) 
	{
    	duration_option[i].innerHTML = (duration == 0) ? "year":"month";
  	}
  	lollipop_cost.innerHTML = lollipop*x[0].innerHTML; 
  	icecandy_cost.innerHTML = icecandy*x[1].innerHTML;
  	savings_amount.innerHTML = icecandy*x[1].innerHTML-lollipop*x[0].innerHTML; 
}

