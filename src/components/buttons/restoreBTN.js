const { restoreIconSvg } = require("../../styles/icons");
const { buttonStyle } = require("../../styles/commonStyles");

const restoreBTN = document.createElement("button");
restoreBTN.innerHTML = restoreIconSvg;
restoreBTN.style = `
    ${buttonStyle}
    top: 0px;
    right: 0px;
    width: 40px;
    height: 40px;
    z-index: 1000;
    display: none;
`;
module.exports = restoreBTN;
