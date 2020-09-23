const { closeIconSvg } = require("../../styles/icons");
const { buttonStyle } = require("../../styles/commonStyles");

const closeBTN = document.createElement("button");
closeBTN.style = `
        ${buttonStyle}
        top: 50px;
        right: 5px;
    `;
closeBTN.innerHTML = closeIconSvg;
closeBTN.addEventListener("click", (e) => {
    const wrapper = e.currentTarget.parentNode;
    document.body.removeChild(wrapper);
});

module.exports = closeBTN;
