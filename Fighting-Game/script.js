var bottomrow = document.getElementById("bottom_row");
var hp = document.getElementsByClassName('hp');
var knighthp = document.getElementById("knightHP");
var knightstat = document.getElementById("knightstat");
var dragonhp = document.getElementById("dragonHP");
var attackbutt = document.getElementById("attackbutton");
var attackbutton_show = document.getElementsByClassName("attackbutt");

const attack_sound = new Audio("sound/เสียง ATTACK.m4a");
const sp_attack_sound = new Audio("sound/เสียง SPECIAL ATTACK.m4a");

const winner = new Audio("sound/winner_sound.m4a");
const loser = new Audio("sound/loser_sound.m4a");


var title = new Vue({
    el: "#game_title",
    data: {
        title: "The Knight VS The Dragon"
    }
})


//Define character hp
var knight_hp = 100;
var dragon_hp = 100;
var n = 1;


var music_status = "on";
var musiccontrol = document.getElementById("music-control");
var battlemusic = document.getElementById("Soundtrack");



function mute(){
    if(music_status == "off"){
        music_status = "on";
        musiccontrol.innerHTML = "<img src='image/unmute.png' onclick='mute();' class='music-icon'>"
        battlemusic.volume=0.1;
        battlemusic.play();
    }
    else{
        music_status = "off";
        musiccontrol.innerHTML = "<img src='image/mute.png' onclick='mute();' class='music-icon'>"
        battlemusic.pause();
    }
}


function startgame() {
    if(n==1){
     musiccontrol.innerHTML = "<img src='image/unmute.png' onclick='mute();' class='music-icon'>"
    }
    if(music_status == "on"){
        battlemusic.volume=0.1;
        battlemusic.play();
    }

    else{
         battlemusic.pause();
    }
   

    bottomrow.innerHTML = "Pick knight's ability by clicking the button above.";
    for (var i = 0; i < hp.length; i++) {
        hp[i].style.visibility = "visible";
    }
    attackbutton_show[0].style.visibility = "visible";
}

function attack() {
    bottomrow.innerHTML = "[Round " + n + "]</div><br>";
    n += 1;
    attack_sound.volume = 0.7;
    attack_sound.play();
    var hit = Math.max(Math.floor(Math.random() * 10) + 1, 0);
    if (hit >= 3 && hit <= 10) {
        var dmg = hit;
        dragon_hp -= dmg;
        bottomrow.innerHTML += "Knight attack with sword make " + dmg + " damage. " + "Dragon left HP : " + dragon_hp;
        if (dragon_hp <= 0) {
            dragon_hp = 0;
        }
        dragonhp.style.width = dragon_hp + "px";
        document.getElementById("dragonhpleft").innerHTML = "HP " + this.dragon_hp + " /100"
    }
    else {
        bottomrow.innerHTML += "Knight attack missed!";
    }

    if (dragon_hp <= 0) {
        bottomrow.innerHTML += "<br><b  style='font-size:1.5rem;'>Congratulation! You have defeated Dragon. <br><button class='buttonstyle_play' onclick='restart()' style='font-size: 3vh;'>Play Again?</button>";
        bottomrow.innerHTML += "<br><button onclick='close_game()' class='buttonstyle_play' style='font-size: 3vh; margin-top:5px;'>Close Game</button>";
        attackbutton_show[0].style.visibility = "hidden";
        winner.play();
    }
    else {
        dragon_attack();
    }
}

function special_attack() {
    bottomrow.innerHTML = "[Round " + n + "]<br>";
    n += 1;
    sp_attack_sound.volume = 0.7;
    sp_attack_sound.play();
    var hit = Math.max(Math.floor(Math.random() * 20) + 1, 0);
    if (hit >= 10 && hit <= 20) {
        var dmg = hit;
        dragon_hp -= dmg;
        bottomrow.innerHTML += "Knight attack with special attack make " + dmg + " damage. " + "Dragon left HP : " + dragon_hp;
        if (dragon_hp <= 0) {
            dragon_hp = 0;
        }
        dragonhp.style.width = dragon_hp + "px";
        document.getElementById("dragonhpleft").innerHTML = "HP " + this.dragon_hp + " /100"
    }
    else {
        bottomrow.innerHTML += "Knight special attack missed!";
    }
    if (dragon_hp <= 0) {
        bottomrow.innerHTML += "<br><b  style='font-size:1.5rem;'>Congratulation! You have defeated Dragon. <br><button onclick='restart()' class='buttonstyle_play' style='font-size: 3vh;'>Play Again?</button>";
        bottomrow.innerHTML += "<br><button onclick='close_game()' class='buttonstyle_play' style='font-size: 3vh; margin-top:5px;'>Close Game</button>";
        attackbutton_show[0].style.visibility = "hidden";
        winner.play();
    }
    else {
        dragon_attack();
    }
}

function dragon_attack() {
    var dragon_hit = Math.max(Math.floor(Math.random() * 15) + 1, 0);
    if (dragon_hit >= 5 && dragon_hit <= 15) {
        var dragon_dmg = dragon_hit;
        knight_hp -= dragon_dmg;
        bottomrow.innerHTML += "<br>Dragon attack you with fire blast make " + dragon_dmg + " damage. " + "Knight left HP : " + knight_hp;
        if (knight_hp <= 0) {
            knight_hp = 0;
        }
        knighthp.style.width = knight_hp + "px";
        document.getElementById("hpknight").innerHTML = "HP " + this.knight_hp + " /100"
    }

    else {
        bottomrow.innerHTML += "<br>Dragon attack missed!";
    }
    if (knight_hp <= 0) {
        bottomrow.innerHTML += "<br><b  style='font-size:1.5rem;'>Condolences! You have lost to Dragon. <br><button onclick='restart()' class='buttonstyle_play' style='font-size: 3vh;'>Play Again?</button>";
        bottomrow.innerHTML += "<br><button onclick='close_game()' class='buttonstyle_play' style='font-size: 3vh; margin-top:5px;'>Close Game</button>";
        attackbutton_show[0].style.visibility = "hidden";
        loser.play();
    }
}

function restart() {
    knight_hp = 100;
    dragon_hp = 100;
    n = 1;
    knighthp.style.width = knight_hp + "px";
    dragonhp.style.width = dragon_hp + "px";
    document.getElementById("hpknight").innerHTML = "HP " + this.knight_hp + "/100"
    document.getElementById("dragonhpleft").innerHTML = "HP " + this.dragon_hp + "/100"
    startgame();
}

function close_game() {
    window.close();
}

