import {DateTime} from "luxon";

function getURLParameter(name, def) {
    if (typeof def === "undefined") {
        def = "";
    }
    name = name.replace(/[[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results == null ? def : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function isStringNullOrBlank(string) {
    return (typeof string === "undefined" ||
        string === null ||
        typeof string !== "string" ||
        string.length === 0 ||
        string.trim().length === 0);
}

function formatDateTime(date, formatString) {
    if (typeof formatString === "undefined") {
        formatString = "yyyy-MM-dd";
    }
    console.dir(date);
    if (DateTime.isDateTime(date) && date.isValid) {
        return date.toFormat(formatString);
    }
    return "";
}

function scrollToTop() {
    window.scrollTo(0, 0);
}

function isValidURL(str) {
    var a = document.createElement("a");
    a.href = str;
    return (a.host && a.host !== window.location.host);
}

class Arrays {

    static remove(array, element) {
        let ind = array.indexOf(element);
        if (ind >= 0) {
            array.splice(ind, 1);
        }
    }
}

export {
    getURLParameter,
    isValidURL,
    isStringNullOrBlank,
    formatDateTime,
    scrollToTop,
    Arrays
}
