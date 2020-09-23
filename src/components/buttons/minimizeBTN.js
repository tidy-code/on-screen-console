const { minimizeIconSvg } = require("../../styles/icons");
const { buttonStyle } = require("../../styles/commonStyles");
const minimizedWrapperStyle = require("../../styles/minimizedWrapper");
const styleSetter = require("../../helpers/styleSetter");
const restoreBTN = require("./restoreBTN");
const state = require("../../state");

const minimizeBTN = document.createElement("button");
minimizeBTN.style = `
        ${buttonStyle}
        top: 100px;
        right: 5px;
    `;
minimizeBTN.innerHTML = minimizeIconSvg;
minimizeBTN.addEventListener("click", (e) => {
    e.stopPropagation();
    e.preventDefault();
    const wrapper = e.currentTarget.parentNode;
    wrapper.classList.add("minimize");
    styleSetter(wrapper, minimizedWrapperStyle);
    restoreBTN.style.display = "block";
    state.minimized = true;
});

module.exports = minimizeBTN;
