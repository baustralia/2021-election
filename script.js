function closeAbout() {
	var about = document.getElementById("about");
	about.style.visibility = "hidden";
}

function closeNotes() {
	var notes = document.getElementById("notes");
	notes.style.visibility = "hidden";
}

function openAbout() {
	var about = document.getElementById("about");
	var ballot = document.getElementById("ballot");
	var notes = document.getElementById("notes");
	about.style.zIndex = "10";
	notes.style.zIndex = "5";
	ballot.style.zIndex = "1";
	about.style.visibility = "visible";
}

function openNotes() {
	var about = document.getElementById("about");
	var ballot = document.getElementById("ballot");
	var notes = document.getElementById("notes");
	about.style.zIndex = "10";
	notes.style.zIndex = "5";
	ballot.style.zIndex = "1";
	notes.style.visibility = "visible";
}

function raiseAbout() {
	var about = document.getElementById("about");
	var ballot = document.getElementById("ballot");
	var notes = document.getElementById("notes");
	about.style.zIndex = "10";
	notes.style.zIndex = "5";
	ballot.style.zIndex = "1";
}

function raiseNotes() {
	var about = document.getElementById("about");
	var ballot = document.getElementById("ballot");
	var notes = document.getElementById("notes");
	about.style.zIndex = "5";
	notes.style.zIndex = "10";
	ballot.style.zIndex = "1";
}

function raiseBallot() {
	var about = document.getElementById("about");
	var ballot = document.getElementById("ballot");
	var notes = document.getElementById("notes");
	about.style.zIndex = "1";
	notes.style.zIndex = "5";
	ballot.style.zIndex = "10";
}
dragElement(document.getElementById("ballot"));
dragElement(document.getElementById("about"));
dragElement(document.getElementById("notes"));

function dragElement(elmnt) {
	var pos1 = 0,
		pos2 = 0,
		pos3 = 0,
		pos4 = 0;
	if (document.getElementById(elmnt.id + "header")) {
		// if present, the header is where you move the DIV from:
		document.getElementById(elmnt.id + "header").zIndex = 20;
		document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
	} else {
		// otherwise, move the DIV from anywhere inside the DIV:
		elmnt.onmousedown = dragMouseDown;
	}

	function dragMouseDown(e) {
		e = e || window.event;
		e.preventDefault();
		// get the mouse cursor position at startup:
		pos3 = e.clientX;
		pos4 = e.clientY;
		document.onmouseup = closeDragElement;
		// call a function whenever the cursor moves:
		document.onmousemove = elementDrag;
	}

	function elementDrag(e) {
		e = e || window.event;
		e.preventDefault();
		// calculate the new cursor position:
		pos1 = pos3 - e.clientX;
		pos2 = pos4 - e.clientY;
		pos3 = e.clientX;
		pos4 = e.clientY;
		// set the element's new position:
		elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
		elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
	}

	function closeDragElement() {
		// stop moving when mouse button is released:
		document.onmouseup = null;
		document.onmousemove = null;
	}
}