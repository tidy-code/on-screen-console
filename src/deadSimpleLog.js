function dsl(arg, type = "log") {
    const all = {};
    for (var key in arg) {
        all[key] = arg[key];
    }
    const pre = document.createElement("pre");
    pre.style.color = type === "error" ? "crimson" : "";
    pre.innerText = JSON.stringify(arg, replacer, 4);
    document.body.appendChild(pre);
}

function replacer(key, value) {
    if (typeof value === "function") {
        return value.toString();
    }
    if (value && value[Symbol.toStringTag]) {
        const keys = Object.getOwnPropertyNames(Object.getPrototypeOf(value));
        const all = {};
        keys.forEach((key) => {
            all[key] = value[key];
        });
        Object.keys(value).forEach((key) => {
            all[key] = value[key];
        });
        return all;
    }

    return value;
}
window.onerror = function (msg, url, line) {
    type = "error";
    dsl(
        `[${url}:${line}
            ${msg}]`,
        "error"
    );
    type = "log";
};
dsl.replacer = replacer;
module && (module.exports = dsl);
