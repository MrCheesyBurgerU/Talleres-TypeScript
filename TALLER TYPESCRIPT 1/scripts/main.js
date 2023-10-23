import { series } from "./data.js";
var seriesTable = document.getElementById("seriesTable");
var seasonsArray = [];
series.forEach(function (serie) {
    showSerie(serie);
    seasonsArray.push(serie.seasons);
});
function showSerie(serie) {
    var tableBody = document.createElement("tbody");
    tableBody.innerHTML =
        "<tr>\n        <th scope=\"row\"\">".concat(serie.id, "</th>\n        <td style= \"color: blue;\">").concat(serie.name, "</td>\n        <td>").concat(serie.channel, "</td>\n        <td>").concat(serie.seasons, "</td>\n    </tr>");
    seriesTable.appendChild(tableBody);
}
var averga = document.getElementById("average");
averga.innerHTML = "Seasons Average: ".concat(seasonsAverage(seasonsArray).toPrecision(2));
function seasonsAverage(seasonsArray) {
    var sum = 0;
    seasonsArray.forEach(function (season) {
        sum += season;
    });
    return sum / seasonsArray.length;
}
