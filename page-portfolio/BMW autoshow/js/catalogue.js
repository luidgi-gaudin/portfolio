const tableau = document.getElementById("carTableBody");
const categorie = ["model", "year"];

function ShowCars(cars) {
	cars.forEach(function (car) {
		let row = tableau.insertRow();
		let cell1 = row.insertCell(0);
		let cell2 = row.insertCell(1);
		cell1.innerHTML = car.model;
		cell2.innerHTML = car.year;
	});
}

document.getElementById("search").addEventListener("keyup", function () {
	let searchValue = this.value.toLowerCase();
	let rows = document.querySelectorAll("#carTableBody tr");

	for (let i = 1; i < rows.length; i++) {
		let cells = rows[i].querySelectorAll("td");
		let found = false;

		for (const element of cells) {
			if (element.innerText.toLowerCase().includes(searchValue)) {
				found = true;
				break;
			}
		}

		rows[i].style.display = found ? "" : "none";
	}
});

$(document).ready(function () {
	$.getJSON(
		"https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/all-vehicles-model/records?select=model%2C%20year&where=make%20%3D%20%27BMW%27%20%20AND%20model%20LIKE%20%27%25m%25%27%20and%20year%20>2020&limit=100",
		function (data) {
			var cars = data.results;
			console.log(cars);
			ShowCars(cars);
		}
	);
});
