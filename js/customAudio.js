var audio = document.getElementById('audio');
var count = 0;

function playPause(){
	if(count == 0){
		count = 1;
		audio.play();
		audio.volume = 0.3;
	}else{
		count = 0;
		audio.pause();
	}

}

function stop(){
	playPause()
	audio.pause();
	audio.currentTime = 0;
}