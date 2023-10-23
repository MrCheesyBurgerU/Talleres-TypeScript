import { Serie } from "./serie.js";
import { series } from "./data.js";
import { serieById } from "./data.js";

let seriesTable: HTMLElement = document.getElementById("seriesTable")!;
let seasonsArray: number[] = [];

series.forEach(serie => {
    showSerie(serie);
    seasonsArray.push(serie.seasons)
});

function showSerie(serie: Serie):void{
  let tableBody = document.createElement("tbody");
  tableBody.innerHTML = 
  `<tr>
      <th scope="row"">${serie.id}</th>
      <td style= "color: blue;">${serie.name}</td>
      <td>${serie.channel}</td>
      <td>${serie.seasons}</td>
  </tr>`
  seriesTable.appendChild(tableBody);
}

let averga: HTMLElement = document.getElementById("average")!;
averga.innerHTML = `Seasons Average: ${seasonsAverage(seasonsArray).toPrecision(2)}`;

function seasonsAverage(seasonsArray: number[]):number{
    let sum = 0;
    seasonsArray.forEach(season => {
        sum += season;
    });
    return sum/seasonsArray.length;
}

seriesTable.click();

function initPage() {
  let serieTable: HTMLTableElement = <HTMLTableElement>(document.getElementById("seriesTable")!);
  let rows = serieTable.getElementsByTagName("tr");

  for (let i = 0; i < serieTable.rows.length; i++) {
    rows[i].addEventListener("click", function () {
      let clickedRow = this.rowIndex;
      let serie = serieById.get(clickedRow);
      buildCard(serie);
    });
  }
}

initPage();

function buildCard(serie: any) {
  let card = document.getElementById("detailCard")!;
  card.innerHTML = 
  `<img 
        src="${serie.image}" 
        
    > 
  <div class="card-body">
    <p class="card-text" style="text-align: center;">
        <h3>
            ${serie.name}
        </h3>
    </p>
    <p class="card-text" style="text-align: justify;">
        ${serie.description}
    </p>
    <a href=${serie.link}>
    ${serie.link}
    </a>`;
}
