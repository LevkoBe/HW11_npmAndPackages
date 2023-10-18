let data = [1, 2, 3, 4, 5];

function displayData() {
  $("#data-container").html(JSON.stringify(data));
}

displayData();

$("#modify-data-button").on("click", function () {
  data = _.reverse(data);
  displayData();
});

let now = moment();
$("#current-time").text(now.format("MMMM Do YYYY, h:mm:ss a"));
