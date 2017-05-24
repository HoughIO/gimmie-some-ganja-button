function hooker() {
	var hooker = new Audio("ganja.mp3");
	hooker.play();
}

chrome.browserAction.onClicked.addListener(hooker);
