function hooker() {
	var hooker = new Audio();
	hooker.src = 'hooker.mp3';
	hooker.play();
}

chrome.browserAction.onClicked.addListener(hooker);
