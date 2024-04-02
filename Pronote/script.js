const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const utilisateur = loginForm.utilisateur.value;
    const mdp = loginForm.mdp.value;

    if (utilisateur === "Prof" && mdp === "Prof") {
        alert("Vous etes connecté a Fakenote.");
        window.location.href='tableau.html'
    } else {
        loginErrorMsg.style.opacity = 1;
//easter egg personne y touche
	if (utilisateur === "Jagausorus" && mdp === "aero") {
        alert("Vous etes connecté a Fakenote.");
        window.location.href='tableau.html'
    } else {
        loginErrorMsg.style.opacity = 1;
    }
    }
})