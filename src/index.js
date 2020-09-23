const parseURL = require("./helpers/parseURL");
const log = require("./log");
const dsl = require("./deadSimpleLog.js");
const { wrapper } = require("./components/wrapper");

document.body.appendChild(wrapper);

const loadedWithQueries = parseURL(document.currentScript.src)?.query;
if (loadedWithQueries) {
    const { bindConsole = false, bindErrors = true } = loadedWithQueries;

    if (bindConsole) {
        console.log = (...args) => {
            console.log(...args);
            log(args);
        };
    }
    if (bindErrors) {
        window.onerror = (msg, url, line, col) => {
            log(
                { path: `${url}:${line}:${col}`, msg: msg.toString() },
                "error"
            );
        };
    }
} else {
    window.onerror = (msg, url, line, col) => {
        log({ path: `${url}:${line}:${col}`, msg: msg.toString() }, "error");
    };
}

window.log = log;
window.Log = log;
window.dsl = dsl;
