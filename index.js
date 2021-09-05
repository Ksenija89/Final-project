
//Highlighting the offer paragraph as the user reed and moves down the page

const hover = document.querySelector('#retreat')

// This handler will be executed every time the cursor
// is moved over a row div
hover.addEventListener("mouseover", function( event ) {
    // highlight the mouseover target
    event.target.style.backgroundColor = "silver";
  
    // reset the color after a short delay
    setTimeout(function() {
      event.target.style.backgroundColor = "";
    }, 5000);
  }, false);

//headers background color

function changeColor() {
	let colour = document.getElementsByClassName('header-bg'); // get all elements
	for(i = 0; i < elements.length; i++){
		colour[i].style.backgroundColor = "silver";
	}
}


//Storing data inside google sheet

var form = document.getElementById('sheetdb-form');
form.addEventListener("submit", e => {
  e.preventDefault();
  fetch(form.action, {
      method : "POST",
      body: new FormData(document.getElementById("sheetdb-form")),
  }).then(
      response => response.json()
  ).then((html) => {
    // you can put any JS code here
    alert('Thank you for visiting our website. We will contact you soon for further instructions.')
  });
});