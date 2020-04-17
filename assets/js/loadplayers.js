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

Amplitude.init({"songs": amplitudesongs});
