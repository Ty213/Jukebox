var currentSong = document.querySelector('.currentSong__jukebox');
var audio = document.querySelector('.audio__jukebox');
var playButton = document.querySelector('.jukebox__play');
var pauseButton = document.querySelector('.jukebox__pause');
var nextButton = document.querySelector('.jukebox__next');

class JukeBox {
    constructor(playlist){
        this.playlist = playlist;
        this.curSong = 0;
        
    }
    playSong() {
        audio.play();
    }
    pauseSong() {
        audio.pause();
    }
    setSong() {
        audio.src = this.playlist.list[this.curSong].path;
    }
    nextSong() {
        if(this.curSong === playlist.list.length - 1){
            this.curSong = 0;
        }else {
            this.curSong++;
        }
        
    }
}
class PlayList {
    constructor(songs) { //accepts an array of song objects.
        this.list = songs;
    }

}
class Song {
    constructor(name,artist,path) {
        this.name = name;
        this.artist = artist;
        this.path = path;
    }
}
var song1 = new Song('Happy Rock','Bensound','audio/happy-rock.mp3');
var song2 = new Song('Extreme Action', 'Bensound','audio/extreme-action.mp3');
var song3 = new Song('A New Beginning', 'Bensound','audio/a-new-beginning.mp3');
var song4 = new Song('Sci-fi', 'Bensound','audio/sci-fi.mp3');
var song5 = new Song('Jazzy French', 'Bensound','audio/jazzy-french.mp3');
var songs = [song1,song2,song3,song4,song5];

var playlist = new PlayList(songs);
var jukebox = new JukeBox(playlist);
jukebox.setSong();
audio.load();

function update(jukebox) {
    this.nextSong();
    this.setSong();
    audio.play();
}

playButton.addEventListener("click",jukebox.playSong);
pauseButton.addEventListener("click",jukebox.pauseSong);
nextButton.addEventListener("click",update.bind(jukebox));
