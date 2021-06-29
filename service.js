
  var slider = document.getElementById("myRange");
  var output = document.getElementById("demo");
  output.innerHTML = slider.value;
  
  slider.oninput = function() {
    output.innerHTML = this.value;
  }
  var slider1 = document.getElementById("myRange1");
  var output1 = document.getElementById("demo1");
  output1.innerHTML = slider.value;
  
  slider1.oninput = function() {
    output1.innerHTML = this.value;
  }
  var slider2 = document.getElementById("myRange2");
  var output2 = document.getElementById("demo2");
  output2.innerHTML = slider.value;
  
  slider2.oninput = function() {
    output2.innerHTML = this.value;
  }
  var slider3 = document.getElementById("myRange3");
  var output3 = document.getElementById("demo3");
  output3.innerHTML = slider.value;
  
  slider3.oninput = function() {
    output3.innerHTML = this.value;
  }
  var slider4 = document.getElementById("myRange4");
  var output4 = document.getElementById("demo4");
  output.innerHTML = slider.value;
  
  slider4.oninput = function() {
    output4.innerHTML = this.value;
  }
  var slider5 = document.getElementById("myRange5");
  var output5 = document.getElementById("demo5");
  output5.innerHTML = slider.value;
  
  slider5.oninput = function() {
    output5.innerHTML = this.value;
  }
  
  const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open("GET", "https://weatherinfo.p.rapidapi.com/api/weather/?latitude=45.06&longitude=-94.35");
xhr.setRequestHeader("x-rapidapi-key", "486b8c4136mshecc5bb5954df9c2p1cba6ejsn01f55e24bd30");
xhr.setRequestHeader("x-rapidapi-host", "weatherinfo.p.rapidapi.com");

xhr.send(data);




//  https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=c7fcd27513d94dd0b38d1142589057fc
