function styleSetter(el, style) {
    Object.keys(style).forEach((styleItem) => {
        el.style[styleItem] = style[styleItem];
    });
}

module.exports = styleSetter;
