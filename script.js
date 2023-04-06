function changerTexte() {
	document.getElementsByTagName("p")[0].innerHTML = "Le texte a été changé !";
}

function changerCouleur() {
	document.getElementsByTagName("h1")[0].style.color = "green";
}

function basculerImage() {
	var image = document.getElementById("imgDiv");

	if (image.style.display === "none") {
		image.style.display = "block";
	} else {
		image.style.display = "none";
	}
}

function lancerAlerte() {
	alert("l'alerte est lancé !");
}