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
let playerIcon = "wolf";

// ================= 地图 =================

const terrains = [
    "forest",
    "grass",
    "grass",
    "forest",
    "forest",
    "lake",
    "mountain"
];
function createMap() {

    map.innerHTML = "";

    let wolfPlaced = false;

    for (let i = 0; i < 100; i++) {

        const tile = document.createElement("div");
        tile.className = "tile";

        let terrain = terrains[Math.floor(Math.random() * terrains.length)];

        if (!wolfPlaced && terrain !== "lake" && Math.random() < 0.08) {
    terrain = playerIcon;
    wolfPlaced = true;
}
const img = document.createElement("img");

img.src = terrain + ".png";

tile.appendChild(img);

img.src = terrain + ".png";

tile.appendChild(img);

        tile.onclick = function () {

            switch (terrain) {

                case "forest":
                    log.textContent = "🌲 森林：这里木材丰富。";
                    break;

                case "grass":
                    log.textContent = "🌾 草原：这里食物充足。";
                    break;

                case "lake":
                    log.textContent = "🌊 河流：目前无法穿越。";
                    break;

                case "mountain":
                    log.textContent = "⛰️ 山地：天然防御地形。";
                    break;

                case playerIcon:
    log.textContent = playerCountry + " 的领地。";
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
        playerIcon = "wolf";
    }

    if (country === "🦊 狐国") {
        playerIcon = "fox";
    }

    if (country === "🐻 熊国") {
        playerIcon = "bear";
    }

    document.getElementById("countryTitle").textContent = country;

    countryScreen.style.display = "none";
    gameScreen.style.display = "block";

    createMap();

    log.textContent = "欢迎来到" + country + "！";
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
