// from data.js

var submit = d3.select("#filter-btn");


submit.on("click", function() {

  var tableData = data;
  var tbody = d3.select("tbody");

  //make sure the table updates everytime click on the button
  d3.selectAll('td').remove()

  // Prevent the page from refreshing
  d3.event.preventDefault();


  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");
  var inputElement2 = d3.select("#city");
  var inputElement3 = d3.select("#state");
  var inputElement4 = d3.select("#country");
  var inputElement5 = d3.select("#shape");

  // Get the value property of the input element, change it to lowercase
  var inputValue = inputElement.property("value");
  var inputValue2 = inputElement2.property("value").toLowerCase();
  var inputValue3 = inputElement3.property("value").toLowerCase();
  var inputValue4 = inputElement4.property("value").toLowerCase();
  var inputValue5 = inputElement5.property("value").toLowerCase();
  

  //I have five filters, user can use 1 or more filters in any of the combination to query on data
  //if nothing selected will return the whole dataset
  filteredData=tableData

  if (inputValue.trim() !==""){
    console.log('user insert the date info')
    var filteredData = filteredData.filter(ufo => ufo.datetime === inputValue)
  };
    console.log(filteredData)

  if (inputValue2.trim() !==""){
    console.log('user insert the city info')
    var filteredData = filteredData.filter(ufo => ufo.city === inputValue2);
  };
    console.log(filteredData)

  if (inputValue3.trim() !==""){
    console.log('user insert the state info')
    var filteredData = filteredData.filter(ufo => ufo.state === inputValue3);
  };
    console.log(filteredData)
  
  if (inputValue4.trim() !==""){
      console.log('user insert the country info')
      var filteredData = filteredData.filter(ufo => ufo.country === inputValue4);
  };
      console.log(filteredData)

  if (inputValue5.trim() !==""){
      console.log('user insert the shape info')
      var filteredData = filteredData.filter(ufo => ufo.shape === inputValue5);
  };
      console.log(filteredData)
  

  filteredData.forEach((ufo) => {
      var row = tbody.append("tr");
      Object.entries(ufo).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
      console.log("filer data did complete")
      });
  });

  //If no data being found based on userinput
  if (filteredData.length==0){
    console.log(filteredData.length)
    d3.select("h2").text("404 No Data Found, Click again on Filter Table Button For All Data")
  };

  //clear the userinput for next input
  d3.select("#datetime").node().value="";
  d3.select("#city").node().value="";
  d3.select("#state").node().value="";
  d3.select("#country").node().value="";
  d3.select("#shape").node().value="";

});