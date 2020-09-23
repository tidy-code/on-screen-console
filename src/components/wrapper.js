const draggable = require("../helpers/draggable");
const consoleInput = require("./console-input");

const { pinBTN, closeBTN, minimizeBTN, restoreBTN } = require("./buttons");
const state = require("../state");

const wrapper = document.createElement("div");
wrapper.classList.add("OSC-wrapper");
const defaultStyles = `
    direction: ltr;
    position: fixed;
    font-family: "Consolas", Tahoma, Arial;
    font-size: 13px;
    left: 20px;
    top: 20px;
    width: 400px;
    max-width: 90vw;
    height: 400px;
    white-space: pre-wrap;
    overflow: auto;
    background-color: white;
    border-radius: 5px;
    padding: 10px;
    padding-right: 40px;
    box-sizing: border-box;
    box-shadow: 0 0 5px rgba(0,0,0,0.3);
`;
wrapper.style = defaultStyles;

const logWrapper = document.createElement("div");
logWrapper.style = `
    width: 100%;
    height: 350px;
    overflow: auto;
`;

wrapper.addEventListener("click", (e) => {
    if (wrapper.classList.contains("minimize")) {
        state.minimized = false;
        wrapper.style = defaultStyles;
        wrapper.classList.remove("minimize");
        restoreBTN.style.display = "none";
    }
});

draggable(wrapper);
wrapper.appendChild(logWrapper);
wrapper.appendChild(pinBTN);
wrapper.appendChild(minimizeBTN);
wrapper.appendChild(restoreBTN);
wrapper.appendChild(closeBTN);

wrapper.appendChild(consoleInput);
module.exports = {
    wrapper,
    logWrapper,
};
