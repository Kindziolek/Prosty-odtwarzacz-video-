function createPlayer(container) {
    const video = container.querySelector("video");
    const timeline = container.querySelector("[data-js-timeline]");
    const play = container.querySelector("[data-js-play]");
    const time = container.querySelector("[data-js-time]");
    const duration = container.querySelector("[data-js-duration]");
    const progress = container.querySelector("[data-js-progress]");

    function togglePlay() {
        if(video.paused) {
            video.play();
            play.classList.remove("fa-play");
            play.classList.add("fa-pause");
        } else {
            video.pause();
            play.classList.remove("fa-pause");
            play.classList.add("fa-play");
        }
    }

    function updateProgress(e) {
        progress.style.width = `${e.currentTarget.currentTime / e.currentTarget.duration * 100}%`;
    }

    play.addEventListener("click", togglePlay);

    video.addEventListener("timeupdate", updateProgress);
}

createPlayer(document.querySelector("[data-js-player]"));