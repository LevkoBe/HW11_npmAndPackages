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

let ctx = document.getElementById("myChart").getContext("2d");
let myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Data1", "Data2", "Data3", "Data4", "Data5"],
    datasets: [
      {
        label: "Sample Data",
        data: data,
      },
    ],
  },
});
