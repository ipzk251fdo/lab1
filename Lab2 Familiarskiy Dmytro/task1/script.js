document.body.style.fontFamily = "Arial";

function styleParagraph(id, color, bg, size, align) {
    let p = document.getElementById(id);
    p.style.color = color;
    p.style.backgroundColor = bg;
    p.style.fontSize = size;
    p.style.padding = "5px";
    p.style.textAlign = align;
}

styleParagraph("p1", "orange", "yellow", "16px", "center");
styleParagraph("p2", "blue", "lightblue", "14px", "right");
styleParagraph("p3", "red", "lightcoral", "12px", "left");

function generateTablePattern(tableId) {
    let table = document.getElementById(tableId);

    for (let i = 0; i < table.rows.length; i++) {
        for (let j = 0; j < table.rows[i].cells.length; j++) {
            if ((i + j) % 2 === 0) {
                table.rows[i].cells[j].classList.add("selected");
            }
        }
    }
}

generateTablePattern("myTable");
