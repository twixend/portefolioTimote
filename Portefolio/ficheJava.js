document.getElementById('infoForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Empêche la soumission du formulaire

    // Récupère les valeurs du formulaire
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;

    // Création d'une nouvelle ligne
    const table = document.getElementById('infoTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    // Ajoute des cellules pour le nom, l'email et l'âge
    const nameCell = newRow.insertCell(0);
    const emailCell = newRow.insertCell(1);
    const ageCell = newRow.insertCell(2);

    // Remplit les cellules avec les données du formulaire
    nameCell.innerHTML = name;
    emailCell.innerHTML = email;
    ageCell.innerHTML = age;

    // Réinitialise le formulaire après l'ajout des données
    document.getElementById('infoForm').reset();
});