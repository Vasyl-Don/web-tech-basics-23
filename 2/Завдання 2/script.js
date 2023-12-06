document.addEventListener("DOMContentLoaded", function () {
    const table = document.createElement("table");
    const body = document.querySelector("body");
    body.appendChild(table);

    for (let i = 0; i < 6; i++) {
        const row = table.insertRow();
        for (let j = 0; j < 6; j++) {
            const cell = row.insertCell();
            cell.textContent = i * 6 + j + 1;
        }
    }

    const cells = document.querySelectorAll("td");
    const palette = document.querySelector(".palette");

    let selectedColor = "";

    function getRandomColor() {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function setColor(event) {
        const cell = event.target;
        if (event.type === "click") {
            cell.style.backgroundColor = selectedColor || "red";
        } else if (event.type === "dblclick") {
            cells.forEach((cell, index) => {
                if (index % 7 === 0) {
                    cell.style.backgroundColor = selectedColor || "red";
                }
            });
        } else if (event.type === "mouseover" && cell === cells[2]) {
            cell.style.backgroundColor = getRandomColor();
        }
    }

    cells[2].addEventListener("click", setColor);
    cells[2].addEventListener("dblclick", setColor);
    cells[2].addEventListener("mouseover", setColor);

    const colorBoxes = document.querySelectorAll(".color-box");
    colorBoxes.forEach((box) => {
        box.addEventListener("click", function () {
            selectedColor = box.style.backgroundColor;
            palette.style.display = "none";
        });
    });

    cells[2].addEventListener("click", function () {
        if (palette.style.display === "none") {
            palette.style.display = "block";
        } else {
            palette.style.display = "none";
        }
    });

    const colorInput = document.createElement("input");
    colorInput.type = "color";
    colorInput.addEventListener("input", function (event) {
        selectedColor = event.target.value;
    });

    body.insertBefore(colorInput, table);
});
