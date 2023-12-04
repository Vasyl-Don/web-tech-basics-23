document.addEventListener("DOMContentLoaded", function () {
    const table = document.createElement("table");
    const body = document.querySelector("body");
    body.appendChild(table);

    // Генерація таблиці 6 на 6
    for (let i = 0; i < 6; i++) {
        const row = table.insertRow();
        for (let j = 0; j < 6; j++) {
            const cell = row.insertCell();
            cell.textContent = i * 6 + j + 1; // Номер клітинки
        }
    }

    const cells = document.querySelectorAll("td");
    const palette = document.querySelector(".palette");

    let selectedColor = "";

    // Функція для генерації випадкового кольору
    function getRandomColor() {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // Функція для встановлення кольору на основі події
    function setColor(event) {
        const cell = event.target;
        if (event.type === "click") {
            cell.style.backgroundColor = "red";
        } else if (event.type === "dblclick") {
            // Зміна кольору діагоналі
            cells.forEach((cell, index) => {
                if (index % 7 === 0) {
                    cell.style.backgroundColor = "red";
                }
            });
        } else if (event.type === "mouseover" && cell === cells[2]) {
            // Зміна кольору при наведенні тільки на клітинку 3
            cell.style.backgroundColor = getRandomColor();
        }
    }

    cells[2].addEventListener("click", setColor);
    cells[2].addEventListener("dblclick", setColor);
    cells[2].addEventListener("mouseover", setColor);

    // Палітра кольорів
    const colorBoxes = document.querySelectorAll(".color-box");
    colorBoxes.forEach((box) => {
        box.addEventListener("click", function () {
            selectedColor = box.style.backgroundColor;
            palette.style.display = "none";
        });
    });

    // Показ/приховування палітри при кліці на клітинку 3
    cells[2].addEventListener("click", function () {
        if (palette.style.display === "none") {
            palette.style.display = "block";
        } else {
            palette.style.display = "none";
        }
    });
});
