function parseURL(url) {
    parsed = /^(?<protocol>(https?)|(ftp)|(file)):\/{2,3}(?<hostname>[a-z0-9\.:]+)(?<path>\/[a-zA-Z-0-9%_\/\.]*)(?<query>\?[a-zA-z0-9=&]+)?(?<hashtag>#[a-zA-Z_0-9]+)?.*$/.exec(
        url
    ).groups;

    if (typeof parsed.query !== "undefined") {
        parsed.query = parsed.query
            .slice(1)
            .split("&")
            .reduce((acc, curr) => {
                let value = curr.split("=")[1];
                if (typeof value === "undefined" || value === "true") {
                    value = true;
                } else if (value === "false") {
                    value = false;
                }

                return {
                    ...acc,
                    [curr.split("=")[0]]: value,
                };
            }, {});
    }

    return parsed;
}

module.exports = parseURL;
