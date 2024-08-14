// script.js

// Funciones de encriptación y desencriptación
function encryptText(text) {
    let encryptedText = text
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufa");
    return encryptedText;
}

function decryptText(text) {
    let decryptedText = text
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufa/g, "u");
    return decryptedText;
}

// Obtener referencias a los elementos del DOM
const inputText = document.getElementById("input-text");
const outputText = document.getElementById("output-text");
const encryptBtn = document.getElementById("encrypt-btn");
const decryptBtn = document.getElementById("decrypt-btn");
const copyBtn = document.getElementById("copy-btn");

// Asignar eventos a los botones
encryptBtn.addEventListener("click", () => {
    const encrypted = encryptText(inputText.value.toLowerCase());
    outputText.value = encrypted;
});

decryptBtn.addEventListener("click", () => {
    const decrypted = decryptText(inputText.value.toLowerCase());
    outputText.value = decrypted;
});

copyBtn.addEventListener("click", () => {
    outputText.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles");
});
