const heroes = [
    {
    name: "Juggernaut",
    img: "images/juggernaut_full.png",
    sound: "./sounds/juggernaut.mp3",
    },
    {
    name: "Invoker",
    img: "images/invoker_full.png",
    sound: "./sounds/sun_strike.mp3",
    },
    {
    name: "Crystal Maiden",
    img: "images/crystal_maiden_full.png",
    sound:
        "sounds/Freezing_Field_cast.mp3.mpeg",
    },
    {
    name: "Pudge",
    img: "images/pudge_full.png",
    sound: "./sounds/pud_respawn_05.mp3",
    },
    {
    name: "Axe",
    img: "images/axe_full.png",
    sound:
        "sounds/Culling_Blade.mp3.mpeg",
    },
    {
    name: "Techies",
    img: "images/techies_full.png",
    sound:
        "sounds/Land_Mines_primed.mp3.mpeg",
    },
    {
    name: "Phantom Assassin",
    img: "images/phantom_assassin_full.png",
    sound:
        "sounds/Coup_de_Grace_target.mp3.mpeg",
    },
    {
    name: "Zeus",
    img: "images/zuus_full.png",
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

heroImg.onmouseout = function(){
    heroName.style.color = "black";
    heroSound.pause();
    heroSound.currentTime = 0;}
    