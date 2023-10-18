let data = [1, 2, 3, 4, 5];
let chartData = data.slice();

function displayData() {
  $("#data-container").html(JSON.stringify(data));
}

displayData();

$("#modify-data-button").on("click", function () {
  data = _.reverse(data);
  chartData = data.slice();
  displayData();
});

$("#generate-random-data").on("click", function () {
  data = Array.from({ length: 5 }, () => Math.floor(Math.random() * 10));
  chartData = data.slice();
  displayData();
});

$("#chunk-data").on("click", function () {
  data = _.chunk(data, 2);
  chartData = data.slice();
  displayData();
});

$("#sort-data").on("click", function () {
  data = _.sortBy(data);
  chartData = data.slice();
  displayData();
});

$("#shuffle-data").on("click", function () {
  data = _.shuffle(data);
  chartData = data.slice();
  displayData();
});

$("#uniq-data").on("click", function () {
  data = _.uniq(data);
  chartData = data.slice();
  displayData();
});

$("#compact-data").on("click", function () {
  data = _.compact(data);
  chartData = data.slice();
  displayData();
});

$("#initial-data").on("click", function () {
  data = _.initial(data);
  chartData = data.slice();
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
        data: chartData,
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)", "rgba(255, 206, 86, 0.2)", "rgba(75, 192, 192, 0.2)", "rgba(153, 102, 255, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 1)", "rgba(75, 192, 192, 1)", "rgba(153, 102, 255, 1)"],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

$("#add-to-graph").on("click", function () {
  myChart.data.datasets[0].data = chartData;
  myChart.update();
});
