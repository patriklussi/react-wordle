const allkeys = "QWERTYUIOPASDFGHJKLZXCVBNM".split("");
const enter = "Enter";
const backspace = "Backspace";
const keyRow1 = allkeys.slice(0,10);
const keyRow2 = allkeys.slice(10,19);
const keyRow3 = allkeys.slice(19,29);
keyRow3.push(backspace);
keyRow3.unshift(enter);


export {keyRow1,keyRow2,keyRow3}