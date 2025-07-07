🧠 JavaScript - DOM Manipulation (main.js)

✅ Sélecteurs DOM
	- document.getElementById("id")
	- document.getElementsByClassName("class")
	- document.getElementsByTagName("tag")
	- document.querySelector("selector")
	- document.querySelectorAll("selector")

🧩 Modification de styles
	- element.style.property = "value"
	- Exemples :
	- style.color
	- style.textDecoration
	- style.boxShadow
	- style.backgroundColor

✍️ Modification du contenu
	- element.textContent = "..." : Modifier le texte d’un élément.

	- element.innerHTML = "..." : Injecter du HTML dans un conteneur.

⚙️ Attributs HTML
	- element.setAttribute("attribut", "valeur")
	- Exemple : changer l’attribut href d’un lien.

🛠️ Création et insertion d’éléments
	- document.createElement("tag") : Créer un nouvel élément.
	- parentElement.appendChild(element) : Ajouter un élément dans un conteneur.

⸻

🖱️ Gestion des événements
	- addEventListener("click", callback) : Ajouter un écouteur d’événement au clic.
	- addEventListener("mouseover", callback) : Événement au survol de la souris.
	- addEventListener("mouseout", callback) : Événement quand la souris quitte l’élément.
	- classList.toggle("className") : Ajoute ou enlève une classe CSS à un élément.

    Un callback (ou fonction de rappel) est une fonction que l’on passe en argument à une autre fonction, pour qu’elle soit exécutée plus tard, à un moment précis — ici, lorsque l’événement " click " ou " mouseover " se produit

⸻

📁 Fichiers impliqués
	- index.html : Structure HTML.
	- style.css : Style de la page.
	- main.js : Manipulations DOM, interaction utilisateur.