let color = document.getElementById('color');
let eraser = document.getElementById('Eraser');
let GridInput = document.getElementById('Gridinput');
let check;
eraser.addEventListener("click", () => {
    if (eraser.value == "ON") {
        check = false;
        arrayOfColor = [];
        let box = document.querySelectorAll('.box');
        document.getElementById('StatusOfEraser').innerHTML = "Eraser Are on";
        for (let erase = 0; erase < box.length; erase++) {
            box[erase].addEventListener('mouseover', () => box[erase].style.background = "white");
        }
        eraser.value = "OFF";
    }
    else if (eraser.value == "OFF") {
        condition();
        document.getElementById('StatusOfEraser').innerHTML = "Eraser Are OFF";
        eraser.value = "ON";
    }
});

function Create() {
    let table = document.createElement('table');
    for (let row = 0; row < GridInput.value; row++) {
        const tr = table.insertRow(row);
        for (let col = 0; col < GridInput.value; col++) {
            const td = tr.insertCell(col);
            td.classList.add("box");
        }
    }
    document.getElementById("TableCreater").appendChild(table);
    GridInput.disabled = true;
    document.getElementById('EnterValue').style.display = "none";
    document.getElementById('Reset').style.display = "block";
    condition();
}
function condition() {
    check = true;
    let box = document.querySelectorAll('.box');
    eraser.disabled = false;
    if (!color == "") {
        document.getElementById('total').innerHTML = 'Total ' + box.length + ' box are Cereated';
        for (let stat = 0; stat < box.length; stat++) {
            box[stat].addEventListener('mouseover', () => { onover(box, stat, check) });
            // box[stat].addEventListener('mouseleave', () => { box[stat].style.background = "black" });
        }
    }
}
let arrayOfColor = [];
function onover(arr, num, check) {
    if (check) {
        if (arrayOfColor.length <= 9) {
            arr[num].style.background = color.value;
            arrayOfColor.push(num);
            console.log(arrayOfColor + " Length :" + arrayOfColor.length)
            if (arrayOfColor.length > 9) {
                let GoOutEle = arrayOfColor.shift();
                arr[GoOutEle].style.background = "black";
                arr[num].style.background = color.value;
            }
        }
    }
}
function Reset() {
    location.reload();
}