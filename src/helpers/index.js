let EXTERNAL_HTML_TAGS = [];
/**
 * @param {HTMLElement} parent
 * @param {string} tag
 * @param {string} attr
 * @param {string} attrValue
 */
const appendElement = (parent, tag, attr, attrValue,) => {
    const htmlTag = document.createElement(tag);
    htmlTag[attr] = attrValue;
    if (tag === "script") {
        htmlTag["type"] = "text/javascript";
    }
    if (tag === "link") {
        htmlTag["rel"] = "stylesheet";
    }
    EXTERNAL_HTML_TAGS.push({
        html: htmlTag,
        parent: parent,
        tag: tag,
        attr: attr,
        attrValue: attrValue,
    });
};

const appendScript = (url) => {
    appendElement("body", "script", "src", url);
};

const appendLink = (url) => {
    appendElement("head", "link", "href", url);
};

const removeAllExternal = async () => {
    EXTERNAL_HTML_TAGS.forEach((i, idx) => {
        document[i.parent].removeChild(i.html);
    });
    EXTERNAL_HTML_TAGS = [];
};

const appendPromise = (i, cb) => {
    i.html.onload = (e) => {
        new Promise((res, rej) => {
            res(cb(e));
        });
    };
    document[i.parent].appendChild(i.html);
};

const _run = (i) => {
    return new Promise((res, rej) => {
        appendPromise(i, (event) => {
            res(event);
        });
    });
};

const run = async () => {
    let arrS = Array.from(EXTERNAL_HTML_TAGS);
    for (const i of arrS) {
        await _run(i);
    }
};

export { appendScript, appendLink, removeAllExternal, run };
