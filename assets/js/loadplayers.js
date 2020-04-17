amplitudesongs = [];

players = document.querySelectorAll("div.player");
players.forEach(function(player, i){
    url = "https://haztecaso.mooo.com/podcasts" + player.getAttribute("data-url");
    player.querySelector(".amplitude-play-pause").setAttribute("data-amplitude-song-index",i)
    amplitudesongs.push({
        "url": url,
        "live":true
    });
});

Amplitude.init({
    "songs": amplitudesongs,
    "volume_increment": 10,
    "volume_decrement": 10
});

function updatevol(){
    vol = Amplitude.getConfig().volume;
    icons = document.querySelectorAll("span.volumeicon");
    icons.forEach(function(icon){
        if (vol>=50){
            icon.classList.add("fa-volume-up");
            icon.classList.remove("fa-volume-down");
            icon.classList.remove("fa-volume-off");
        }
        else if(vol < 50 && vol > 0){
            icon.classList.remove("fa-volume-up");
            icon.classList.add("fa-volume-down");
            icon.classList.remove("fa-volume-off");
        }
        else if(vol == 0){
            icon.classList.remove("fa-volume-up");
            icon.classList.remove("fa-volume-down");
            icon.classList.add("fa-volume-off");
        }
    });
}
window.setInterval(updatevol, 500);
