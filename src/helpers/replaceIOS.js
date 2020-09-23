function replaceIOS(str) {
    return str.replace(/[\u2018\u2019\u201C\u201D]/g, (c) =>
        "''\"\"".substr("\u2018\u2019\u201C\u201D".indexOf(c), 1)
    );
}

module.exports = replaceIOS;
