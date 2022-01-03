window.onload = function () {
    var img = document.querySelector("#kasuya1");
    var count = document.querySelector("#score");
    var score = 0;
    const click = new Audio("sound/sound-open.mp3");
    const notclick = new Audio("sound/sound-close.mp3");


    // Event (Desktops)
    img.addEventListener('mousedown', function () {
        plusScore();
        img.src = "./images/คาซุยะ_ตอนคลิ๊ก.png";
        click.play();
    });

    img.addEventListener('mouseup', function () {
        img.src = "./images/คาซุยะ_ตอนไม่คลิ๊ก.png";
        notclick.play();
    });


    // Event (Mobile)
    img.addEventListener("touchstart", function (e) {
        e.preventDefault();
        plusScore();
        img.src = "./images/คาซุยะ_ตอนคลิ๊ก.png";
        click.play();
    })

    img.addEventListener("touchend", function (e) {
        e.preventDefault();
        img.src = "./images/คาซุยะ_ตอนไม่คลิ๊ก.png";
        click.play();
    })

    // CountScore
    function plusScore() {
        score++;
        count.innerHTML = score;
    }
}