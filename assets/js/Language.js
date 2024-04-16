// Get the select element
const selectLanguage = document.querySelector(".select-language");

// Add event listener to detect changes in the select element
selectLanguage.addEventListener("change", function () {
	if (this.value === "fr") {
		document.querySelector("html").setAttribute("lang", "fr");
		document.getElementById("1").innerText = "Accueil";
		document.getElementById("2").innerText = "Présentation";
		document.getElementById("3").innerText = "Parcours";
		document.getElementById("4").innerText = "Projets";
		document.getElementById("5").innerText = "Contact";
		document.getElementById("6").innerText = "Développeur";
		document.getElementById("7").innerText = "Présentation";
		document.getElementById("8").innerText =
			"Bonjour, je m'appelle Luidgi GAUDIN, j'ai 18 ans et je suis actuellement en BTS SIO en alternance. J'aimerais me spécialiser dans le développement web, mais je maîtrise également le développement d'applications.";
		document.getElementById("9").innerText =
			"Developpeur APP & Developpeur WEB.";
		document.getElementById(
			"11"
		).innerHTML = `<i class="bi bi-chevron-right"></i> <strong>Date de naissance:</strong> <span>16 Juillet 2005 </span>`;
		document.getElementById(
			"12"
		).innerHTML = `<i class="bi bi-chevron-right"></i> <strong>Tel:</strong> <span>+33 6 20 00 78 30</span>`;
		document.getElementById(
			"13"
		).innerHTML = `<i class="bi bi-chevron-right"></i> <strong>Ville:</strong><span>Mornant, 69440, France</span>`;
		document.getElementById(
			"14"
		).innerHTML = `<i class="bi bi-chevron-right"></i> <strong>Permis:</strong><span>B et AM </span>`;
		document.getElementById(
			"15"
		).innerHTML = `<i class="bi bi-chevron-right"></i> <strong>Age:</strong><span>18 ANS</span>`;
		document.getElementById(
			"16"
		).innerHTML = `<i class="bi bi-chevron-right"></i> <strong>Niveau d'étude:</strong> <span>Bac +2</span>`;
		document.getElementById(
			"17"
		).innerHTML = `<i class="bi bi-chevron-right"></i> <strong>Adresse mail:</strong><span>luidgi.gaudin@gmail.com </span>`;
		document.getElementById(
			"18"
		).innerHTML = `<i class="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Indisponible</span>`;
		document.getElementById("19").innerText =
			"Languages informatiques maîtrisés";
		document.getElementById("21").innerText = "Parcours";
		document.getElementById("22").innerText = "Résumé";
		document.getElementById("23").innerText =
			"Je suis jeune et motivé. Mon objectif à terme serait d'avoir ma propre entreprise de développement Web proposant des formations pour aider les gens à comprendre et utiliser la technologie plutôt que d'en avoir peur, idéalement à l'échelle internationale.";
		document.getElementById("24").innerText = "Études";
		document.getElementById("25").innerText =
			"École privée supérieure en alternance avec un rythme de 2 semaines de formation et 3 semaines en entreprise. J'ai choisi l'option SLAM (Développement).";
		document.getElementById("26").innerText =
			"Lycée privé catholique où j'ai choisi cette filière pour sa pratique, car rien n'apprend mieux que la pratique. Dans cette filière, nous avions le choix entre deux spécialités : Architecture ou Développement Durable. J'ai choisi cette dernière par passion pour l'automatisation des tâches.";
		document.getElementById("27").innerText = "Expériences Professionnelles";
		document.getElementById("28").innerText =
			"Développeur Web Junior en alternance";
		document.getElementById("29").innerText = "2023 - Maintenant";
		document.getElementById("30").innerText =
			"C'est une entreprise de financement basée à Saint-Étienne qui se spécialise dans la location longue durée (LLD).";
		document.getElementById("31").innerText =
			"Je suis au service informatique où nous travaillons sur la refonte de l'intranet et de l'extranet.";
		document.getElementById("32").innerText =
			"Notre objectif est de simplifier les outils pour les utilisateurs et de fournir un support technique en cas de problème.";
		document.getElementById("33").innerText = "Job étudiant";
		document.getElementById("34").innerText = "Assistance de Particulier";
		document.getElementById("35").innerText =
			"J'ai effectué plusieurs jobs étudiants pour gagner en autonomie, mais pas au sein d'entreprises.";
		document.getElementById("36").innerText =
			"J'ai aidé les personnes âgées de mon village ainsi que les jeunes parents trop occupés pour s'occuper de leurs enfants.";
		document.getElementById("37").innerText =
			"Par exemple, j'ai transporté des rondins de bois depuis une forêt jusqu'à la maison d'une personne âgée avant l'hiver.";
		document.getElementById("38").innerText =
			"J'ai également fait du baby-sitting, de la réparation d'ordinateurs pour des proches et d'autres tâches.";
		document.getElementById("39").innerText =
			"Ici se trouvent tous les projets que j'ai réalisés, qu'ils soient dans le cadre de ma formation ou en dehors.";
		document.getElementById("40").innerText = "Tous";
		document.getElementById("41").innerText =
			"Vous aurez ici plusieurs manières de me contacter. Vous avez le choix entre mail direct, mail via le formuaire ou numéro de téléphone.";
		document.getElementById("42").innerText = "Adresse :";
		document.getElementById("43").innerText = "Téléphone :";
		document.getElementById("44").innerText = "Votre nom et prénom :";
		document.getElementById("45").innerText = "Votre email :";
		document.getElementById("46").innerText = "Votre message :";
		document.getElementById("47").innerText = "Envoyer le message";
		document.getElementById("48").innerText = "Contact";
		document.getElementById("49").innerText = "Objet :";
		document.getElementById("btn-cv").innerText = "Télécharger le CV";
	}
	if (this.value === "en") {
		document.querySelector("html").setAttribute("lang", "en");
		document.getElementById("1").innerText = "Home";
		document.getElementById("2").innerText = "About";
		document.getElementById("3").innerText = "Summary";
		document.getElementById("4").innerText = "Projects";
		document.getElementById("5").innerText = "Contact";
		document.getElementById("6").innerText = "Developper";
		document.getElementById("7").innerText = "About";
		document.getElementById("8").innerText =
			"Hello, my name is Luidgi GAUDIN, I am 18 years old and I am currently in BTS SIO in alternation. I would like to specialize in web development, but I also master application development.";
		document.getElementById("9").innerText = "APP Developer & WEB Developer.";
		document.getElementById(
			"11"
		).innerHTML = `<i class="bi bi-chevron-right"></i> <strong>Date of birth:</strong> <span>July 16, 2005 </span>`;
		document.getElementById(
			"12"
		).innerHTML = `<i class="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+33 6 20 00 78 30</span>`;
		document.getElementById(
			"13"
		).innerHTML = `<i class="bi bi-chevron-right"></i> <strong>City:</strong><span>Mornant, 69440, France</span>`;
		document.getElementById(
			"14"
		).innerHTML = `<i class="bi bi-chevron-right"></i> <strong>Driving license:</strong><span>B and AM </span>`;
		document.getElementById(
			"15"
		).innerHTML = `<i class="bi bi-chevron-right"></i> <strong>Age:</strong><span>18 YEARS</span>`;
		document.getElementById(
			"16"
		).innerHTML = `<i class="bi bi-chevron-right"></i> <strong>Education level:</strong> <span>Bac +2</span>`;
		document.getElementById(
			"17"
		).innerHTML = `<i class="bi bi-chevron-right"></i> <strong>Email address:</strong><span>luidgi.gaudin@gmail.com </span>`;
		document.getElementById(
			"18"
		).innerHTML = `<i class="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Unavailable</span>`;
		document.getElementById("19").innerText = "Mastered computer languages";
		document.getElementById("21").innerText = "Summary";
		document.getElementById("22").innerText = "resume";
		document.getElementById("23").innerText =
			"I am young and motivated. My ultimate goal would be to have my own web development company offering training to help people understand and use technology rather than fear it, ideally on an international scale.";
		document.getElementById("24").innerText = "Studies";
		document.getElementById("25").innerText =
			"Private higher school in alternation with a rhythm of 2 weeks of training and 3 weeks in the company. I chose the SLAM option (Development).";
		document.getElementById("26").innerText =
			"Private catholic high school where I chose this course for its practice, because nothing learns better than practice. In this course, we had the choice between two specialties: Architecture or Sustainable Development. I chose the latter out of passion for task automation.";
		document.getElementById("27").innerText = "Professional Experiences";
		document.getElementById("28").innerText =
			"Junior Web Developer in alternation";
		document.getElementById("29").innerText = "2023 - now";
		document.getElementById("30").innerText =
			"It is a financing company based in Saint-Étienne specializing in long-term rental (LLD).";
		document.getElementById("31").innerText =
			"I am in the IT department where we are working on the redesign of the intranet and extranet.";
		document.getElementById("32").innerText =
			"Our goal is to simplify the tools for users and provide technical support in case of problems.";
		document.getElementById("33").innerText = "Student job";
		document.getElementById("34").innerText = "Private Assistance";
		document.getElementById("35").innerText =
			"I have done several student jobs to gain autonomy, but not within companies.";
		document.getElementById("36").innerText =
			"I helped the elderly in my village as well as young parents too busy to take care of their children.";
		document.getElementById("37").innerText =
			"For example, I transported logs from a forest to the house of an elderly person before winter.";
		document.getElementById("38").innerText =
			"I also did babysitting, computer repair for relatives and other tasks.";
		document.getElementById("39").innerText =
			"Here are all the projects I have carried out, whether as part of my training or outside.";
		document.getElementById("40").innerText = "All";
		document.getElementById("41").innerText =
			"Here you will have several ways to contact me. You have the choice between direct mail, mail via the form or phone number.";
		document.getElementById("42").innerText = "Address :";
		document.getElementById("43").innerText = "Phone :";
		document.getElementById("44").innerText = "Your name and surname :";
		document.getElementById("45").innerText = "Your email :";
		document.getElementById("46").innerText = "Your message :";
		document.getElementById("47").innerText = "Send the message";
		document.getElementById("48").innerText = "Contact";
		document.getElementById("49").innerText = "Subject :";
		document.getElementById("btn-cv").innerText = "Download the CV";
	}

	if (this.value === "es") {
		document.querySelector("html").setAttribute("lang", "es");
		document.getElementById("1").innerText = "Inicio";
		document.getElementById("2").innerText = "Sobre";
		document.getElementById("3").innerText = "Resumen";
		document.getElementById("4").innerText = "Proyectos";
		document.getElementById("5").innerText = "Contacto";
		document.getElementById("6").innerText = "Desarrollador";
		document.getElementById("7").innerText = "Sobre";
		document.getElementById("8").innerText =
			"Hola, mi nombre es Luidgi GAUDIN, tengo 18 años y actualmente estoy en BTS SIO en alternancia. Me gustaría especializarme en desarrollo web, pero también domino el desarrollo de aplicaciones.";
		document.getElementById("9").innerText =
			"Desarrollador de APP y Desarrollador WEB.";
		document.getElementById(
			"11"
		).innerHTML = `<i class="bi bi-chevron-right"></i> <strong>Fecha de nacimiento:</strong> <span>16 de julio de 2005 </span>`;
		document.getElementById(
			"12"
		).innerHTML = `<i class="bi bi-chevron-right"></i> <strong>Teléfono:</strong> <span>+33 6 20 00 78 30</span>`;
		document.getElementById(
			"13"
		).innerHTML = `<i class="bi bi-chevron-right"></i> <strong>Ciudad:</strong><span>Mornant, 69440, Francia</span>`;
		document.getElementById(
			"14"
		).innerHTML = `<i class="bi bi-chevron-right"></i> <strong>Permiso de conducir:</strong><span>B y AM </span>`;

		document.getElementById(
			"15"
		).innerHTML = `<i class="bi bi-chevron-right"></i> <strong>Edad:</strong><span>18 AÑOS</span>`;
		document.getElementById(
			"16"
		).innerHTML = `<i class="bi bi-chevron-right"></i> <strong>Nivel de estudios:</strong> <span>Bac +2</span>`;
		document.getElementById(
			"17"
		).innerHTML = `<i class="bi bi-chevron-right"></i> <strong>Correo electrónico:</strong><span> luidgi.gaudin@gmail.com </span>`;
		document.getElementById(
			"18"
		).innerHTML = `<i class="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Indisponible</span>`;
		document.getElementById("19").innerText = "Idiomas informáticos dominados";
		document.getElementById("21").innerText = "Resumen";
		document.getElementById("22").innerText = "resumen";
		document.getElementById("23").innerText =
			"Soy joven y motivado. Mi objetivo final sería tener mi propia empresa de desarrollo web que ofrezca formación para ayudar a las personas a comprender y utilizar la tecnología en lugar de temerla, idealmente a escala internacional.";
		document.getElementById("24").innerText = "Estudios";
		document.getElementById("25").innerText =
			"Escuela superior privada en alternancia con un ritmo de 2 semanas de formación y 3 semanas en la empresa. Elegí la opción SLAM (Desarrollo).";
		document.getElementById("26").innerText =
			"Liceo privado católico donde elegí este curso por su práctica, porque nada aprende mejor que la práctica. En este curso, teníamos la opción entre dos especialidades: Arquitectura o Desarrollo Sostenible. Elegí esta última por pasión por la automatización de tareas.";
		document.getElementById("27").innerText = "Experiencias profesionales";
		document.getElementById("28").innerText =
			"Desarrollador Web Junior en alternancia";
		document.getElementById("29").innerText = "2023 - ahora";
		document.getElementById("30").innerText =
			"Es una empresa de financiamiento con sede en Saint-Étienne especializada en alquiler a largo plazo (LLD).";
		document.getElementById("31").innerText =
			"Estoy en el departamento de informática donde estamos trabajando en la rediseño del intranet y extranet.";
		document.getElementById("32").innerText =
			"Nuestro objetivo es simplificar las herramientas para los usuarios y proporcionar soporte técnico en caso de problemas.";
		document.getElementById("33").innerText = "Trabajo de estudiante";
		document.getElementById("34").innerText = "Asistencia privada";
		document.getElementById("35").innerText =
			"He hecho varios trabajos de estudiante para ganar autonomía, pero no dentro de empresas.";
		document.getElementById("36").innerText =
			"Ayudé a los ancianos de mi pueblo y a los padres jóvenes demasiado ocupados para cuidar a sus hijos.";
		document.getElementById("37").innerText =
			"Por ejemplo, transporté troncos de un bosque a la casa de una persona mayor antes del invierno.";
		document.getElementById("38").innerText =
			"También hice de canguro, reparé computadoras para familiares y otras tareas.";
		document.getElementById("39").innerText =
			"Aquí están todos los proyectos que he realizado, ya sea como parte de mi formación o fuera de ella.";
		document.getElementById("40").innerText = "Todos";
		document.getElementById("41").innerText =
			"Aquí tendrás varias formas de contactarme. Tienes la opción entre correo directo, correo a través del formulario o número de teléfono.";
		document.getElementById("42").innerText = "Dirección :";
		document.getElementById("43").innerText = "Teléfono :";
		document.getElementById("44").innerText = "Tu nombre y apellido :";
		document.getElementById("45").innerText = "Tu email :";
		document.getElementById("46").innerText = "Tu mensaje :";
		document.getElementById("47").innerText = "Enviar el mensaje";
		document.getElementById("48").innerText = "Contacto";
		document.getElementById("49").innerText = "Sujecto :";
		document.getElementById("btn-cv").innerText = "Descargar el CV";
	}
});
