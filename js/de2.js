function de(str) {
    var str = str.replace(/~/g,'A');
    var str = str.replace(/:/g,'B');
    var str = str.replace(/-/g,'C');
    var str = str.replace(/@/g,'D');
    var str = str.replace(/#/g,'F');
    var str = str.replace(/%/g,'G');
    var str = str.replace(/'/g,'H');
    var str = str.replace(/&/g,'J');
    var str = str.replace(/\*/g,'K');
    var str = str.replace(/\?/g,'L');
    var str = str.replace(/;/g,'N');
    var str = str.replace(/!/g,'S');
    var str = str.replace(/_/g,'V');
    var str = str.replace(/\)/g,'X');
    var str = str.replace(/\(/g,'Z');
    return str;
};
//編輯於2022.3.31-By渴望有熊1BF