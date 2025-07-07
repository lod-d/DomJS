
const title = document.getElementById('title');
title.style.color = 'white';

const list = document.getElementsByClassName('list');
console.log(list);

for (let i = 0; i < list.length; i++) {
    list[i].style.color = 'whitesmoke';
    list[i].style.textDecoration = 'none';
}

const title2 = document.getElementsByTagName('h2');
console.log(title2);

for (let i = 0; i < title2.length; i++) {
    title2[i].style.color = 'lightblue';
}


const btnArticle = document.querySelector('.btnArticle');
btnArticle.textContent = "Voir le nouveau contenu";

//** element.querySelectorAll récupérer tous les elements */
const btns = document.querySelectorAll('.btn');
console.log(btns);

/** foreach pour chaque element de la collection */
btns.forEach((btn) => {
    console.log(btn);
    btn.style.boxShadow = '0 0 10px 4px lightblue';
});

/* element.textContent */
const h1 = document.querySelector('h1');
h1.textContent = 'Nouveau titre modifié  avec textContent';

/* element.innerHTML */
const container_section = document.getElementById('container_section');
console.log(container_section);
container_section.innerHTML = `
                <articles>
                    <h2>Manipulation du contenu de la section</h2>
                    <p>DomJS manipulé</p>
                    <button class="btn">Cliquer pas ici ! </button>
                </articles>
            `;

/* element.STYLE.PROPERTY */
const btn = document.querySelector('.btn');
btn.style.boxShadow = '0 0 10px 4px orange';

/**
 * element.setAttribute('property', 'value')
*/
const link = document.getElementById('link');
link.setAttribute('href', 'https://www.google.com');


/** 
 * createElement
 * */
const newTitle = document.createElement('h2');
newTitle.textContent = `
    un nouveau titre
`;
/**element.insertBefore */
container_section.appendChild(newTitle);

/**
 * AddEventListener
 */

const myBtn = document.querySelector('#myBtn');
myBtn.addEventListener('click', () => {
    // console.log('Click sur le bouton');
    alert('click!');
    myBtn.classList.toggle('background-rebond');
});