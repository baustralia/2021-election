setInterval(getTime, 1000);

var format = "US";

function formatTime() {
	if (format == "US") {
		format = "EU";
	}
	else {
		format = "US";
	}
}

function getTime() {
	var today = new Date();
	if (format == "US") {
		var hours = today.getHours() % 12 || 12;
		if (today.getHours() > 12) {
			document.getElementById("clock").innerHTML = hours + ":" + ("0" + today.getMinutes()).slice(-2) + " PM";
		}
		else {
			document.getElementById("clock").innerHTML = hours + ":" + ("0" + today.getMinutes()).slice(-2) + " AM";
		}
	}
	else {
		document.getElementById("clock").innerHTML = ("0" + today.getHours()).slice(-2) + ":" + ("0" + today.getMinutes()).slice(-2);
	}
}

function closeAbout() {
	var about = document.getElementById("about");
	about.style.visibility = "hidden";
}

function closeNotes() {
	var notes = document.getElementById("notes");
	notes.style.visibility = "hidden";
}

function closeSpeeches() {
	var taskbar = document.getElementById("tskbrsp");
	var speeches = document.getElementById("speeches");
	speeches.style.visibility = "hidden";
	taskbar.style.display = "none";
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

function openSpeeches() {
	var speeches = document.getElementById("speeches");
	var taskbar = document.getElementById("tskbrsp");
	speeches.style.zIndex = "100";
	speeches.style.visibility = "visible";
	taskbar.style.display = "inline-block";
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
dragElement(document.getElementById("speeches"));

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

function submitClicked() {
	setTimeout(submitChange, 10);
	}

function submitChange() {
	var box = document.getElementById("ballot");
	var header = '<div class="frametitle" id="ballotheader"><span class="title paper">Ballot</span></div>';
	box.innerHTML = header + '<p>Thank you for voting. If an error message appears at the top of the screen, please email monarchy@kingdomofbaustralia.com with the error message. Your vote may not have went through.</p><p>We appreciate your vote! If you wish to leave a comment on this interface, on the voting process, or something else we can change, please let us know! We will be acting on all requests possible. You can email us at elections@kingdomofbaustralia.com</p>';
}

function nextSpeech(s,n) {
	document.getElementById("sp" + s).style.display="none";
	document.getElementById("sp" + n).style.display="block";
	if (s == 0 && n == 1) {
		document.getElementById("spn").setAttribute("onclick", "nextSpeech(1,0)");
	}
	else if (s == 1 && n == 0) {
		document.getElementById("spn").setAttribute("onclick", "nextSpeech(0,1)");
	}
}
