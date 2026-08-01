// ================= 元素 =================

const menuScreen = document.getElementById("menuScreen");
const countryScreen = document.getElementById("countryScreen");
const gameScreen = document.getElementById("gameScreen");

const map = document.getElementById("map");
const log = document.getElementById("log");

const foodText = document.getElementById("food");
const woodText = document.getElementById("wood");
const moraleText = document.getElementById("morale");
const turnText = document.getElementById("turn");

// ================= 游戏数据 =================

let food = 100;
let wood = 80;
let morale = 100;
let turn = 1;

let playerCountry = "";

// ================= 地图 =================

const terrains = [
    "🌲",
    "🌾",
    "🌾",
    "🌲",
    "🌲",
    "🌊",
    "⛰️"
];

function createMap() {

    map.innerHTML = "";

    let wolfPlaced = false;

    for (let i = 0; i < 100; i++) {

        const tile = document.createElement("div");
        tile.className = "tile";

        let terrain = terrains[Math.floor(Math.random() * terrains.length)];

        if (!wolfPlaced && terrain !== "🌊" && Math.random() < 0.08) {
            terrain = "🐺";
            wolfPlaced = true;
        }

        tile.textContent = terrain;

        tile.onclick = function () {

            switch (terrain) {

                case "🌲":
                    log.textContent = "🌲 森林：这里木材丰富。";
                    break;

                case "🌾":
                    log.textContent = "🌾 草原：这里食物充足。";
                    break;

                case "🌊":
                    log.textContent = "🌊 河流：目前无法穿越。";
                    break;

                case "⛰️":
                    log.textContent = "⛰️ 山地：天然防御地形。";
                    break;

                case "🐺":
                    log.textContent = "🐺 这里是你的领地。";
                    break;
            }

        };

        map.appendChild(tile);

    }

}

// ================= 主菜单 =================

document.getElementById("playBtn").onclick = function () {

    menuScreen.style.display = "none";
    countryScreen.style.display = "block";

};

// ================= 国家选择 =================

function chooseCountry(country) {

    playerCountry = country;
    if (country === "🐺 狼国") {
    playerIcon = "🐺";
}

if (country === "🦊 狐国") {
    playerIcon = "🦊";
}

if (country === "🐻 熊国") {
    playerIcon = "🐻";
}

    document.getElementById("countryTitle").textContent = country;

    countryScreen.style.display = "none";
    gameScreen.style.display = "block";

    createMap();

    log.textContent = "欢迎来到" + country + "！";

}

// ================= 回合 =================

document.getElementById("endTurn").onclick = function () {

    turn++;

    food += 20;
    wood += 10;

    if (morale < 100) {
        morale++;
    }

    foodText.textContent = food;
    woodText.textContent = wood;
    moraleText.textContent = morale;
    turnText.textContent = turn;

    log.textContent = "📅 第 " + turn + " 回合开始！";

};
