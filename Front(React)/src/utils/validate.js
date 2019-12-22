//validate.js

export function valInputText(e) {
    var tecla = (document.all) ? e.keyCode : e.which;
    if (tecla == 8)
        return true;
    var patron = /[A-Za-zñÑ'áéíóú\s]/;
    var te = String.fromCharCode(tecla);
    return patron.test(te);
}

export function valEmailText(e) {
    var tecla = (document.all) ? e.keyCode : e.which;
    if (tecla == 8)
        return true;
    var patron = /[A-Za-z0-9@._-\s]/;
    var te = String.fromCharCode(tecla);
    return patron.test(te);
}

export function onPasteText(e) {
    var clipboardData = e.clipboardData
        || e.originalEvent.clipboardData || window.clipboardData;
    var pastedData = clipboardData.getData('text');
    var patron = /[A-Za-zñÑ'áéíóú\s]/;
    for (var i = 0; i < pastedData.length; i++) {
        if (!patron.test(pastedData[i])) {
            e.preventDefault();
            break;
        }
    }
}

export function valInputNum(e) {
    var tecla = (document.all) ? e.keyCode : e.which;
    if (tecla == 8)
        return true;
    var patron = /[0-9\s]/;
    var te = String.fromCharCode(tecla);
    return patron.test(te);
}

export function onPasteNum(e) {
    var clipboardData = e.clipboardData
        || e.originalEvent.clipboardData || window.clipboardData;
    var pastedData = clipboardData.getData('text');
    var patron = /[0-9\s]/;
    for (var i = 0; i < pastedData.length; i++) {
        if (!patron.test(pastedData[i])) {
            e.preventDefault();
            break;
        }
    }
}

