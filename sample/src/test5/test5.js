export class Test5 {

    constructor() {
        this.myKeypressCallback = this.keypressInput.bind(this);
    }

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

    attached() {
        window.addEventListener('keydown', this.myKeypressCallback, false);
    }

    detached() {
        window.removeEventListener('keydown', this.myKeypressCallback);
    }

    keypressInput(e) {
        if (e.altKey && e.keyCode === 87 /* w */ ) {
            $("#mediaPlayer").focus();
        }
    }
}