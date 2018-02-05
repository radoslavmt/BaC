let p1n = document.getElementById("my1"),
    p1c = document.getElementById("num1"),
    p1t = document.getElementById("text1"),
    bt1 = document.getElementById("bt1"),
    p2n = document.getElementById("my2"),
    p2c = document.getElementById("num2"),
    p2t = document.getElementById("text2"),
    bt2 = document.getElementById("bt2"),
    msg = document.getElementById("msg"),
    start = document.getElementById("start");

function checkBullP1() {
    if (p1c.value === p2n.value) {
        msg.innerHTML = "Player 1 win".fontsize(20);
        p1t.innerHTML += p1c.value + " - 4 bulls ";
        p1t.scrollTop = p1t.scrollHeight;
    } else if (p1c.value[0] === p2n.value[0] && p1c.value[1] === p2n.value[1] && p1c.value[2] === p2n.value[2] ||
        p1c.value[1] === p2n.value[1] && p1c.value[2] === p2n.value[2] && p1c.value[3] === p2n.value[3] ||
        p1c.value[0] === p2n.value[0] && p1c.value[1] === p2n.value[1] && p1c.value[3] === p2n.value[3] ||
        p1c.value[0] === p2n.value[0] && p1c.value[2] === p2n.value[2] && p1c.value[3] === p2n.value[3]) {
            p1t.innerHTML += p1c.value + " - 3 bulls ";
            p1t.scrollTop = p1t.scrollHeight;
    } else if (p1c.value[0] === p2n.value[0] && p1c.value[1] === p2n.value[1] ||
        p1c.value[1] === p2n.value[1] && p1c.value[2] === p2n.value[2] ||
        p1c.value[2] === p2n.value[2] && p1c.value[3] === p2n.value[3] ||
        p1c.value[0] === p2n.value[0] && p1c.value[2] === p2n.value[2] ||
        p1c.value[0] === p2n.value[0] && p1c.value[3] === p2n.value[3] || 
        p1c.value[1] === p2n.value[1] && p1c.value[3] === p2n.value[3]) {
            p1t.innerHTML += p1c.value + " - 2 bulls ";
            p1t.scrollTop = p1t.scrollHeight;
    } else if (p1c.value[0] === p2n.value[0] ||
        p1c.value[1] === p2n.value[1] ||
        p1c.value[2] === p2n.value[2] ||
        p1c.value[3] === p2n.value[3]) {
            p1t.innerHTML += p1c.value + " - 1 bull ";
            p1t.scrollTop = p1t.scrollHeight;
    } else {
        p1t.innerHTML += p1c.value + " - 0 bulls ";
        p1t.scrollTop = p1t.scrollHeight;
    }
}

function checkCowP1() {
    if (    //4 cows //
        p1c.value[0] === p2n.value[1] && p1c.value[1] === p2n.value[0] && p1c.value[2] === p2n.value[3] && p1c.value[3] === p2n.value[2] ||
        p1c.value[0] === p2n.value[1] && p1c.value[1] === p2n.value[2] && p1c.value[2] === p2n.value[3] && p1c.value[3] === p2n.value[0] ||
        p1c.value[0] === p2n.value[1] && p1c.value[1] === p2n.value[3] && p1c.value[2] === p2n.value[0] && p1c.value[3] === p2n.value[2] ||
        p1c.value[0] === p2n.value[2] && p1c.value[1] === p2n.value[3] && p1c.value[2] === p2n.value[1] && p1c.value[3] === p2n.value[0] ||
        p1c.value[0] === p2n.value[3] && p1c.value[1] === p2n.value[2] && p1c.value[2] === p2n.value[1] && p1c.value[3] === p2n.value[0] ||
        p1c.value[0] === p2n.value[3] && p1c.value[1] === p2n.value[0] && p1c.value[2] === p2n.value[1] && p1c.value[3] === p2n.value[2] ||
        p1c.value[0] === p2n.value[2] && p1c.value[1] === p2n.value[0] && p1c.value[2] === p2n.value[3] && p1c.value[3] === p2n.value[1] ||
        p1c.value[0] === p2n.value[2] && p1c.value[1] === p2n.value[3] && p1c.value[2] === p2n.value[0] && p1c.value[3] === p2n.value[1] ||
        p1c.value[0] === p2n.value[3] && p1c.value[1] === p2n.value[2] && p1c.value[2] === p2n.value[0] && p1c.value[3] === p2n.value[1]) {
            p1t.innerHTML += "4 cows" + "\n" + "\n";
            p1t.scrollTop = p1t.scrollHeight;
    } else if (    //3 cows with index 1, 2 and 3 //
        p1c.value[0] === p2n.value[1] && p1c.value[1] === p2n.value[0] && p1c.value[3] === p2n.value[2] ||
        p1c.value[0] === p2n.value[1] && p1c.value[1] === p2n.value[2] && p1c.value[3] === p2n.value[0] ||
        p1c.value[0] === p2n.value[1] && p1c.value[1] === p2n.value[2] && p1c.value[2] === p2n.value[0] ||
        p1c.value[0] === p2n.value[1] && p1c.value[2] === p2n.value[0] && p1c.value[3] === p2n.value[2] ||
        p1c.value[1] === p2n.value[2] && p1c.value[2] === p2n.value[1] && p1c.value[3] === p2n.value[0] ||
        p1c.value[0] === p2n.value[2] && p1c.value[2] === p2n.value[1] && p1c.value[3] === p2n.value[0] ||
        p1c.value[1] === p2n.value[0] && p1c.value[2] === p2n.value[1] && p1c.value[3] === p2n.value[2] ||
        p1c.value[0] === p2n.value[2] && p1c.value[1] === p2n.value[0] && p1c.value[2] === p2n.value[1] ||
        p1c.value[0] === p2n.value[2] && p1c.value[1] === p2n.value[0] && p1c.value[3] === p2n.value[1] ||
        p1c.value[0] === p2n.value[2] && p1c.value[2] === p2n.value[0] && p1c.value[3] === p2n.value[1] ||
        p1c.value[1] === p2n.value[2] && p1c.value[2] === p2n.value[0] && p1c.value[3] === p2n.value[1] ||
            //3 cows with index 2, 3 and 4 //
        p1c.value[0] === p2n.value[1] && p1c.value[2] === p2n.value[3] && p1c.value[3] === p2n.value[2] ||
        p1c.value[0] === p2n.value[1] && p1c.value[1] === p2n.value[2] && p1c.value[2] === p2n.value[3] ||
        p1c.value[0] === p2n.value[1] && p1c.value[1] === p2n.value[3] && p1c.value[3] === p2n.value[2] ||
        p1c.value[0] === p2n.value[2] && p1c.value[1] === p2n.value[3] && p1c.value[2] === p2n.value[1] ||
        p1c.value[0] === p2n.value[3] && p1c.value[1] === p2n.value[2] && p1c.value[2] === p2n.value[1] ||
        p1c.value[1] === p2n.value[3] && p1c.value[2] === p2n.value[1] && p1c.value[3] === p2n.value[2] ||
        p1c.value[0] === p2n.value[3] && p1c.value[2] === p2n.value[1] && p1c.value[3] === p2n.value[2] ||
        p1c.value[0] === p2n.value[2] && p1c.value[1] === p2n.value[3] && p1c.value[3] === p2n.value[1] ||
        p1c.value[0] === p2n.value[3] && p1c.value[1] === p2n.value[2] && p1c.value[3] === p2n.value[1] ||
        p1c.value[1] === p2n.value[2] && p1c.value[2] === p2n.value[3] && p1c.value[3] === p2n.value[1] ||
        p1c.value[0] === p2n.value[2] && p1c.value[2] === p2n.value[3] && p1c.value[3] === p2n.value[1] ||
            //3 cows with index 1, 3 and 4 //
        p1c.value[0] === p2n.value[2] && p1c.value[1] === p2n.value[0] && p1c.value[2] === p2n.value[3] ||
        p1c.value[0] === p2n.value[2] && p1c.value[1] === p2n.value[3] && p1c.value[2] === p2n.value[0] ||
        p1c.value[0] === p2n.value[2] && p1c.value[1] === p2n.value[3] && p1c.value[3] === p2n.value[0] ||
        p1c.value[0] === p2n.value[2] && p1c.value[2] === p2n.value[3] && p1c.value[3] === p2n.value[0] ||
        p1c.value[1] === p2n.value[2] && p1c.value[2] === p2n.value[3] && p1c.value[3] === p2n.value[0] ||
        p1c.value[0] === p2n.value[3] && p1c.value[1] === p2n.value[2] && p1c.value[3] === p2n.value[0] ||
        p1c.value[0] === p2n.value[3] && p1c.value[1] === p2n.value[2] && p1c.value[2] === p2n.value[0] ||
        p1c.value[0] === p2n.value[3] && p1c.value[1] === p2n.value[0] && p1c.value[3] === p2n.value[2] ||
        p1c.value[1] === p2n.value[0] && p1c.value[2] === p2n.value[3] && p1c.value[3] === p2n.value[2] ||
        p1c.value[0] === p2n.value[3] && p1c.value[2] === p2n.value[0] && p1c.value[3] === p2n.value[2] ||
        p1c.value[1] === p2n.value[3] && p1c.value[2] === p2n.value[0] && p1c.value[3] === p2n.value[2] ||
        //3 cows with index 1, 2 and 4 //
        p1c.value[0] === p2n.value[1] && p1c.value[2] === p2n.value[3] && p1c.value[3] === p2n.value[0] ||
        p1c.value[0] === p2n.value[1] && p1c.value[1] === p2n.value[3] && p1c.value[2] === p2n.value[3] ||
        p1c.value[0] === p2n.value[1] && p1c.value[1] === p2n.value[3] && p1c.value[2] === p2n.value[0] ||
        p1c.value[0] === p2n.value[1] && p1c.value[1] === p2n.value[3] && p1c.value[3] === p2n.value[0] ||
        p1c.value[1] === p2n.value[3] && p1c.value[2] === p2n.value[1] && p1c.value[3] === p2n.value[0] ||
        p1c.value[0] === p2n.value[3] && p1c.value[2] === p2n.value[1] && p1c.value[3] === p2n.value[0] ||
        p1c.value[0] === p2n.value[3] && p1c.value[1] === p2n.value[0] && p1c.value[2] === p2n.value[1] ||
        p1c.value[1] === p2n.value[3] && p1c.value[2] === p2n.value[0] && p1c.value[3] === p2n.value[1] ||
        p1c.value[0] === p2n.value[3] && p1c.value[2] === p2n.value[0] && p1c.value[3] === p2n.value[1] ||
        p1c.value[0] === p2n.value[3] && p1c.value[1] === p2n.value[0] && p1c.value[3] === p2n.value[1] ||
        p1c.value[1] === p2n.value[0] && p1c.value[2] === p2n.value[3] && p1c.value[3] === p2n.value[1]) {
            p1t.innerHTML += "3 cows" + "\n" + "\n";
            p1t.scrollTop = p1t.scrollHeight;
    } else if (    //2 cows with index 1 and 2 //
        p1c.value[0] === p2n.value[1] && p1c.value[1] === p2n.value[0] ||
        p1c.value[0] === p2n.value[1] && p1c.value[2] === p2n.value[0] ||
        p1c.value[0] === p2n.value[1] && p1c.value[3] === p2n.value[0] ||
        p1c.value[1] === p2n.value[0] && p1c.value[2] === p2n.value[1] ||
        p1c.value[2] === p2n.value[1] && p1c.value[3] === p2n.value[0] ||
        p1c.value[1] === p2n.value[0] && p1c.value[3] === p2n.value[1] ||
        p1c.value[2] === p2n.value[0] && p1c.value[3] === p2n.value[1] ||
            //2 cows with index 3 and 4 //
        p1c.value[2] === p2n.value[3] && p1c.value[3] === p2n.value[2] ||
        p1c.value[1] === p2n.value[3] && p1c.value[3] === p2n.value[2] ||
        p1c.value[0] === p2n.value[3] && p1c.value[3] === p2n.value[2] ||
        p1c.value[1] === p2n.value[2] && p1c.value[2] === p2n.value[3] ||
        p1c.value[0] === p2n.value[3] && p1c.value[1] === p2n.value[2] ||
        p1c.value[0] === p2n.value[2] && p1c.value[2] === p2n.value[3] ||
        p1c.value[0] === p2n.value[2] && p1c.value[1] === p2n.value[3] || 
            //2 cows with index 2 and 3 //
        p1c.value[0] === p2n.value[1] && p1c.value[1] === p2n.value[2] ||
        p1c.value[0] === p2n.value[1] && p1c.value[3] === p2n.value[2] ||
        p1c.value[2] === p2n.value[1] && p1c.value[3] === p2n.value[2] ||
        p1c.value[0] === p2n.value[2] && p1c.value[2] === p2n.value[1] ||
        p1c.value[1] === p2n.value[2] && p1c.value[2] === p2n.value[1] ||
        p1c.value[0] === p2n.value[2] && p1c.value[3] === p2n.value[1] ||
        p1c.value[1] === p2n.value[2] && p1c.value[3] === p2n.value[1] ||
            //2 cows with index 1 and 3 //
        p1c.value[0] === p2n.value[2] && p1c.value[1] === p2n.value[0] ||
        p1c.value[0] === p2n.value[2] && p1c.value[2] === p2n.value[0] ||
        p1c.value[0] === p2n.value[2] && p1c.value[3] === p2n.value[0] ||
        p1c.value[1] === p2n.value[0] && p1c.value[3] === p2n.value[2] ||
        p1c.value[2] === p2n.value[0] && p1c.value[3] === p2n.value[2] ||
        p1c.value[1] === p2n.value[2] && p1c.value[2] === p2n.value[0] ||
        p1c.value[1] === p2n.value[2] && p1c.value[3] === p2n.value[0] ||
            //2 cows with index 2 and 4 //
        p1c.value[0] === p2n.value[1] && p1c.value[1] === p2n.value[3] ||
        p1c.value[0] === p2n.value[1] && p1c.value[2] === p2n.value[3] ||
        p1c.value[0] === p2n.value[3] && p1c.value[2] === p2n.value[1] ||
        p1c.value[1] === p2n.value[3] && p1c.value[2] === p2n.value[1] ||
        p1c.value[0] === p2n.value[3] && p1c.value[3] === p2n.value[1] ||
        p1c.value[1] === p2n.value[3] && p1c.value[3] === p2n.value[1] ||
        p1c.value[2] === p2n.value[3] && p1c.value[3] === p2n.value[1] ||
            //2 cows with index 1 and 4 //
        p1c.value[1] === p2n.value[0] && p1c.value[2] === p2n.value[3] ||
        p1c.value[0] === p2n.value[3] && p1c.value[1] === p2n.value[0] ||
        p1c.value[1] === p2n.value[3] && p1c.value[2] === p2n.value[0] ||
        p1c.value[0] === p2n.value[3] && p1c.value[2] === p2n.value[0] ||
        p1c.value[2] === p2n.value[3] && p1c.value[3] === p2n.value[0] ||
        p1c.value[1] === p2n.value[3] && p1c.value[3] === p2n.value[0] ||
        p1c.value[0] === p2n.value[3] && p1c.value[3] === p2n.value[0]) {
            p1t.innerHTML += "2 cows" + "\n" + "\n";
            p1t.scrollTop = p1t.scrollHeight;
    } else if (p1c.value[0] === p2n.value[1] || p1c.value[0] === p2n.value[2] || p1c.value[0] === p2n.value[3] ||
        p1c.value[1] === p2n.value[0] || p1c.value[1] === p2n.value[2] || p1c.value[1] === p2n.value[3] ||
        p1c.value[2] === p2n.value[0] || p1c.value[2] === p2n.value[1] || p1c.value[2] === p2n.value[3] ||
        p1c.value[3] === p2n.value[0] || p1c.value[3] === p2n.value[1] || p1c.value[3] === p2n.value[2]) {
            p1t.innerHTML += "1 cow" + "\n" + "\n";
            p1t.scrollTop = p1t.scrollHeight;
    } else {
        p1t.innerHTML += "0 cows" + "\n" + "\n";
        p1t.scrollTop = p1t.scrollHeight; 
    }
}

function checkBullP2() {
    if (p2c.value == p1n.value) {
        msg.innerHTML = "Player 2 win".fontsize(20);
        p2t.innerHTML += p2c.value + " - 4 bulls ";
        p2t.scrollTop = p2t.scrollHeight;
    } else if (p2c.value[0] === p1n.value[0] && p2c.value[1] === p1n.value[1] && p2c.value[2] === p1n.value[2] ||
        p2c.value[1] === p1n.value[1] && p2c.value[2] === p1n.value[2] && p2c.value[3] === p1n.value[3] ||
        p2c.value[0] === p1n.value[0] && p2c.value[1] === p1n.value[1] && p2c.value[3] === p1n.value[3] ||
        p2c.value[0] === p1n.value[0] && p2c.value[2] === p1n.value[2] && p2c.value[3] === p1n.value[3]) {
            p2t.innerHTML += p2c.value + " - 3 bulls ";
            p2t.scrollTop = p2t.scrollHeight;
    } else if (p2c.value[0] === p1n.value[0] && p2c.value[1] === p1n.value[1] ||
        p2c.value[1] === p1n.value[1] && p2c.value[2] === p1n.value[2] ||
        p2c.value[2] === p1n.value[2] && p2c.value[3] === p1n.value[3] ||
        p2c.value[0] === p1n.value[0] && p2c.value[2] === p1n.value[2] ||
        p2c.value[0] === p1n.value[0] && p2c.value[3] === p1n.value[3] || 
        p2c.value[1] === p1n.value[1] && p2c.value[3] === p1n.value[3]) {
            p2t.innerHTML += p2c.value + " - 2 bulls ";
            p2t.scrollTop = p2t.scrollHeight;
    } else if (p2c.value[0] === p1n.value[0] ||
        p2c.value[1] === p1n.value[1] ||
        p2c.value[2] === p1n.value[2] ||
        p2c.value[3] === p1n.value[3]) {
            p2t.innerHTML += p2c.value + " - 1 bull ";
            p2t.scrollTop = p2t.scrollHeight;
    } else {
        p2t.innerHTML += p2c.value + " - 0 bulls ";
        p2t.scrollTop = p2t.scrollHeight;
    }
}

function checkCowP2() {
    if (    //4 cows //
        p2c.value[0] === p1n.value[1] && p2c.value[1] === p1n.value[0] && p2c.value[2] === p1n.value[3] && p2c.value[3] === p1n.value[2] ||
        p2c.value[0] === p1n.value[1] && p2c.value[1] === p1n.value[2] && p2c.value[2] === p1n.value[3] && p2c.value[3] === p1n.value[0] ||
        p2c.value[0] === p1n.value[1] && p2c.value[1] === p1n.value[3] && p2c.value[2] === p1n.value[0] && p2c.value[3] === p1n.value[2] ||
        p2c.value[0] === p1n.value[2] && p2c.value[1] === p1n.value[3] && p2c.value[2] === p1n.value[1] && p2c.value[3] === p1n.value[0] ||
        p2c.value[0] === p1n.value[3] && p2c.value[1] === p1n.value[2] && p2c.value[2] === p1n.value[1] && p2c.value[3] === p1n.value[0] ||
        p2c.value[0] === p1n.value[3] && p2c.value[1] === p1n.value[0] && p2c.value[2] === p1n.value[1] && p2c.value[3] === p1n.value[2] ||
        p2c.value[0] === p1n.value[2] && p2c.value[1] === p1n.value[0] && p2c.value[2] === p1n.value[3] && p2c.value[3] === p1n.value[1] ||
        p2c.value[0] === p1n.value[2] && p2c.value[1] === p1n.value[3] && p2c.value[2] === p1n.value[0] && p2c.value[3] === p1n.value[1] ||
        p2c.value[0] === p1n.value[3] && p2c.value[1] === p1n.value[2] && p2c.value[2] === p1n.value[0] && p2c.value[3] === p1n.value[1]) {
            p2t.innerHTML += "4 cows" + "\n" + "\n";
            p2t.scrollTop = p2t.scrollHeight;
    } else if (    //3 cows with index 1, 2 and 3 //
        p2c.value[0] === p1n.value[1] && p2c.value[1] === p1n.value[0] && p2c.value[3] === p1n.value[2] ||
        p2c.value[0] === p1n.value[1] && p2c.value[1] === p1n.value[2] && p2c.value[3] === p1n.value[0] ||
        p2c.value[0] === p1n.value[1] && p2c.value[1] === p1n.value[2] && p2c.value[2] === p1n.value[0] ||
        p2c.value[0] === p1n.value[1] && p2c.value[2] === p1n.value[0] && p2c.value[3] === p1n.value[2] ||
        p2c.value[1] === p1n.value[2] && p2c.value[2] === p1n.value[1] && p2c.value[3] === p1n.value[0] ||
        p2c.value[0] === p1n.value[2] && p2c.value[2] === p1n.value[1] && p2c.value[3] === p1n.value[0] ||
        p2c.value[1] === p1n.value[0] && p2c.value[2] === p1n.value[1] && p2c.value[3] === p1n.value[2] ||
        p2c.value[0] === p1n.value[2] && p2c.value[1] === p1n.value[0] && p2c.value[2] === p1n.value[1] ||
        p2c.value[0] === p1n.value[2] && p2c.value[1] === p1n.value[0] && p2c.value[3] === p1n.value[1] ||
        p2c.value[0] === p1n.value[2] && p2c.value[2] === p1n.value[0] && p2c.value[3] === p1n.value[1] ||
        p2c.value[1] === p1n.value[2] && p2c.value[2] === p1n.value[0] && p2c.value[3] === p1n.value[1] ||
            //3 cows with index 2, 3 and 4 //
        p2c.value[0] === p1n.value[1] && p2c.value[2] === p1n.value[3] && p2c.value[3] === p1n.value[2] ||
        p2c.value[0] === p1n.value[1] && p2c.value[1] === p1n.value[2] && p2c.value[2] === p1n.value[3] ||
        p2c.value[0] === p1n.value[1] && p2c.value[1] === p1n.value[3] && p2c.value[3] === p1n.value[2] ||
        p2c.value[0] === p1n.value[2] && p2c.value[1] === p1n.value[3] && p2c.value[2] === p1n.value[1] ||
        p2c.value[0] === p1n.value[3] && p2c.value[1] === p1n.value[2] && p2c.value[2] === p1n.value[1] ||
        p2c.value[1] === p1n.value[3] && p2c.value[2] === p1n.value[1] && p2c.value[3] === p1n.value[2] ||
        p2c.value[0] === p1n.value[3] && p2c.value[2] === p1n.value[1] && p2c.value[3] === p1n.value[2] ||
        p2c.value[0] === p1n.value[2] && p2c.value[1] === p1n.value[3] && p2c.value[3] === p1n.value[1] ||
        p2c.value[0] === p1n.value[3] && p2c.value[1] === p1n.value[2] && p2c.value[3] === p1n.value[1] ||
        p2c.value[1] === p1n.value[2] && p2c.value[2] === p1n.value[3] && p2c.value[3] === p1n.value[1] ||
        p2c.value[0] === p1n.value[2] && p2c.value[2] === p1n.value[3] && p2c.value[3] === p1n.value[1] ||
            //3 cows with index 1, 3 and 4 //
        p2c.value[0] === p1n.value[2] && p2c.value[1] === p1n.value[0] && p2c.value[2] === p1n.value[3] ||
        p2c.value[0] === p1n.value[2] && p2c.value[1] === p1n.value[3] && p2c.value[2] === p1n.value[0] ||
        p2c.value[0] === p1n.value[2] && p2c.value[1] === p1n.value[3] && p2c.value[3] === p1n.value[0] ||
        p2c.value[0] === p1n.value[2] && p2c.value[2] === p1n.value[3] && p2c.value[3] === p1n.value[0] ||
        p2c.value[1] === p1n.value[2] && p2c.value[2] === p1n.value[3] && p2c.value[3] === p1n.value[0] ||
        p2c.value[0] === p1n.value[3] && p2c.value[1] === p1n.value[2] && p2c.value[3] === p1n.value[0] ||
        p2c.value[0] === p1n.value[3] && p2c.value[1] === p1n.value[2] && p2c.value[2] === p1n.value[0] ||
        p2c.value[0] === p1n.value[3] && p2c.value[1] === p1n.value[0] && p2c.value[3] === p1n.value[2] ||
        p2c.value[1] === p1n.value[0] && p2c.value[2] === p1n.value[3] && p2c.value[3] === p1n.value[2] ||
        p2c.value[0] === p1n.value[3] && p2c.value[2] === p1n.value[0] && p2c.value[3] === p1n.value[2] ||
        p2c.value[1] === p1n.value[3] && p2c.value[2] === p1n.value[0] && p2c.value[3] === p1n.value[2] ||
        //3 cows with index 1, 2 and 4 //
        p2c.value[0] === p1n.value[1] && p2c.value[2] === p1n.value[3] && p2c.value[3] === p1n.value[0] ||
        p2c.value[0] === p1n.value[1] && p2c.value[1] === p1n.value[3] && p2c.value[2] === p1n.value[3] ||
        p2c.value[0] === p1n.value[1] && p2c.value[1] === p1n.value[3] && p2c.value[2] === p1n.value[0] ||
        p2c.value[0] === p1n.value[1] && p2c.value[1] === p1n.value[3] && p2c.value[3] === p1n.value[0] ||
        p2c.value[1] === p1n.value[3] && p2c.value[2] === p1n.value[1] && p2c.value[3] === p1n.value[0] ||
        p2c.value[0] === p1n.value[3] && p2c.value[2] === p1n.value[1] && p2c.value[3] === p1n.value[0] ||
        p2c.value[0] === p1n.value[3] && p2c.value[1] === p1n.value[0] && p2c.value[2] === p1n.value[1] ||
        p2c.value[1] === p1n.value[3] && p2c.value[2] === p1n.value[0] && p2c.value[3] === p1n.value[1] ||
        p2c.value[0] === p1n.value[3] && p2c.value[2] === p1n.value[0] && p2c.value[3] === p1n.value[1] ||
        p2c.value[0] === p1n.value[3] && p2c.value[1] === p1n.value[0] && p2c.value[3] === p1n.value[1] ||
        p2c.value[1] === p1n.value[0] && p2c.value[2] === p1n.value[3] && p2c.value[3] === p1n.value[1]) {
            p2t.innerHTML += "3 cows" + "\n" + "\n";
            p2t.scrollTop = p2t.scrollHeight;
    } else if (    //2 cows with index 1 and 2 //
        p2c.value[0] === p1n.value[1] && p2c.value[1] === p1n.value[0] ||
        p2c.value[0] === p1n.value[1] && p2c.value[2] === p1n.value[0] ||
        p2c.value[0] === p1n.value[1] && p2c.value[3] === p1n.value[0] ||
        p2c.value[1] === p1n.value[0] && p2c.value[2] === p1n.value[1] ||
        p2c.value[2] === p1n.value[1] && p2c.value[3] === p1n.value[0] ||
        p2c.value[1] === p1n.value[0] && p2c.value[3] === p1n.value[1] ||
        p2c.value[2] === p1n.value[0] && p2c.value[3] === p1n.value[1] ||
            //2 cows with index 3 and 4 //
        p2c.value[2] === p1n.value[3] && p2c.value[3] === p1n.value[2] ||
        p2c.value[1] === p1n.value[3] && p2c.value[3] === p1n.value[2] ||
        p2c.value[0] === p1n.value[3] && p2c.value[3] === p1n.value[2] ||
        p2c.value[1] === p1n.value[2] && p2c.value[2] === p1n.value[3] ||
        p2c.value[0] === p1n.value[3] && p2c.value[1] === p1n.value[2] ||
        p2c.value[0] === p1n.value[2] && p2c.value[2] === p1n.value[3] ||
        p2c.value[0] === p1n.value[2] && p2c.value[1] === p1n.value[3] || 
            //2 cows with index 2 and 3 //
        p2c.value[0] === p1n.value[1] && p2c.value[1] === p1n.value[2] ||
        p2c.value[0] === p1n.value[1] && p2c.value[3] === p1n.value[2] ||
        p2c.value[2] === p1n.value[1] && p2c.value[3] === p1n.value[2] ||
        p2c.value[0] === p1n.value[2] && p2c.value[2] === p1n.value[1] ||
        p2c.value[1] === p1n.value[2] && p2c.value[2] === p1n.value[1] ||
        p2c.value[0] === p1n.value[2] && p2c.value[3] === p1n.value[1] ||
        p2c.value[1] === p1n.value[2] && p2c.value[3] === p1n.value[1] ||
            //2 cows with index 1 and 3 //
        p2c.value[0] === p1n.value[2] && p2c.value[1] === p1n.value[0] ||
        p2c.value[0] === p1n.value[2] && p2c.value[2] === p1n.value[0] ||
        p2c.value[0] === p1n.value[2] && p2c.value[3] === p1n.value[0] ||
        p2c.value[1] === p1n.value[0] && p2c.value[3] === p1n.value[2] ||
        p2c.value[2] === p1n.value[0] && p2c.value[3] === p1n.value[2] ||
        p2c.value[1] === p1n.value[2] && p2c.value[2] === p1n.value[0] ||
        p2c.value[1] === p1n.value[2] && p2c.value[3] === p1n.value[0] ||
            //2 cows with index 2 and 4 //
        p2c.value[0] === p1n.value[1] && p2c.value[1] === p1n.value[3] ||
        p2c.value[0] === p1n.value[1] && p2c.value[2] === p1n.value[3] ||
        p2c.value[0] === p1n.value[3] && p2c.value[2] === p1n.value[1] ||
        p2c.value[1] === p1n.value[3] && p2c.value[2] === p1n.value[1] ||
        p2c.value[0] === p1n.value[3] && p2c.value[3] === p1n.value[1] ||
        p2c.value[1] === p1n.value[3] && p2c.value[3] === p1n.value[1] ||
        p2c.value[2] === p1n.value[3] && p2c.value[3] === p1n.value[1] ||
            //2 cows with index 1 and 4 //
        p2c.value[1] === p1n.value[0] && p2c.value[2] === p1n.value[3] ||
        p2c.value[0] === p1n.value[3] && p2c.value[1] === p1n.value[0] ||
        p2c.value[1] === p1n.value[3] && p2c.value[2] === p1n.value[0] ||
        p2c.value[0] === p1n.value[3] && p2c.value[2] === p1n.value[0] ||
        p2c.value[2] === p1n.value[3] && p2c.value[3] === p1n.value[0] ||
        p2c.value[1] === p1n.value[3] && p2c.value[3] === p1n.value[0] ||
        p2c.value[0] === p1n.value[3] && p2c.value[3] === p1n.value[0]) {
            p2t.innerHTML += "2 cows" + "\n" + "\n";
            p2t.scrollTop = p2t.scrollHeight;
    } else if (p2c.value[0] === p1n.value[1] || p2c.value[0] === p1n.value[2] || p2c.value[0] === p1n.value[3] ||
        p2c.value[1] === p1n.value[0] || p2c.value[1] === p1n.value[2] || p2c.value[1] === p1n.value[3] ||
        p2c.value[2] === p1n.value[0] || p2c.value[2] === p1n.value[1] || p2c.value[2] === p1n.value[3] ||
        p2c.value[3] === p1n.value[0] || p2c.value[3] === p1n.value[1] || p2c.value[3] === p1n.value[2]) {
            p2t.innerHTML += "1 cow" + "\n" + "\n";
            p2t.scrollTop = p2t.scrollHeight;
    } else {
        p2t.innerHTML += "0 cows" + "\n" + "\n";
        p2t.scrollTop = p2t.scrollHeight; 
    }
}


bt1.addEventListener('click', function() {
    msg.innerHTML = "Its Player 2 turn".fontsize(20);
    checkBullP1();
    checkCowP1();
}, false);

bt2.addEventListener('click', function() {
    msg.innerHTML = "Its Player 1 turn".fontsize(20);
    checkBullP2();
    checkCowP2();
}, false);

start.addEventListener('click', function() {
    p1n.value = "";
    p1c.value = "";
    p1t.innerHTML = "";
    p2n.value = "";
    p2c.value = "";
    p2t.innerHTML = "";
    msg.innerHTML = "Type your numbers into the first field".fontsize(20);
}, false);
