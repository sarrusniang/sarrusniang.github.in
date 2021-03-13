let soldeCompte
let buttonSenMoney = document.getElementById('senMoney')
let inputPhone = document.getElementById('inputPhone')
let existPhoneNumber = (element,value) => element == value
let index
let indexSecondNumero
let argentToTransfer
let securityCode
let tabNumeros = [
    "0695785621",
    "0657841236",
    "0658974152",
    "0696351475",
    "0652134679"
]
let tabComptes = [
    "1000",
    "2000",
    "3000",
    "4000",
    "5000"
]
let tabCodes = [
    "2016",
    "2017",
    "2018",
    "2019",
    "2020"
]

function menu(){
    let choice = prompt(
        "------MENU SENMONEY------\n"+
        "Taper le numéro du service choisi\n"+
        "1: Solde de mon compte\n"+
        "2: Transfert d'argent\n"+
        "3: Paiement de facture\n"+
        "4: Options\n\n")

    if(choice == 1){
        securityCode = entrerSecurityCode()
        if(securityCode == tabCodes[index]){
            afficherSolde()
        }else{
            alert("Le code entré n'est pas bon !")
        }
    }
    if(choice==2){
        transfertArgent();
    }
}

function entrerSecurityCode(){
    return prompt("Veuillez entrez le code de sécurité du compte\n\n")
}

function afficherSolde(){
    let choice = confirm(
        "Le solde de votre compte est "+ soldeCompte +
        "\nVoulez-vous retourner au menu ?")
    if(choice){
        menu()
    }
    
}

function transfertArgent(){
    indexSecondNumero = prompt("Vers quel compte voulez-vous transférer de l'argent ?\n\n") - 1
    let mineSecureCode = prompt("Entrez votre code :\n\n")
    if(mineSecureCode == tabCodes[index]){
        argentToTransfer = prompt("Combien voulez-vous transférer ?\n\n")
        if((tabComptes[index] - argentToTransfer) >= 0){
            tabComptes[index] = tabComptes[index] - argentToTransfer
            tabComptes[indexSecondNumero] = parseInt(tabComptes[indexSecondNumero]) + parseInt(argentToTransfer)
        }else{
            alert("Solde insuffisant !")
        }
    }
}

buttonSenMoney.addEventListener('click',() => {
    index = tabNumeros.findIndex((element) => element == inputPhone.value)
    if(index != -1){
        soldeCompte = tabComptes[index]
        menu();
    }else{
        alert("Ce numéro n'existe pas !")
    }
})
