var ganjasound = new Audio("ganja.mp3");

function ganja() {
        ganjasound.currentTime = 0.2;
	ganjasound.play();
}
chrome.browserAction.onClicked.addListener(ganja);
