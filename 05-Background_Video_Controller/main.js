function initVideoController(parentDiv) {
    const video = document.querySelector(`${parentDiv} video`);
    if (video === null) return;

    const videoProgressBar = document.querySelector(`${parentDiv} .video-controller__progress-bar`);
    const videoPlayBtn = document.querySelector(`${parentDiv} .video-controller .fa-play-circle`);
    const videoPauseBtn = document.querySelector(`${parentDiv} .video-controller .fa-pause-circle`);
    const videoReplayBtn = document.querySelector(`${parentDiv} .video-controller .fa-redo-alt`);
    const videoVolumBtn = document.querySelector(`${parentDiv} .video-controller .fa-volume-up`);
    const videoVolumMuteBtn = document.querySelector(`${parentDiv} .video-controller .fa-volume-mute`);

    // init Field
    videoPlayBtn.classList.toggle('invisible', video.autoplay);
    videoPauseBtn.classList.toggle('invisible', !video.autoplay);
    videoVolumBtn.classList.toggle('invisible', video.muted);
    videoVolumMuteBtn.classList.toggle('invisible', !video.muted);
    
    // init Method
    video.addEventListener('timeupdate', () => {
        const ratio = 100 * video.currentTime / video.duration;
        videoProgressBar.style.width = `${ratio}%`;
    });

    videoPlayBtn.addEventListener('click', () => {
        video.play();
        videoPlayBtn.classList.toggle('invisible');
        videoPauseBtn.classList.toggle('invisible');
    });

    videoPauseBtn.addEventListener('click', () => {
        video.pause();
        videoPlayBtn.classList.toggle('invisible');
        videoPauseBtn.classList.toggle('invisible');
    });

    videoReplayBtn.addEventListener('click', () => {
        video.currentTime = 0;
    });

    videoVolumBtn.addEventListener('click', ()=> {
        video.muted = true;
        videoVolumBtn.classList.toggle('invisible');
        videoVolumMuteBtn.classList.toggle('invisible');
    });

    videoVolumMuteBtn.addEventListener('click', ()=> {
        video.muted = false;
        videoVolumBtn.classList.toggle('invisible');
        videoVolumMuteBtn.classList.toggle('invisible');
    });
}

function main() {
    initVideoController("section:nth-of-type(1)");
    initVideoController("section:nth-of-type(2)");
    initVideoController("section:nth-of-type(3)");
};

main();