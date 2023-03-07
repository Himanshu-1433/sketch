let color = document.getElementById('color');
let eraser = document.getElementById('Eraser');
let GridInput = document.getElementById('Gridinput');
let tbody = document.getElementsByTagName('tbody');
let check = true;
tbody.innerHTML = "HTml";
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
        document.getElementById('StatusOfEraser').innerHTML = "Eraser Are OFF";
        eraser.value = "ON";
        check = true;
        condition();
    }
});
let tableBoundary = document.getElementById("TableCreater"); 
function Create() {
    let table = document.createElement('table');
    for (let row = 0; row < GridInput.value; row++) {
        const tr = table.insertRow(row);
        for (let col = 0; col < GridInput.value; col++) {
            const td = tr.insertCell(col);
            td.classList.add("box");
        }
    }
    tableBoundary.appendChild(table);
    GridInput.disabled = true;
    document.getElementById('EnterValue').style.display = "none";
    document.getElementById('Reset').style.display = "block";
    condition();
}
function condition() {
    check = true;
    eraser.disabled = false;
    if (!color == "") {
        let box = document.querySelectorAll('.box');
        document.getElementById('total').innerHTML = 'Total ' + box.length + ' box are Cereated';
        for (let stat = 0; stat < box.length; stat++) {
            box[stat].addEventListener('mouseover', () => { onover(box, stat, check) });
        }
    }
}
let arrayOfColor = []; // this array are  null array
tableBoundary.addEventListener("mouseleave" ,() => {
    arrayOfColor = [];
    console.log("out");
});


function onover(arr, num, check) {
    if (check) {
        if (arrayOfColor.length <= 10) {
            arr[num].style.background = color.value;
            arrayOfColor.push(num);
            console.log(arrayOfColor + " Length :" + arrayOfColor.length)
            if (arrayOfColor.length > 10) {
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