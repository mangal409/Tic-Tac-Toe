let element11 = document.getElementById("btn-11");
let element12 = document.getElementById("btn-12");
let element13 = document.getElementById("btn-13");
let element21 = document.getElementById("btn-21");
let element22 = document.getElementById("btn-22");
let element23 = document.getElementById("btn-23");
let element31 = document.getElementById("btn-31");
let element32 = document.getElementById("btn-32");
let element33 = document.getElementById("btn-33");
let message = document.getElementById("para");
// let message = "";
let flag = 1;
let player = 1;
let paraEl1 = document.getElementById("para1");

function reload() {
    location.reload();
}
function funConditionChecking() {
    if (element11.innerHTML != "" && element11.innerHTML === element12.innerHTML && element12.innerHTML === element13.innerHTML) {
        if (player === 1) {
            message.innerHTML = "Wohoo! player X is winner";
            paraEl1.style.display = "none";
        }
        else {
            message.innerHTML = "Wohoo! player O is winner";
            paraEl1.style.display = "none";
        } 
        element21.disabled = true;
        element22.disabled = true;
        element23.disabled = true;
        element31.disabled = true;
        element32.disabled = true;
        element33.disabled = true;      
    }
    else if (element21.innerHTML != "" && element21.innerHTML === element22.innerHTML && element22.innerHTML === element23.innerHTML) {
        if (player === 1) {
            message.innerHTML = "Wohoo! player X is winner";
            paraEl1.style.display = "none";
        }
        else {
            message.innerHTML = "Wohoo! player O is winner";
            paraEl1.style.display = "none";
        }
        element11.disabled = true;
        element12.disabled = true;
        element13.disabled = true;
        element31.disabled = true;
        element32.disabled = true;
        element33.disabled = true;
    }
    else if (element31.innerHTML != "" && element31.innerHTML === element32.innerHTML && element32.innerHTML === element33.innerHTML) {
        if (player === 1) {
            message.innerHTML = "Wohoo! player X is winner";
            paraEl1.style.display = "none";
        }
        else {
            message.innerHTML = "Wohoo! player O is winner";
            paraEl1.style.display = "none";
        }
        element11.disabled = true;
        element12.disabled = true;
        element13.disabled = true;
        element21.disabled = true;
        element22.disabled = true;
        element23.disabled = true;

    }
    else if (element11.innerHTML != "" && element11.innerHTML === element21.innerHTML && element21.innerHTML === element31.innerHTML) {
        if (player === 1) {
            message.innerHTML = "Wohoo! player X is winner";
            paraEl1.style.display = "none";
        }
        else {
            message.innerHTML = "Wohoo! player O is winner";
            paraEl1.style.display = "none";
        }
        element12.disabled = true;
        element22.disabled = true;
        element32.disabled = true;
        element13.disabled = true;
        element23.disabled = true;
        element33.disabled = true;
    }
    else if (element12.innerHTML != "" && element12.innerHTML === element22.innerHTML && element22.innerHTML === element32.innerHTML) {
        if (player === 1) {
            message.innerHTML = "Wohoo! player X is winner";
            paraEl1.style.display = "none";
        }
        else {
            message.innerHTML = "Wohoo! player O is winner";
            paraEl1.style.display = "none";
        }
        element11.disabled = true;
        element21.disabled = true;
        element31.disabled = true;
        element13.disabled = true;
        element23.disabled = true;
        element33.disabled = true;
    }
    else if (element13.innerHTML != "" && element13.innerHTML === element23.innerHTML && element23.innerHTML === element33.innerHTML) {
        if (player === 1) {
            message.innerHTML = "Wohoo! player X is winner";
            paraEl1.style.display = "none";
        }
        else {
            message.innerHTML = "Wohoo! player O is winner";
            paraEl1.style.display = "none";
        }
        element11.disabled = true;
        element21.disabled = true;
        element31.disabled = true;
        element12.disabled = true;
        element22.disabled = true;
        element32.disabled = true;
    }
    else if (element11.innerHTML != "" && element11.innerHTML === element22.innerHTML && element22.innerHTML === element33.innerHTML) {
        if (player === 1) {
            message.innerHTML = "Wohoo! player X is winner";
            paraEl1.style.display = "none";
        }
        else {
            message.innerHTML = "Wohoo! player O is winner";
            paraEl1.style.display = "none";
        }
        element12.disabled = true;
        element13.disabled = true;
        element21.disabled = true;
        element23.disabled = true;
        element31.disabled = true;
        element32.disabled = true;

    }
    else if (element13.innerHTML != "" && element13.innerHTML === element22.innerHTML && element22.innerHTML === element31.innerHTML) {
        if (player === 1) {
            message.innerHTML = "Wohoo! player X is winner";
            paraEl1.style.display = "none";
        }
        else {
            message.innerHTML = "Wohoo! player X is winner";
            paraEl1.style.display = "none";
        }
        element11.disabled = true;
        element12.disabled = true;
        element21.disabled = true;
        element23.disabled = true;
        element32.disabled = true;
        element33.disabled = true;
    }
    else if ((element11.innerHTML === "x" || element11.innerHTML === "o") && (element12.innerHTML === "x" || element12.innerHTML === "o") &&
        (element13.innerHTML === "x" || element13.innerHTML === "o") && (element21.innerHTML === "x" || element21.innerHTML === "o") &&
        (element22.innerHTML === "x" || element22.innerHTML === "o") && (element23.innerHTML === "x" || element23.innerHTML === "o") &&
        (element31.innerHTML === "x" || element31.innerHTML === "o") && (element32.innerHTML === "x" || element32.innerHTML === "o") &&
        (element33.innerHTML === "x" || element33.innerHTML === "o")) {
        message.innerHTML = "Match Tie!"
        paraEl1.style.display = "none";
    }
    else {
        if (player === 1) {
            paraEl1.innerHTML = "Player-2 Turn";
        }
        else {
            paraEl1.innerHTML = "Player-1 Turn";
        }
    }

}

function funOne() {
    if (flag == 1) {
        element11.innerHTML = "x";
        element11.style.fontSize = "100px";
        element11.disabled = true;
        flag = 0;
        player = 1;
        funConditionChecking();
    }
    else {
        element11.innerHTML = "o";
        element11.style.fontSize = "100px";
        element11.disabled = true;
        flag = 1;
        player = 0;
        funConditionChecking();
    }
}
function funTwo() {
    if (flag == 1) {
        element12.innerHTML = "x";
        element12.style.fontSize = "100px";
        element12.disabled = true;
        flag = 0;
        player = 1;
        funConditionChecking();
    }
    else {
        element12.innerHTML = "o";
        element12.disabled = true;
        element12.style.fontSize = "100px";
        flag = 1;
        player = 0;
        funConditionChecking();
    }
}
function funThree() {
    if (flag == 1) {
        element13.innerHTML = "x";
        element13.style.fontSize = "100px";
        element13.disabled = true;
        flag = 0;
        player = 1;
        funConditionChecking();
    }
    else {
        element13.innerHTML = "o";
        element13.style.fontSize = "100px";
        element13.disabled = true;
        flag = 1;
        player = 0;
        funConditionChecking();
    }
}
function funFour() {
    if (flag == 1) {
        element21.innerHTML = "x";
        element21.style.fontSize = "100px";
        element21.disabled = true;
        flag = 0;
        player = 1;
        funConditionChecking();
    }
    else {
        element21.innerHTML = "o";
        element21.style.fontSize = "100px";
        element21.disabled = true;
        flag = 1;
        player = 0;
        funConditionChecking();
    }
}
function funFive() {
    if (flag == 1) {
        element22.innerHTML = "x";
        element22.style.fontSize = "100px";
        element22.disabled = true;
        flag = 0;
        player = 1;
        funConditionChecking();
    }
    else {
        element22.innerHTML = "o";
        element22.style.fontSize = "100px";
        element22.disabled = true;
        flag = 1;
        player = 0;
        funConditionChecking();
    }
}
function funSix() {
    if (flag == 1) {
        element23.innerHTML = "x";
        element23.style.fontSize = "100px";
        element23.disabled = true;
        flag = 0;
        player = 1;
        funConditionChecking();
    }
    else {
        element23.innerHTML = "o";
        element23.style.fontSize = "100px";
        element23.disabled = true;
        flag = 1;
        player = 0;
        funConditionChecking();
    }
}
function funSeven() {
    if (flag == 1) {
        element31.innerHTML = "x";
        element31.style.fontSize = "100px";
        element31.disabled = true;
        flag = 0;
        player = 1;
        funConditionChecking();
    }
    else {
        element31.innerHTML = "o";
        element31.style.fontSize = "100px";
        element31.disabled = true;
        flag = 1;
        player = 0;
        funConditionChecking();
    }
}
function funEight() {
    if (flag == 1) {
        element32.innerHTML = "x";
        element32.style.fontSize = "100px";
        element32.disabled = true;
        flag = 0;
        player = 1;
    }
    else {
        element32.innerHTML = "o";
        element32.style.fontSize = "100px";
        element32.disabled = true;
        flag = 1;
        player = 0;
        funConditionChecking();
    }
}
function funNine() {
    if (flag == 1) {
        element33.innerHTML = "x";
        element33.style.fontSize = "100px";
        element33.disabled = true;
        flag = 0;
        player = 1;
        funConditionChecking();
    }
    else {
        element33.innerHTML = "o";
        element33.style.fontSize = "100px";
        element33.disabled = true;
        flag = 1;
        player = 0;
        funConditionChecking();
    }
}

