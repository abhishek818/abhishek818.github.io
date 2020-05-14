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

var i=0;
var images = [];
var time = 1500;
var ovals = document.getElementsByClassName("sample-oval");
var opinions = document.getElementsByClassName("customer-quotes");
var names = document.getElementsByClassName("name");
var locations = document.getElementsByClassName("location");

var customer_names = ["Raja Ram", "Kane", "Abhishek", "Fyle"];

var comments = ["Lorem Ipsum is simply dummy text of the<br> &emsp;&nbsp;printing and typesetting industry. "
 +"Lorem Ipsum<br>&emsp; has been the industry's standard dummy text<br>&emsp; ever since the 1500s.","This is just an opinion.","This is another opinion.<br>"
 +"&emsp; Didn't Knew will learn so much from <br>&emsp; building a simple Website.",
"Don't Know about it."];

var customer_locations = ["Tip World", "Delhi", "Bihar", "Karnataka"];

images[0] = "./assets/images/profile.png";
images[1] = "./assets/images/profile2.png";
images[2] = "./assets/images/profile3.png";
images[3] = "./assets/images/profile4.png";

function changeCustomers()
{
  document.slide.src = images[i];

  ovals[i].classList.add("oval-active"); 
  ovals[i].classList.remove("oval-dead");
  
  opinions[0].innerHTML = comments[i];
  names[0].innerHTML = customer_names[i];
  locations[0].innerHTML = customer_locations[i];

    if(i>0)   
    ovals[i-1].classList.add("oval-dead");  
    if(i==0)
     ovals[ovals.length-1].classList.add("oval-dead"); 
  
  if(i < images.length - 1)
  {
    i++;
  }
  else
    i=0;
// if(ovals[i].classList.contains("oval-active"))
}

setInterval("changeCustomers()" , time);

ovals[0].onclick = changeCustomers0;
ovals[1].onclick = changeCustomers1;
ovals[2].onclick = changeCustomers2;
ovals[3].onclick = changeCustomers3;


function changeCustomers0()
{
   document.slide.src = images[0];

  ovals[0].classList.add("oval-active"); 
  ovals[0].classList.remove("oval-dead");
  
  opinions[0].innerHTML = comments[0];
  names[0].innerHTML = customer_names[0];
  locations[0].innerHTML = customer_locations[0];
}

function changeCustomers1()
{
   document.slide.src = images[1];

  ovals[1].classList.add("oval-active"); 
  ovals[1].classList.remove("oval-dead");
  
  opinions[0].innerHTML = comments[1];
  names[0].innerHTML = customer_names[1];
  locations[0].innerHTML = customer_locations[1];
}

function changeCustomers2()
{
   document.slide.src = images[2];

  ovals[2].classList.add("oval-active"); 
  ovals[2].classList.remove("oval-dead");
  
  opinions[0].innerHTML = comments[2];
  names[0].innerHTML = customer_names[2];
  locations[0].innerHTML = customer_locations[2];
}

function changeCustomers3()
{
   document.slide.src = images[3];

  ovals[3].classList.add("oval-active"); 
  ovals[3].classList.remove("oval-dead");
  
  opinions[0].innerHTML = comments[3];
  names[0].innerHTML = customer_names[3];
  locations[0].innerHTML = customer_locations[3];
}