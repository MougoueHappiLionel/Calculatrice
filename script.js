//DOM
const pav_num = [...document.querySelectorAll('.button')];
const listeKeycode = pav_num.map(touche => touche.dataset.key);
const ecran = document.querySelector('.ecran');


document.addEventListener('keydown', (e) => {
    const valeur = e.keyCode.toString();
    calculer(valeur);
})

document.addEventListener('click', (e) => {
    const valeur = e.target.dataset.key;
    calculer(valeur);
})

const calculer = (valeur) => {
    if (listeKeycode.includes(valeur)) {
        switch (valeur) {
            case '8' :
                ecran.textContent = "";
                break;
            case '13' :
                const calcul = eval(ecran.textContent);
                ecran.textContent = calcul;
                break;
            default :
                const indexKeycode = listeKeycode.indexOf(valeur);
                const touche = pav_num [indexKeycode];
                ecran.textContent += touche.innerHTML;
        }
    }
}

window.addEventListener('error', (e) => {
    alert('Une erreur est survenue lors de votre calcul ' +e.message)
})