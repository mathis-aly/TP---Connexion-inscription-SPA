const btnConnexion = document.getElementById('connexion')
const btnInscription = document.getElementById('createAccount')
const logpage = document.getElementById('logpage')
const login = document.getElementById('login')
const newAcc = document.getElementById('newAcc')
const homepage = document.getElementById('homepage')



homepage.style.display = "none"
logpage.style.display = "block"
login.style.display = "none"
newAcc.style.display = "none"




function connexion() {

    if (getComputedStyle(login).display === "none") {

        homepage.style.display = "none"
        logpage.style.display = "none"
        login.style.display = "block";
        newAcc.style.display = "none";
    }

}

console.log("test")


function inscription() {

    if (getComputedStyle(newAcc).display === "none") {

        logpage.style.display = "none"
        homepage.style.display = "none"
        login.style.display = "none";
        newAcc.style.display = "block";
    }

}


btnConnexion.onclick = connexion
btnInscription.onclick = inscription