const { wrapper, logWrapper } = require("./components/wrapper");
const { replacer } = require("./deadSimpleLog");
const dsl = require("./deadSimpleLog");
const state = require("./state");
const toast = require("./toast");

function lineNumberMaker(str) {
    const span = document.createElement("span");
    span.style = "color: #ccc;";
    span.textContent = str;
    return span;
}

function logMaker(str, type = "log") {
    const pre = document.createElement("pre");
    pre.style = `
            white-space: pre-wrap;
        `;
    pre.innerHTML = str + "\n\n";
    if (type === "error") {
        pre.style.color = "crimson";
    }
    return pre;
}
function log(arg, type = "log") {
    if (!document.body.querySelector("OSC-wrapper")) {
        document.body.appendChild(wrapper);
    }
    let lineNumber;
    try {
        throw new Error();
    } catch (e) {
        let stamp = e.stack.split("\n");
        if (typeof stamp[2] !== "undefined") {
            stamp = stamp[2].replace(/^\s{4}/g, "");
        } else {
            stamp = stamp[1];
        }
        lineNumber = `[${stamp}]:\n`;
    }
    logWrapper.appendChild(lineNumberMaker(lineNumber));
    const logStr = JSON.stringify(arg, replacer, 4);
    logWrapper.appendChild(logMaker(logStr, type));
    if (state.minimized) {
        toast(logMaker(lineNumber + "\n" + logStr, type));
    }
}
module.exports = log;
