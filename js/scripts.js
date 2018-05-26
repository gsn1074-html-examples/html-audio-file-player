var playlist = [
	{"title":"Track 1","url":"http://www.noiseaddicts.com/samples_1w72b820/4037.mp3"},
	{"title":"Track 2","url":"http://www.noiseaddicts.com/samples_1w72b820/4254.mp3"},
	{"title":"Track 3","url":"http://www.noiseaddicts.com/samples_1w72b820/4289.mp3"}
];

var audio = new Audio(playlist[0].url);

var playing = 0;

window.addEventListener("load", function() {

	document.querySelector("#display").innerText = playlist[playing].title;

	document.querySelector("#play").addEventListener("click", function() {
		audio.play();
	});

	document.querySelector("#pause").addEventListener("click", function() {
		audio.pause();
	});

	document.querySelector("#back").addEventListener("click", function() {
        
        if(playing > 0) { 
            playing--;
        }

		audio.src = playlist[playing].url;
		document.querySelector("#display").innerText = playlist[playing].title;
	});

	document.querySelector("#next").addEventListener("click", function() {

		if(playing < playlist.length - 1) {
            playing++;
        }
        
        audio.src = playlist[playing].url;
		document.querySelector("#display").innerText = playlist[playing].title;
	});
});