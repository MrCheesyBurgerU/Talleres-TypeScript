import { series } from "./data.js";
import { serieById } from "./data.js";
var seriesTable = document.getElementById("seriesTable");
var seasonsArray = [];
series.forEach(function (serie) {
    showSerie(serie);
    seasonsArray.push(serie.seasons);
});
function showSerie(serie) {
    var tableBody = document.createElement("tbody");
    tableBody.innerHTML =
        "<tr>\n      <th scope=\"row\"\">".concat(serie.id, "</th>\n      <td style= \"color: blue;\">").concat(serie.name, "</td>\n      <td>").concat(serie.channel, "</td>\n      <td>").concat(serie.seasons, "</td>\n  </tr>");
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
seriesTable.click();
function initPage() {
    var serieTable = (document.getElementById("seriesTable"));
    var rows = serieTable.getElementsByTagName("tr");
    for (var i = 0; i < serieTable.rows.length; i++) {
        rows[i].addEventListener("click", function () {
            var clickedRow = this.rowIndex;
            var serie = serieById.get(clickedRow);
            buildCard(serie);
        });
    }
}
initPage();
function buildCard(serie) {
    var card = document.getElementById("detailCard");
    card.innerHTML =
        "<img \n        src=\"".concat(serie.image, "\" \n        \n    > \n  <div class=\"card-body\">\n    <p class=\"card-text\" style=\"text-align: center;\">\n        <h3>\n            ").concat(serie.name, "\n        </h3>\n    </p>\n    <p class=\"card-text\" style=\"text-align: justify;\">\n        ").concat(serie.description, "\n    </p>\n    <a href=").concat(serie.link, ">\n    ").concat(serie.link, "\n    </a>");
}
