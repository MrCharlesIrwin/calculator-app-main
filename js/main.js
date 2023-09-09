"use strict";
const delbutton = document.querySelector(".delbutton");
const resetbutton = document.querySelector(".buttons__resetButton");
const equalsButton = document.querySelector(".buttons__equalsButton");
const radioButtons = document.querySelectorAll(".radioButtons");
const numberButton = document.querySelectorAll(".button");
const output = document.querySelector(".output");
const root = document.documentElement;
root.addEventListener("mousemove", (e) => {
    root.style.setProperty("--mouse-x", e.clientX + "px");
    root.style.setProperty("--mouse-y", e.clientY + "px");
});
radioButtons.forEach((button) => button.addEventListener("click", (e) => {
    const switcherCircle = document.querySelector(".switcher-circle");
    const element = e.target;
    if (element.id == "firstState") {
        switcherCircle.style.transform = "translate(-130%)";
        root.style.setProperty("--background-100", " hsl(222, 26%, 31%)");
        root.style.setProperty("--background-200", "hsl(223, 31%, 20%)");
        root.style.setProperty("--background-300", "hsl(224, 36%, 15%)");
        root.style.setProperty(" --keyShadow-100", " hsl(224, 28%, 35%)");
        root.style.setProperty(" --keyShadow-200", "hsl(6, 70%, 34%)");
        root.style.setProperty("--keyShadow-300", " hsl(28, 16%, 65%)");
        root.style.setProperty("--keyBackground-100", " hsl(6, 63%, 50%)");
        root.style.setProperty("--keyBackground-200", "hsl(30, 25%, 89%)");
        root.style.setProperty("--keyBackground-300", " hsl(225, 21%, 49%)");
        root.style.setProperty("-text-100", "hsl(221, 14%, 31%)");
        root.style.setProperty("--text-200", "hsl(0, 0%, 100%)");
    }
    if (element.id == "secondState") {
        switcherCircle.style.transform = "translate(0%)";
    }
    if (element.id == "thirdState") {
        switcherCircle.style.transform = "translate(130%)";
    }
}));
numberButton.forEach((button) => button.addEventListener("click", (e) => {
    const output = document.querySelector(".output");
    let target = e.target.innerText;
    let array = [];
    let string = "";
    if (output.innerText === "0")
        output.innerText = "";
    if (target === "x")
        target = "*";
    array.push(output.innerText, target);
    filterOutInappropriateSymbols(array);
    string = array.join("");
    output.innerText = string;
}));
function filterOutInappropriateSymbols(array) {
    let arrayOfsymbols = ["+", "-", "*", "/", "."];
    let lastInputCharacter = array[0].charAt(array[0].length - 1);
    let newInputCharacter = array[1];
    if (arrayOfsymbols.includes(newInputCharacter) && newInputCharacter == lastInputCharacter)
        array[1] = "";
    if (arrayOfsymbols.includes(newInputCharacter) &&
        arrayOfsymbols.includes(lastInputCharacter) &&
        newInputCharacter != lastInputCharacter)
        array[0] = array[0].slice(0, -1);
}
// del button
delbutton.addEventListener("click", () => {
    if (output.innerText.length === 1)
        return (output.innerText = "0");
    output.innerText = output.innerText.slice(0, -1);
});
//  resetbutton
resetbutton === null || resetbutton === void 0 ? void 0 : resetbutton.addEventListener("click", () => (output.innerText = "0"));
// calculate
equalsButton.addEventListener("click", (e) => {
    let arrayOfsymbols = ["+", "-", "*", "/", "."];
    let lastLetterOfOutput = output.innerText.charAt(output.innerText.length - 1);
    if (arrayOfsymbols.includes(lastLetterOfOutput))
        return;
    output.innerText = eval(output.innerText);
});
