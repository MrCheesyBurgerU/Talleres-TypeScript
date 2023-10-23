import {Serie} from "./serie.js";
import {series} from "./data.js";


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
        <th scope="row" style="text-align: center;">${serie.id}</th>
        <td style="text-align: center;">${serie.name}</td>
        <td style="text-align: center;">${serie.channel}</td>
        <td style="text-align: center;">${serie.seasons}</td>
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


