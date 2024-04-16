function CreateAllCars() {
	return [
		{
			serie: "Serie 3",
			modele: "320 D",
			annee: 2011,
			puissance: 163,
			kilometrage: 12700,
			carburant: "Diesel",
			neuf: false,
			occasion: true,
		},
		{
			serie: "Serie 5",
			modele: "M5",
			annee: 2018,
			puissance: 600,
			kilometrage: 12000,
			carburant: "Essence",
			neuf: false,
			occasion: true,
		},
		{
			serie: "X5",
			modele: "X5 M50d",
			annee: 2017,
			puissance: 281,
			kilometrage: 11000,
			carburant: "Diesel",
			neuf: false,
			occasion: true,
		},
	];
}

function GetAllCars() {
	let cars = CreateAllCars();
	return cars;
}

const categorie = [
	"serie",
	"modele",
	"annee",
	"puissance",
	"kilometrage",
	"carburant",
	"neuf",
	"occasion",
];

const tableau = document.getElementById("tbody");

let car_number = 0;

function ShowAllCars() {
	let cars = GetAllCars();
	cars.forEach(function (car) {
		const row = tableau.insertRow();
		for (let i = 0; i < 6; i++) {
			let cell = row.insertCell(i);
			cell.innerHTML = car[categorie[i]];
		}
		let etat = car.neuf ? "Neuf" : "Occasion";
		let cell7 = row.insertCell(6);
		let cell8 = row.insertCell(7);
		cell7.innerHTML = etat;
		cell8.innerHTML = `<button class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#popup" onclick="popupEdit(event)"><i class="bi bi-pencil-square"></i></button> <button class="btn btn-dark" onclick="DeleteCar()"><i class="bi bi-trash"></i></button>`;
		car_number++;
	});
}

ShowAllCars();
document.getElementById("car_number").innerHTML = car_number;

function AddCar() {
	let new_car = {};
	for (let i = 0; i < 6; i++) {
		new_car[categorie[i]] = document.getElementById(categorie[i]).value;
	}
	new_car["neuf"] = document.getElementById("neuf").checked;
	new_car["occasion"] = document.getElementById("occasion").checked;

	const row = tableau.insertRow();
	for (let i = 0; i < 6; i++) {
		let cell = row.insertCell(i);
		cell.innerHTML = new_car[categorie[i]];
	}
	let etat = new_car.neuf ? "Neuf" : "Occasion";
	let cell7 = row.insertCell(6);
	let cell8 = row.insertCell(7);
	cell7.innerHTML = etat;
	cell8.innerHTML = `<button class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#popup" onclick="popupEdit(event)"><i class="bi bi-pencil-square"></i></button> <button class="btn btn-dark" onclick="DeleteCar()"><i class="bi bi-trash"></i></button>`;
	car_number++;
	document.getElementById("car_number").innerHTML = car_number;
}

function DeleteCar() {
	let confirmation = confirm("Voulez-vous vraiment supprimer cette voiture ?");
	if (confirmation) {
		let row = event.target.closest("tr");
		row.parentNode.removeChild(row);
		car_number--;
		document.getElementById("car_number").innerHTML = car_number;
	}
}

function popupEdit(event) {
	document.getElementById("titrePopup").innerHTML = "Modifier une voiture";
	document.getElementById(
		"btn_enreg"
	).innerHTML = `<button type="button" class="btn btn-primary" data-bs-dismiss="modal" id="save" onclick="UpdateCar()">Modifier</button>`;

	let row = event.target.closest("tr");
	let cells = row.cells;

	document.getElementById("serie").value = cells[0].innerText;
	document.getElementById("modele").value = cells[1].innerText;
	document.getElementById("annee").value = parseInt(cells[2].innerText);
	document.getElementById("puissance").value = parseInt(cells[3].innerText);
	document.getElementById("kilometrage").value = parseInt(cells[4].innerText);

	let carburant = document.getElementById("carburant");
	for (let i = 0; i < carburant.options.length; i++) {
		if (carburant.options[i].text === cells[5].innerText) {
			carburant.selectedIndex = i;
			break;
		}
	}

	document.getElementById("neuf").checked = cells[6].innerText === "Neuf";
	document.getElementById("occasion").checked =
		cells[6].innerText === "Occasion";

	selectedRow = event.target.closest("tr");
}

function UpdateCar() {
	let new_car = {};
	for (let i = 0; i < 7; i++) {
		new_car[categorie[i]] = document.getElementById(categorie[i]).value;
	}
	new_car["neuf"] = document.getElementById("neuf").checked;

	for (let i = 0; i < 7; i++) {
		selectedRow.cells[i].innerHTML = new_car[categorie[i]];
	}
	selectedRow.cells[6].innerHTML = new_car.neuf ? "Neuf" : "Occasion";
}

function popupAdd() {
	document.getElementById("titrePopup").innerHTML = "Ajouter une voiture";
	document.getElementById(
		"btn_enreg"
	).innerHTML = `<button type="button" class="btn btn-primary" data-bs-dismiss="modal" id="save" onclick="AddCar()">Ajouter</button>`;
	document.getElementById("serie").value = "";
	document.getElementById("modele").value = "";
	document.getElementById("annee").value = "";
	document.getElementById("puissance").value = "";
	document.getElementById("kilometrage").value = "";
	document.getElementById("carburant").selectedIndex = 0;
	document.getElementById("neuf").checked = false;
	document.getElementById("occasion").checked = false;
}

document.getElementById("search").addEventListener("keyup", function () {
	let searchValue = this.value.toLowerCase();
	let rows = document.querySelectorAll("#tableau tr");

	for (let i = 1; i < rows.length; i++) {
		// Start from 1 to avoid the header
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
