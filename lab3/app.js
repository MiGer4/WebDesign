import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appSettings = {
    databaseURL: "https://dota-2-hero-tracker-default-rtdb.europe-west1.firebasedatabase.app/"
};

const app = initializeApp(appSettings);
const database = getDatabase(app);
const listDB = ref(database, "hero");

const heroSelectEl = document.getElementById("hero-select");
const addHeroButtonEl = document.getElementById("add-hero-button");
const heroListEl = document.getElementById("hero-list");

// Функція для отримання всіх героїв
async function fetchHeroes() {
    try {
        const response = await fetch("https://api.opendota.com/api/heroes");
        const heroes = await response.json();

        heroes.sort((a, b) => a.localized_name.localeCompare(b.localized_name));

        populateHeroSelect(heroes);
    } catch (error) {
        console.error("Помилка отримання даних з API:", error);
    }
}

// Функція для отримання інформації про конкретного героя
async function fetchHeroInfo(heroLocalizedName) {
    const response = await fetch(`https://api.opendota.com/api/heroStats`);
    
    if (!response.ok) {
        console.error('Не вдалося завантажити дані про героїв');
        return null;
    }

    const heroes = await response.json();
    const selectedHero = heroes.find(h => h.localized_name === heroLocalizedName);

    if (!selectedHero) {
        console.error('Герой не знайдений');
        return null;
    }

    return selectedHero;
}

// Заповнюємо випадаючий список героями
function populateHeroSelect(heroes) {
    heroSelectEl.innerHTML = '<option value="" disabled selected>Шукати героя...</option>';

    heroes.forEach((hero) => {
        const optionEl = document.createElement("option");
        optionEl.value = hero.localized_name;
        optionEl.textContent = hero.localized_name;
        heroSelectEl.appendChild(optionEl);
    });
}

// Додаємо героя до бази даних
addHeroButtonEl.addEventListener("click", async () => {
    const selectedHero = heroSelectEl.value;
    if (selectedHero) {
        try {
            const hero = await fetchHeroInfo(selectedHero);
            const heroIconUrl = `https://cdn.akamai.steamstatic.com/${hero.icon}`;

            await push(listDB, {
                name: selectedHero,
                icon: heroIconUrl
            });
            console.log(`${selectedHero} додано до Firebase`);
        } catch (error) {
            console.error("Помилка при отриманні або додаванні героя:", error);
        }
    }
});

// Відображення списку героїв з бази даних
onValue(listDB, (snapshot) => {
    heroListEl.innerHTML = "";
    const data = snapshot.val();

    if (data) {
        Object.entries(data).forEach(async ([key, value]) => {
            const listItem = document.createElement("li");
            listItem.style.display = "flex";
            listItem.style.flexDirection = "column";
            listItem.style.alignItems = "flex-start";
            listItem.style.cursor = "pointer";
            listItem.style.borderBottom = "1px solid #ccc";
            listItem.style.padding = "10px";

            const temp = document.createElement("div");
            temp.classList.add("main-info");
            temp.style.display = "flex";
            temp.style.alignItems = "center";
            temp.style.width = "100%";

            const heroIcon = document.createElement("img");
            heroIcon.src = value.icon;
            heroIcon.alt = value.name;
            heroIcon.style.width = "50px";
            heroIcon.style.height = "50px";
            heroIcon.style.marginRight = "10px";

            const heroName = document.createElement("span");
            heroName.textContent = value.name;
            heroName.style.fontWeight = "bold";

            const deleteButton = document.createElement("button");
            deleteButton.textContent = "❌";
            deleteButton.classList.add("delete-button");
            deleteButton.style.marginLeft = "auto";
            deleteButton.addEventListener("click", function (event) {
                event.stopPropagation();
                const itemRef = ref(database, `hero/${key}`);
                remove(itemRef);
                console.log(`${value.name} видалено з бази даних`);
            });

            const heroInfo = document.createElement("div");
            heroInfo.classList.add("hero-info");
            heroInfo.style.display = "none";
            heroInfo.style.marginTop = "10px";

            // Отримуємо додаткову інформацію про героя та додаємо її
            const heroData = await fetchHeroInfo(value.name);
            if (heroData) {
                heroInfo.innerHTML = `
                    <p><strong>Role:</strong> ${heroData.roles.join(", ")}</p>
                    <p><strong>Main Attribute:</strong> ${heroData.primary_attr}</p>
                    <p><strong>Attack:</strong> ${heroData.attack_type}</p>
                    <p><strong>Base health:</strong> ${heroData.base_health}</p>
                    <p><strong>Base mana:</strong> ${heroData.base_mana}</p>
                    <p><strong>Pro picks:</strong> ${heroData.pro_pick}</p>
                    <p><strong>Pro win:</strong> ${heroData.pro_win}</p>
                `;
            }

            listItem.appendChild(temp);
            temp.appendChild(heroIcon);
            temp.appendChild(heroName);
            temp.appendChild(deleteButton);
            listItem.appendChild(heroInfo);

            // Додаємо подію для розгортання інформації
            listItem.addEventListener("click", () => {
                const isOpen = heroInfo.style.display === "block";
                heroInfo.style.display = isOpen ? "none" : "block";
            });

            heroListEl.appendChild(listItem);
        });
    } else {
        heroListEl.innerHTML = "<li>Список героїв порожній</li>";
    }
});

fetchHeroes();
