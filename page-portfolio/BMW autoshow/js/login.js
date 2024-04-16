let correctmail = "test@test.fr";
let correctpassword = "test";

document.querySelector("form").addEventListener("submit", function (event) {
	event.preventDefault();

	let email = document.getElementById("email").value;
	let password = document.getElementById("password").value;

	if (email === correctmail) {
		if (password === correctpassword) {
			document.body.innerHTML = `
<head>
    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background-color: #343A40;
        }
    </style>
</head>

<body>

    <div style="align-self: center;">
        <img id="engrenage" src="images/engrenage.gif" alt="Engrenage" width=200rem/>
    </div>


</body>
`;
			setTimeout(() => {
				window.location.href = "dashboard.html";
			}, 1000);
		} else {
			document.getElementById("mess_alerte").style.display = "block";
			document.getElementById("alerte").innerHTML = "Mot de passe incorrect !";
		}
	} else {
		document.getElementById("alerte").innerHTML = "Email incorrect !";
		document.getElementById("mess_alerte").style.display = "block";
	}
});

function SaveNewLogs() {
	let emailNew = document.getElementById("emailChange").value;
	let passwordNew = document.getElementById("passwordChange").value;

	correctmail = emailNew;
	correctpassword = passwordNew;

	alert("Vos identifiants ont bien été modifiés !");
}
