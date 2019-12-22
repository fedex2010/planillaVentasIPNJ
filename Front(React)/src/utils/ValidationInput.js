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

export function valInputNumText(e) {
  var tecla = (document.all) ? e.keyCode : e.which;
  if (tecla == 8)
    return true;
  var patron = /^[a-z0-9]+$/i;
  var te = String.fromCharCode(tecla);
  return patron.test(te);
}

export function valInputNumTextSpace(e) {
  var tecla = (document.all) ? e.keyCode : e.which;
  switch (tecla) {
    case 8: return true;
      break;
    case 32: return true;
      break;
    case 39: return true;
      break;
  }
  var patron = /^[a-z0-9]+$/i;
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

export function deleteQuotesSpacesEnd(sentence) {
  while (sentence.charAt(sentence.length - 1) == "'" ||
    sentence.charAt(sentence.length - 1) == " ") {
    sentence = sentence.substr(0, sentence.length - 1);
  }
  return sentence;
}

export function deleteStartQuotes(sentence) {
  while (sentence.charAt(0) == "'" || sentence.charAt(0) == " ") {
    sentence = sentence.substr(1);
  }
  return sentence;
}

export const handleKeyPressText = event => {
  if (!valInputText(event)) {
    event.preventDefault();
  }
}

export const handlePasteText = event => {
  onPasteText(event)
}

export const handleKeyPressNum = event => {
  if (!valInputNum(event)) {
    event.preventDefault();
  }
}

export const handlePasteNum = event => {
  onPasteNum(event)
}

export const handleKeyPressNumTex = event => {
  if (!valInputNumText(event)) {
    event.preventDefault();
  }
}

export const handleKeyPressNumTexSpace = event => {
  if (!valInputNumTextSpace(event)) {
    event.preventDefault();
  }
}

