// JavaScript is capitalized using "camel case": https://en.wikipedia.org/wiki/Camel_case
// Check out the power of the classList property: https://www.w3schools.com/jsref/prop_element_classlist.asp

// "el" stands for the "element" that was just clicked
function addClassOceanRed(el){
	document.getElementById('1Col').classList.add("oceanred");

}
function addClassOceanBlue(el){
	el.classList.add("oceanblue");

}
function addClassOceanTan(el){
	el.classList.add("oceantan");

}
function addClassOceanOrange(el){
	el.classList.add("oceanorange");

}
function addClassOceanDarkBlue(el){
	el.classList.add("oceandarkblue");

}

// "el" stands for the "element" that was just clicked
function removeClassNormalRed(el){
	el.classList.remove("red");
}
function removeClassNormalTan(el){
	el.classList.remove("tan");
}
function removeClassNormalBlue(el){
	el.classList.remove("blue");
}
function removeClassNormalBrown(el){
	el.classList.remove("brown");
}


function popupBox(el) {
  var popup = document.getElementById("clickMe");
  popup.classList.toggle("show");
}

function showThumb(el){
	document.getElementById('1Col').src = "image/thumbs_up.png";
	document.getElementById('col').classList.add("oceanblue");
	document.getElementById('col6').classList.add("oceanred");
	document.getElementById('col10').classList.add("oceanblue");
	document.getElementById('col11').classList.add("oceantan");
	document.getElementById('col3').classList.add("oceanorange");
	document.getElementById('col7').classList.add("oceandarkblue");
	document.getElementById('col8').classList.add("oceandarkblue");
	document.getElementById('col').classList.remove("red");
	document.getElementById('col6').classList.remove("red");
	document.getElementById('col2').classList.remove("tan");
	document.getElementById('col10').classList.remove("blue");
	document.getElementById('col11').classList.remove("brown");
	document.getElementById('col7').classList.remove("brown");
	document.getElementById('col8').classList.remove("brown");
	document.getElementById('col9').classList.remove("tan");
	document.getElementById('col3').classList.remove("orange");
	
}