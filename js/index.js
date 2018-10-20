function playVideo() {
    let videoContainer = document.getElementById("video-container");
    videoContainer.style.display = "block";
    
    let video = document.getElementById("video");
    video.play();
    
    document.getElementById("start").style.display = "none";
    document.getElementById("demo").style.display = "none";
    document.getElementById("footer").style.display = "none";
    
    video.onended = function (e) {
        window.location = "menu.html";
    };
}

function skip() {
    window.location = "menu.html";
}
