const btnbin = document.querySelector(".btn1");
const btnOct = document.querySelector(".btn2");
const btnDec = document.querySelector(".btn3");
const btnHex = document.querySelector(".btn4");
const btn = document.querySelector(".btn");

/*
btnbin.addEventListener("click", () => {
    console.log("Binary");
    
    

    
});

btnOct.addEventListener("click", () => {
    console.log("Octal");

    Convert_Dec();
    Convert_Hex();
    Convert_Bin();
});

btnDec.addEventListener("click", () => {
    console.log("Decimal");

    Convert_Bin();
    Convert_Hex();
    Convert_Oct();
});

btnHex.addEventListener("click", () => {
    console.log("Hexa");

    Convert_Dec();
    Convert_Bin();
    Convert_Oct();
});
*/


function setfocus() {
    document.calcform.dec.focus();
}
function Convert_Bin() {
    num = document.calcform.bin.value;
    if (num == "")
        return;
    num = parseInt(num, 2);
    document.calcform.oct.value = num.toString(8);
    document.calcform.dec.value = num.toString(10);
    num = num.toString(16);
    document.calcform.hex.value = num.toUpperCase();
}
function Convert_Oct() {
    num = document.calcform.oct.value;
    if (num == "")
        return;
    num = parseInt(num, 8);
    document.calcform.bin.value = num.toString(2);
    document.calcform.dec.value = num.toString(10);
    num = num.toString(16);
    document.calcform.hex.value = num.toUpperCase();
}
function Convert_Dec() {
    num = document.calcform.dec.value;
    if (num == "")
        return;
    num = parseInt(num, 10);
    if (num < 0) {
        if (num >= -32768)
            num += 65536;
        else if (num >= -Math.pow(2, 31))
            num += Math.pow(2, 32);
        else if (num >= -Math.pow(2, 63))
            num += Math.pow(2, 64);
    }
    document.calcform.bin.value = num.toString(2);
    document.calcform.oct.value = num.toString(8);
    num = num.toString(16);
    document.calcform.hex.value = num.toUpperCase();
}
function Convert_Hex() {
    num = document.calcform.hex.value;
    if (num == "")
        return;
    num = parseInt(num, 16);
    document.calcform.bin.value = num.toString(2);
    document.calcform.oct.value = num.toString(8);
    document.calcform.dec.value = num.toString(10);
}