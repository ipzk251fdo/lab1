document.body.style.fontFamily = "Arial";

let p1 = document.getElementById("p1");
p1.style.color = "orange";
p1.style.backgroundColor = "yellow";
p1.style.fontSize = "16px";
p1.style.padding = "5px";
p1.style.textAlign = "center";

let p2 = document.getElementById("p2");
p2.style.color = "blue";
p2.style.backgroundColor = "lightblue";
p2.style.fontSize = "14px";
p2.style.padding = "5px";
p2.style.textAlign = "right";

let p3 = document.getElementById("p3");
p3.style.color = "red";
p3.style.backgroundColor = "lightcoral";
p3.style.fontSize = "12px";
p3.style.padding = "5px";
p3.style.textAlign = "left";

let table = document.getElementById("myTable");

for (let i = 0; i < table.rows.length; i++) {
    for (let j = 0; j < table.rows[i].cells.length; j++) {
        if ((i + j) % 2 === 0) {
            table.rows[i].cells[j].classList.add("selected");
        }
    }
}