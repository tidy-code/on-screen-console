const styleSetter = require("./helpers/styleSetter");
let count = 0;
function toast(logEl) {
    // preserve type based color
    const { color } = logEl.style;
    logEl.style = toastStyle;
    logEl.style.color = color;
    logEl.style.bottom = 60 + count * 90 + "px";
    document.body.appendChild(logEl);

    count++;
    setTimeout(() => {
        logEl.style.opacity = 0;
        logEl.style.transform = "translate(-100%, 100%) scale(0.1)";
        setTimeout(() => {
            document.body.removeChild(logEl);
            logEl = null;
            count--;
        }, 300);
    }, 2e3);
}

const toastStyle = `
    position: fixed;
    left: 60px;
    min-width: 120px;
    height: 80px;
    overflow: auto;
    padding: 10px;
    background-color: rgba(255, 255, 255, 0.8);
    box-sizing: border-box;
    border-radius: 5px;
    box-shadow: 0 0 5px rgba(0,0,0,0.3);
    transition: all .3s ease;
`;

module.exports = toast;
