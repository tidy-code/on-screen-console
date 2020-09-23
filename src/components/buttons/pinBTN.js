const { buttonStyle } = require("../../styles/commonStyles");
const { pinIconSvg } = require("../../styles/icons");
const pinBTN = document.createElement("button");
const { toggleDrag } = require("../../helpers/draggable");
pinBTN.style = `
       ${buttonStyle}
        top:5px;
        right: 5px;
    `;
pinBTN.innerHTML = pinIconSvg;
pinBTN.addEventListener("click", (e) => {
    e.preventDefault();
    pinBTN.children[0].style = `transform: ${
        toggleDrag() ? "" : "rotate(-45deg)"
    };`;
});

module.exports = pinBTN;
