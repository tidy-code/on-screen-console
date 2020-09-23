const replaceIOS = require("../../helpers/replaceIOS");
const inputWrapper = document.createElement("div");
const autoResizeTextarea = require("../../helpers/resizeTextarea");

inputWrapper.style = `
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    border-top: 1px solid #eee;
`;

const consoleInput = document.createElement("textarea");
autoResizeTextarea(consoleInput);
consoleInput.type = "text";
consoleInput.id = "text";
consoleInput.style = `
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        /*position: absolute;*/
        left: 0;
        bottom: 0;
        width: 100%;
        padding: 0 10px;
        padding-right: 50px;
        font-family: consolas, Tahoma, arial;
        box-sizing: border-box;
        border: none;
        /*border-top: 1px solid #eee;*/
        outline: none;
        line-height: 25px;
        border-radius: 0;
        box-shadow: none;
    `;
consoleInput.name = "console-input";
consoleInput.setAttribute("autocapitalize", false);
consoleInput.setAttribute("autocomplete", false);

function evalInput() {
    eval(replaceIOS(consoleInput.value));
    setTimeout(() => {
        consoleInput.value = "";
    }, 100);
}
consoleInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        evalInput();
    }
});
const sendBTN = document.createElement("button");
sendBTN.addEventListener("click", (e) => {
    e.preventDefault();
    evalInput();
});
sendBTN.style = `
        border: none;
        outline: none;
        box-shadow: -5px 0 5px -5px rgba(0,0,0,0.3);
        padding: 0 10px;
        border-radius: 5px;
        line-height: 25px;
        position: absolute;
        right: 0;
        bottom: 0;
        height: 100%;
        z-index: 100;
        background-color: white;
    `;
sendBTN.innerText = "exec";
inputWrapper.appendChild(consoleInput);
inputWrapper.appendChild(sendBTN);

module.exports = inputWrapper;
