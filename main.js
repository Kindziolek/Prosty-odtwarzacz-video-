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

    play.addEventListener("click", togglePlay);
}

createPlayer(document.querySelector("[data-js-player]"));