var observe;
if (window.attachEvent) {
    observe = function (element, event, handler) {
        element.attachEvent("on" + event, handler);
    };
} else {
    observe = function (element, event, handler) {
        element.addEventListener(event, handler, false);
    };
}
function init(textAreaDomEl) {
    function resize() {
        textAreaDomEl.style.height = "auto";
        textAreaDomEl.style.height = textAreaDomEl.scrollHeight + "px";
    }
    /* 0-timeout to get the already changed text */
    function delayedResize() {
        window.setTimeout(resize, 0);
    }
    observe(textAreaDomEl, "change", resize);
    observe(textAreaDomEl, "cut", delayedResize);
    observe(textAreaDomEl, "paste", delayedResize);
    observe(textAreaDomEl, "drop", delayedResize);
    observe(textAreaDomEl, "keydown", delayedResize);

    textAreaDomEl.focus();
    textAreaDomEl.select();
    resize();
}

module.exports = init;
