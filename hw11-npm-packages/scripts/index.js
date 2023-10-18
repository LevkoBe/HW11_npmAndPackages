let data = [];
let chartData = [];
const letters = "0123456789ABCDEF";

function displayData() {
  $("#data-container").html(JSON.stringify(data));
}

displayData();

function updateChart() {
  chartData = data.slice();
  myChart.data.datasets[0].data = chartData;
  myChart.data.labels = chartData;
  let transparency = "";
  for (let i = 0; i < 2; i++) {
    transparency += letters[Math.floor(Math.random() * 16)];
  }
  const randomColors = chartData.map(() => getRandomColor(transparency));
  myChart.data.datasets[0].backgroundColor = randomColors;
  myChart.data.datasets[0].borderColor = randomColors;
  myChart.update();
}

function getRandomColor(transparency) {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color + transparency;
}

$("#modify-data-button").on("click", function () {
  data = _.reverse(data);
  displayData();
  updateChart();
});

$("#generate-random-data").on("click", function () {
  let size = data.length > 5 ? data.length : 5;

  data = Array.from({ length: size }, () => Math.floor(Math.random() * 10));
  displayData();
  updateChart();
});

$("#chunk-data").on("click", function () {
  data = _.chunk(data, 2);
  chartData = data.flat();
  displayData();
  updateChart();
});

$("#sort-data").on("click", function () {
  data = _.sortBy(data);
  displayData();
  updateChart();
});

$("#shuffle-data").on("click", function () {
  data = _.shuffle(data);
  displayData();
  updateChart();
});

$("#uniq-data").on("click", function () {
  data = _.uniq(data);
  displayData();
  updateChart();
});

$("#compact-data").on("click", function () {
  data = _.compact(data);
  displayData();
  updateChart();
});

$("#initial-data").on("click", function () {
  data = _.initial(data);
  displayData();
  updateChart();
});

$("#last-data").on("click", function () {
  data = _.last(data, 2);
  displayData();
  updateChart();
});

$("#add-value").on("click", function () {
  data.push(Math.floor(Math.random() * 10));
  chartData.push(data[data.length - 1]);
  displayData();
  updateChart();
});

$("#remove-value").on("click", function () {
  data.pop();
  chartData.pop();
  displayData();
  updateChart();
});

$("#increase-array").on("click", function () {
  data = data.concat(data);
  displayData();
  updateChart();
});

$("#decrease-array").on("click", function () {
  data = data.slice(0, data.length / 2);
  displayData();
  updateChart();
});

let now = moment();
$("#current-time").text(now.format("MMMM Do YYYY, h:mm:ss a"));

let ctx = document.getElementById("myChart").getContext("2d");
let myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: [],
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
  updateChart();
});
