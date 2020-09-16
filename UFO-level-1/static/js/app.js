// from data.js
var tableData = data;
// var filterDate = '1/2/2010';
var filterState = 'az';
var filterCity = 'phoenix';
var filterCountry = 'us';
var filterShape = 'rectangle';

var tBody = d3.select("tbody");

loadTable(tableData);

function loadTable(table){
    //var tBody = d3.select("tbody");

    table.forEach((ufoObject) => {
        var row = tBody.append("tr");
        Object.entries(ufoObject).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });
}
  var inputDate = d3.select("#datetime");
  inputDate.on("change", handleClick);

  var button = d3.select("#filter-btn");
  button.on("click", handleClick);

  var form = d3.select("form");
  form.on("submit", handleClick);

  var input = document.getElementById("datetime");
  //console.log(input);

  input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    console.log("Input Field - Event detected");
    document.getElementById("filter-btn").click();
  }
});


function handleClick(){
    console.log("handleClick activated");
    d3.event.preventDefault();
    tBody.html("");
    var filterDate = inputDate.property("value");
    console.log(filterDate);
    var dataFilteredByDate = tableData.filter(table => table.datetime == filterDate);
    loadTable(dataFilteredByDate);
}

// function filterByCriteria(table) {
//     return table.datetime == this;
// }
