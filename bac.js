let p1n = document.getElementById("my1"),
    p1c = document.getElementById("num1"),
    p1t = document.getElementById("text1"),
    bt1 = document.getElementById("bt1"),
    p2n = document.getElementById("my2"),
    p2c = document.getElementById("num2"),
    p2t = document.getElementById("text2"),
    bt2 = document.getElementById("bt2"),
    msg = document.getElementById("mst"),
    start = document.getElementById("start"),
    pl1 = document.getElementById("pl1").innerText,
    pl2 = document.getElementById("pl2").innerText;


function checkBull(rec,res,text,player) {
    let result=0;
    for (let i = 0; i < 4; i++) {
        if (rec[i] === res[i]){
            result++;
        }
    }
    text.innerHTML += rec + " - "+result+" bulls \n";
    text.scrollTop = text.scrollHeight;

    if(result === 4) {
        msg.innerHTML = player + " YOU WIN";
    }
}

function checkCowP1() {
    if (    // 4 cows combinations//
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
    } else if (    // 3 cows with index 1, 2 and 3 //
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
            // 3 cows with index 2, 3 and 4 //
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
            // 3 cows with index 1, 3 and 4 //
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
        // 3 cows with index 1, 2 and 4 //
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
    } else if (    // 2 cows with index 1 and 2 //
        p1c.value[0] === p2n.value[1] && p1c.value[1] === p2n.value[0] ||
        p1c.value[0] === p2n.value[1] && p1c.value[2] === p2n.value[0] ||
        p1c.value[0] === p2n.value[1] && p1c.value[3] === p2n.value[0] ||
        p1c.value[1] === p2n.value[0] && p1c.value[2] === p2n.value[1] ||
        p1c.value[2] === p2n.value[1] && p1c.value[3] === p2n.value[0] ||
        p1c.value[1] === p2n.value[0] && p1c.value[3] === p2n.value[1] ||
        p1c.value[2] === p2n.value[0] && p1c.value[3] === p2n.value[1] ||
            // 2 cows with index 3 and 4 //
        p1c.value[2] === p2n.value[3] && p1c.value[3] === p2n.value[2] ||
        p1c.value[1] === p2n.value[3] && p1c.value[3] === p2n.value[2] ||
        p1c.value[0] === p2n.value[3] && p1c.value[3] === p2n.value[2] ||
        p1c.value[1] === p2n.value[2] && p1c.value[2] === p2n.value[3] ||
        p1c.value[0] === p2n.value[3] && p1c.value[1] === p2n.value[2] ||
        p1c.value[0] === p2n.value[2] && p1c.value[2] === p2n.value[3] ||
        p1c.value[0] === p2n.value[2] && p1c.value[1] === p2n.value[3] || 
            // 2 cows with index 2 and 3 //
        p1c.value[0] === p2n.value[1] && p1c.value[1] === p2n.value[2] ||
        p1c.value[0] === p2n.value[1] && p1c.value[3] === p2n.value[2] ||
        p1c.value[2] === p2n.value[1] && p1c.value[3] === p2n.value[2] ||
        p1c.value[0] === p2n.value[2] && p1c.value[2] === p2n.value[1] ||
        p1c.value[1] === p2n.value[2] && p1c.value[2] === p2n.value[1] ||
        p1c.value[0] === p2n.value[2] && p1c.value[3] === p2n.value[1] ||
        p1c.value[1] === p2n.value[2] && p1c.value[3] === p2n.value[1] ||
            // 2 cows with index 1 and 3 //
        p1c.value[0] === p2n.value[2] && p1c.value[1] === p2n.value[0] ||
        p1c.value[0] === p2n.value[2] && p1c.value[2] === p2n.value[0] ||
        p1c.value[0] === p2n.value[2] && p1c.value[3] === p2n.value[0] ||
        p1c.value[1] === p2n.value[0] && p1c.value[3] === p2n.value[2] ||
        p1c.value[2] === p2n.value[0] && p1c.value[3] === p2n.value[2] ||
        p1c.value[1] === p2n.value[2] && p1c.value[2] === p2n.value[0] ||
        p1c.value[1] === p2n.value[2] && p1c.value[3] === p2n.value[0] ||
            // 2 cows with index 2 and 4 //
        p1c.value[0] === p2n.value[1] && p1c.value[1] === p2n.value[3] ||
        p1c.value[0] === p2n.value[1] && p1c.value[2] === p2n.value[3] ||
        p1c.value[0] === p2n.value[3] && p1c.value[2] === p2n.value[1] ||
        p1c.value[1] === p2n.value[3] && p1c.value[2] === p2n.value[1] ||
        p1c.value[0] === p2n.value[3] && p1c.value[3] === p2n.value[1] ||
        p1c.value[1] === p2n.value[3] && p1c.value[3] === p2n.value[1] ||
        p1c.value[2] === p2n.value[3] && p1c.value[3] === p2n.value[1] ||
            // 2 cows with index 1 and 4 //
        p1c.value[1] === p2n.value[0] && p1c.value[2] === p2n.value[3] ||
        p1c.value[0] === p2n.value[3] && p1c.value[1] === p2n.value[0] ||
        p1c.value[1] === p2n.value[3] && p1c.value[2] === p2n.value[0] ||
        p1c.value[0] === p2n.value[3] && p1c.value[2] === p2n.value[0] ||
        p1c.value[2] === p2n.value[3] && p1c.value[3] === p2n.value[0] ||
        p1c.value[1] === p2n.value[3] && p1c.value[3] === p2n.value[0] ||
        p1c.value[0] === p2n.value[3] && p1c.value[3] === p2n.value[0]) {
            p1t.innerHTML += "2 cows" + "\n" + "\n";
            p1t.scrollTop = p1t.scrollHeight;
    } else if ( // 1 cow combinations //
        p1c.value[0] === p2n.value[1] || p1c.value[0] === p2n.value[2] || p1c.value[0] === p2n.value[3] ||
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

bt1.addEventListener('click', function() {
    msg.innerHTML = "Its Player 2 turn".fontsize(20);
    checkBull(p1c.value, p2n.value,p1t,pl1);
    // checkCowP1();
}, false);

bt2.addEventListener('click', function() {
    msg.innerHTML = "Its Player 1 turn".fontsize(20);
    checkBull(p2c.value, p1n.value,p2t,pl2);
    // checkCowP2();
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
