let data = [1, 2, 3, 4, 5];

// jQuery
function displayData() {
  $("#data-container").html(JSON.stringify(data));
}

displayData();

$("#modify-data-button").on("click", function () {
  // Lodash
  data = _.reverse(data);
  displayData();
});

let now = moment();
console.log(now.format("MMMM Do YYYY, h:mm:ss a"));
