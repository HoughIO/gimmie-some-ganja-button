function ganja() {
	var ganja = new Audio("ganja.mp3");
	ganja.play();
}

chrome.browserAction.onClicked.addListener(ganja);
