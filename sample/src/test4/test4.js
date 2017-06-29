export class Test4 {

    onPlay() {
        this.mediaPlayer.play();
    }

    onStop() {
        this.mediaPlayer.stop();
    }

    onPause() {
        this.mediaPlayer.pause();
    }

    onFullscreen() {
        this.mediaPlayer.fullScreen(true);
    }

    onMute() {
        this.mediaPlayer.mute(!this.mediaPlayer.mute());
    }

    onEnded() {
        alert(this.mediaPlayer.isEnded());
    }

    onPaused() {
        alert(this.mediaPlayer.isPaused());
    }

    onPlaying() {
        alert(this.mediaPlayer.isPlaying());
    }

    seekTo() {
        this.mediaPlayer.seek(this.valueSeek.value());
    }

    setVolume() {
        this.mediaPlayer.volume(this.valueVolume.value());
    }

}