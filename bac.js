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

function checkALL(num){
    let check=0;
    for (let i =0; i < 4; i++){
        for (let j = 0; j < 4; j++){
            if(num.value[i] === num.value[j] && i !== j){
                if(check > 0){
                    msg.innerText="Please use different numbers";
                   return false;
                }
                check++;
            }
        }
    }
    return true;
}

function checkBull(rec,res,text,player) {
    let result=0;
    for (let i = 0; i < 4; i++) {
        if (rec[i] === res[i]){
            result++;
        }
    }
    text.innerHTML += rec + " - "+result+" bulls ";
    text.scrollTop = text.scrollHeight;

    if(result === 4) {
        msg.innerHTML = player + " YOU WIN";
    }
}1

function checkCow(rec,res,text) {
    let result=0;
    for (let i=0; i < 4; i++) {
        for (let j=0; j < 4; j++){
            if (rec[i] === res[j] && i !== j){
                result++;
            }
        }
    }
    text.innerHTML += result+" cows\n";
    text.scrollTop = text.scrollHeight;
}

bt1.addEventListener('click', function() {
    msg.innerHTML = "Its Player 2 turn".fontsize(20);
    if (checkALL(p1c) && checkALL(p2n)) {
        checkBull(p1c.value, p2n.value,p1t,pl1);
        checkCow(p1c.value, p2n.value,p1t);
    }
}, false);

bt2.addEventListener('click', function() {
    msg.innerHTML = "Its Player 1 turn".fontsize(20);
    if (checkALL(p2c) && checkALL(p1n)) {
        checkBull(p2c.value, p1n.value,p2t,pl2);
        checkCow(p2c.value, p1n.value,p2t);
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
