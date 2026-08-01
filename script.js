const map = document.getElementById("map");
const log = document.getElementById("log");

let food = 100;
let wood = 80;
let morale = 100;
let turn = 1;

const foodText = document.getElementById("food");
const woodText = document.getElementById("wood");
const moraleText = document.getElementById("morale");
const turnText = document.getElementById("turn");

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

        let terrain =
            terrains[Math.floor(Math.random() * terrains.length)];

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
                    log.textContent = "🐺 这里是你的狼穴。";
                    break;
            }

        };

        map.appendChild(tile);

    }

    if (!wolfPlaced) {
        const tiles = document.querySelectorAll(".tile");
        for (const t of tiles) {
            if (t.textContent !== "🌊") {
                t.textContent = "🐺";
                break;
            }
        }
    }

}

createMap();

document.getElementById("endTurn").onclick = function () {

    turn++;

    food += 20;
    wood += 10;

    if (morale < 100) morale++;

    foodText.textContent = food;
    woodText.textContent = wood;
    moraleText.textContent = morale;
    turnText.textContent = turn;

    log.textContent =
        "📅 第 " + turn + " 回合开始，狼群完成了今天的活动。";

};
