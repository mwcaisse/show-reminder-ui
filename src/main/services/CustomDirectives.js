import Vue from "vue"
import {DateTime} from "luxon";

import {formatDateTime} from "@app/services/Util.js"

Vue.filter("showLink", function (show) {
    let name = show.name.replace(" ", "+");
    return `https://rarbg.to/torrents.php?category=18;41;49&search=${name}+1080p&order=seeders&by=DESC`;
});

function formatDateFilter(value, formatString) {
    if (typeof value === "undefined" || null == value) {
        return "";
    }
    if (!DateTime.isDateTime(value)) {
        value = DateTime.fromISO(value);
    }
    return formatDateTime(value, formatString);
}

Vue.filter("formatDate", function (value, formatString) {
    return formatDateFilter(value, formatString);
});
