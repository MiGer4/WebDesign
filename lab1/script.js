const heroes = [
    {
    name: "Juggernaut",
    img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/heroes/juggernaut_full.png",
    sound: "./sounds/juggernaut.mp3",
    },
    {
    name: "Invoker",
    img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/heroes/invoker_full.png",
    sound: "./sounds/sun_strike.mp3",
    },
    {
    name: "Crystal Maiden",
    img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/heroes/crystal_maiden_full.png",
    sound:
        "https://static.wikia.nocookie.net/dota2_gamepedia/images/5/5e/Freezing_Field_cast.mp3/revision/latest?cb=20141217221456",
    },
    {
    name: "Pudge",
    img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/heroes/pudge_full.png",
    sound: "./sounds/pud_respawn_05.mp3",
    },
    {
    name: "Axe",
    img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/heroes/axe_full.png",
    sound:
        "https://static.wikia.nocookie.net/dota2_gamepedia/images/a/a5/Culling_Blade.mp3/revision/latest?cb=20141127225933",
    },
    {
    name: "Techies",
    img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/heroes/techies_full.png",
    sound:
        "https://static.wikia.nocookie.net/dota2_gamepedia/images/c/cd/Land_Mines_primed.mp3/revision/latest?cb=20170412115026",
    },
    {
    name: "Phantom Assassin",
    img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/heroes/phantom_assassin_full.png",
    sound:
        "https://static.wikia.nocookie.net/dota2_gamepedia/images/6/6a/Coup_de_Grace_target.mp3/revision/latest?cb=20141204195619",
    },
    {
    name: "Zeus",
    img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/heroes/zuus_full.png",
      sound: "./sounds/thundergods_wrath.mp3", // Додайте реальний шлях до звуку
    },
];

const button = document.getElementById("pick-hero-button");
const heroName = document.querySelector("#hero-name");
const heroImg = document.getElementById("hero-img");
const heroSound = document.getElementById("hero-sound");

button.addEventListener("click", function () {
    const randomHero = heroes[Math.floor(Math.random() * heroes.length)];
    heroName.textContent = randomHero.name;
    heroImg.src = randomHero.img;
    heroImg.dataset.sound = randomHero.sound;
});

heroImg.addEventListener("mouseover", function () {
    heroName.style.color = "white";
    heroSound.src = heroImg.dataset.sound;
    heroSound.play();
});

heroImg.addEventListener("mouseout", function () {
    heroName.style.color = "black";
    heroSound.pause();
    heroSound.currentTime = 0;
});