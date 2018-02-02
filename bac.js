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

bt1.addEventListener('click', function() {
    if (p1c.value === p2n.value) {
        msg.innerHTML = "Player 1 win".fontsize(20);
        p1t.innerHTML = (p1c.value + " - 4 bulls !");
    } else if (p1c.value[0] === p2n.value[0] && p1c.value[1] === p2n.value[1] && p1c.value[2] === p2n.value[2] ||
        p1c.value[1] === p2n.value[1] && p1c.value[2] === p2n.value[2] && p1c.value[3] === p2n.value[3] ||
        p1c.value[0] === p2n.value[0] && p1c.value[1] === p2n.value[1] && p1c.value[3] === p2n.value[3] ||
        p1c.value[0] === p2n.value[0] && p1c.value[2] === p2n.value[2] && p1c.value[3] === p2n.value[3]) {
            msg.innerHTML = "3 bulls !".fontsize(20);
            p1t.innerHTML = p1c.value + " - you have 3 bulls";
    } else if (p1c.value[0] === p2n.value[0] && p1c.value[1] === p2n.value[1] ||
        p1c.value[1] === p2n.value[1] && p1c.value[2] === p2n.value[2] ||
        p1c.value[2] === p2n.value[2] && p1c.value[3] === p2n.value[3] ||
        p1c.value[0] === p2n.value[0] && p1c.value[2] === p2n.value[2] ||
        p1c.value[0] === p2n.value[0] && p1c.value[3] === p2n.value[3] || 
        p1c.value[1] === p2n.value[1] && p1c.value[3] === p2n.value[3]) {
            msg.innerHTML = "2 bulls !".fontsize(20);
            p1t.innerHTML = p1c.value + " - you have 2 bulls";
    } else if (p1c.value[0] === p2n.value[0] ||
        p1c.value[1] === p2n.value[1] ||
        p1c.value[2] === p2n.value[2] ||
        p1c.value[3] === p2n.value[3]) {
            msg.innerHTML = "1 bull !".fontsize(20);
            p1t.innerHTML = p1c.value + " - you have: 1 bull";
    } else {
        msg.innerHTML = "you have nothing :(".fontsize(20);
        p1t.innerHTML = p1c.value + " - you have nothing";
    }
}, false);

bt2.addEventListener('click', function() {
    if (p2c.value == p1n.value) {
        msg.innerHTML = "Player 2 win".fontsize(20);
        p2t.innerHTML = (p2c.value + " - 4 bulls")
    } else if (p2c.value[0] === p1n.value[0] && p2c.value[1] === p1n.value[1] && p2c.value[2] === p1n.value[2] ||
        p2c.value[1] === p1n.value[1] && p2c.value[2] === p1n.value[2] && p2c.value[3] === p1n.value[3] ||
        p2c.value[0] === p1n.value[0] && p2c.value[1] === p1n.value[1] && p2c.value[3] === p1n.value[3] ||
        p2c.value[0] === p1n.value[0] && p2c.value[2] === p1n.value[2] && p2c.value[3] === p1n.value[3]) {
            msg.innerHTML = "3 bulls !".fontsize(20);
            p2t.innerHTML = p1c.value + " - you have 3 bulls";
    } else if (p2c.value[0] === p1n.value[0] && p2c.value[1] === p1n.value[1] ||
        p2c.value[1] === p1n.value[1] && p2c.value[2] === p1n.value[2] ||
        p2c.value[2] === p1n.value[2] && p2c.value[3] === p1n.value[3] ||
        p2c.value[0] === p1n.value[0] && p2c.value[2] === p1n.value[2] ||
        p2c.value[0] === p1n.value[0] && p2c.value[3] === p1n.value[3] || 
        p2c.value[1] === p1n.value[1] && p2c.value[3] === p1n.value[3]) {
            msg.innerHTML = "2 bulls !".fontsize(20);
            p2t.innerHTML = p2c.value + " - you have 2 bulls";
    } else if (p2c.value[0] === p1n.value[0] ||
        p2c.value[1] === p1n.value[1] ||
        p2c.value[2] === p1n.value[2] ||
        p2c.value[3] === p1n.value[3]) {
            msg.innerHTML = "1 bull !".fontsize(20);
            p2t.innerHTML = p2c.value + " - you have: 1 bull";
    } else {
        msg.innerHTML = "you have nothing :(".fontsize(20);
        p2t.innerHTML = p2c.value + " - you have nothing";
    }
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
