// import { reverse } from "\\node_modules\\@types\\lodash\\index.d.ts";
// import { reverse } from "./node_modules/lodash/index.d.ts";
// import { reverse } from "lodash";
// import $ from "\\node_modules\\@types\\jquery\\index.d.ts";
// import $ from "jquery";

let data = [1, 2, 3, 4, 5];

// jQuery
function displayData() {
  $("#data-container").html(JSON.stringify(data));
}

displayData();

$("#modify-data-button").on("click", function () {
  // Lodash
  data = _.reverse(data);
  // data = reverse(data);
  displayData();
});
