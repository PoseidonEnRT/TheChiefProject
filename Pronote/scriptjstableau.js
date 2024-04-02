//Base de donnée des étudiants
localStorage.setItem('Joseph Danté', { absent: false });
localStorage.setItem('Jean Marc Bendy', { absent: false });
localStorage.setItem('Teemo Tétran', { absent: false });
localStorage.setItem('Olivier Atton', { absent: false });
localStorage.setItem('Moe Lester', { absent: false });
localStorage.setItem('Eli SeRueetLent', { absent: false });
localStorage.setItem('Rob Inmorel', { absent: false });
localStorage.setItem('Sachahère Icher', { absent: false });
localStorage.setItem('Natha Naël', { absent: false });
localStorage.setItem('Léola Roche', { absent: false });
localStorage.setItem('Alex ElGollo', { absent: false });

const checkboxList = document.getElementsByName('absent');
checkboxList.forEach(checkbox => {
  checkbox.addEventListener('change', event => {
    const studentName = event.target.parentNode.parentNode.childNodes[1].textContent + ''
  })
})

function downloadFilei() {
  // Récupérer tous les éléments de case à cocher qui sont cochés
  const checkboxes = document.querySelectorAll('input[name="absentinjustifier[]"]:checked');

  // Créer un tableau vide pour stocker les noms des élèves absents
  const absentsinjustifier = [];

  // Parcourir tous les éléments cochés et ajouter leur valeur (nom de l'élève) au tableau des absents
  checkboxes.forEach((checkbox) => {
    absentsinjustifier.push(checkbox.value);
  });

  // Générer le contenu du fichier texte en utilisant les noms des élèves absents séparés par des virgules
  const text = absentsinjustifier.join(',');

  // Créer un objet de lien de téléchargement
  const link = document.createElement('a');
  link.setAttribute('download', 'liste_absents_injustifier.txt');
  link.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  link.style.display = 'none';

  // Ajouter le lien à la page et cliquer dessus pour télécharger le fichier
  document.body.appendChild(link);
  link.click();

  // Supprimer le lien après le téléchargement
  document.body.removeChild(link);
}

function downloadFilej() {
  // Récupérer tous les éléments de case à cocher qui sont cochés
  const checkboxes = document.querySelectorAll('input[name="absentjustifier"]:checked');

  // Créer un tableau vide pour stocker les noms des élèves absents
  const absentjustifier = [];

  // Parcourir tous les éléments cochés et ajouter leur valeur (nom de l'élève) au tableau des absents
  checkboxes.forEach((checkbox) => {
    absentjustifier.push(checkbox.value);
  });

  // Générer le contenu du fichier texte en utilisant les noms des élèves absents séparés par des virgules
  const text = absentjustifier.join(',');

  // Créer un objet de lien de téléchargement
  const link = document.createElement('a');
  link.setAttribute('download', 'liste_absents_injustifier.txt');
  link.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  link.style.display = 'none';

  // Ajouter le lien à la page et cliquer dessus pour télécharger le fichier
  document.body.appendChild(link);
  link.click();

  // Supprimer le lien après le téléchargement
  document.body.removeChild(link);
}
