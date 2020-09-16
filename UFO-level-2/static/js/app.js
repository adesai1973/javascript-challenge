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
   var inputCity = d3.select("#city");
   var inputState = d3.select("#state");
   var inputCountry = d3.select("#country");
   var inputShape = d3.select("#shape");

  var button = d3.select("#filter-btn");
  button.on("click", handleClick);

  var button2 = d3.select("#clear-filter-btn");
  button2.on("click", clearClick);

  var form = d3.select("form");
  form.on("submit", handleClick);

  var input1 = document.getElementById("datetime");
  var input2 = document.getElementById("city");
  var input3 = document.getElementById("state");
  var input4 = document.getElementById("country");
  var input5 = document.getElementById("shape");

  input1.addEventListener("keyup", changeTriggersClick);
  input2.addEventListener("keyup", changeTriggersClick);
  input3.addEventListener("keyup", changeTriggersClick);
  input4.addEventListener("keyup", changeTriggersClick);
  input5.addEventListener("keyup", changeTriggersClick);


function changeTriggersClick(event) {
  if (event.keyCode === 13) {
    console.log("Input Field - Event detected");
    document.getElementById("filter-btn").click();
  }
}


function handleClick(){
    console.log("handleClick activated");
    d3.event.preventDefault();
    tBody.html("");
    var filterDate = inputDate.property("value");
    var filterCity = inputCity.property("value");
    var filterState = inputState.property("value");
    var filterCountry = inputCountry.property("value");
    var filterShape = inputShape.property("value");

    //console.log(filterDate);

    var dataFilteredByDate = tableData.filter(table => table.datetime == filterDate);
    if (filterCity != ""){
      dataFilteredByDate = dataFilteredByDate.filter(table => table.city == filterCity);
    }
    if (filterState != ""){
      dataFilteredByDate = dataFilteredByDate.filter(table => table.state == filterState);
    }
    if (filterCountry != ""){
      dataFilteredByDate = dataFilteredByDate.filter(table => table.country == filterCountry);
    }
    if (filterShape != ""){
      dataFilteredByDate = dataFilteredByDate.filter(table => table.shape == filterShape);
    }

    loadTable(dataFilteredByDate);
}


function clearClick(){

  console.log("clearClick activated");
  d3.event.preventDefault();
  tBody.html("");

  inputDate.property("value", "");
  inputCity.property("value", "");
  inputState.property("value", "");
  inputCountry.property("value", "");
  inputShape.property("value", "");

  loadTable(tableData);
 
}
