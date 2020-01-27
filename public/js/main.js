class Boss {
    constructor(nom, nbVie, nbAttaque) {
        this.nom = nom
        this.nbVie = nbVie
        this.nbAttaque = nbAttaque
    }

}




class Heros {
    constructor(nom, nbVie, nbAttaque) {
        this.nom = nom
        this.nbVie = nbVie
        this.nbAttaque = nbAttaque

    }

    attaque() {
        this.nbAttaque = this.nbAttaque * 1.4
        this.nbVie = this.nbVie * 0.75
    }

    defense() {
        this.nbAttaque = this.nbAttaque * 0.5
        this.nbVie = this.nbVie * 2.5
    }
}

class Guerrier extends Heros {
    constructor(nom, nbVie, nbAttaque, nbRage) {
        super(nom, nbVie, nbAttaque);
        this.nbRage = nbRage;
        this.type = 'Guerrier';
        this.posture = '';
    }
}


class Mage extends Heros {
    constructor(nom, nbVie, nbAttaque, mana) {
        super(nom, nbVie, nbAttaque);
        this.mana = mana;
        this.type = 'Mage';
        this.posture = '';
    }

}

class Archer extends Heros {
    constructor(nom, nbVie, nbAttaque, nbFleches) {
        super(nom, nbVie, nbAttaque);
        this.nbFleches = nbFleches;
        this.type = 'Archer';
        this.posture = '';
    }

}




let Sauron = new Boss('Sauron', 200, 75)
let Chronos = new Boss('Chronos', 200, 80)
let Lilith = new Boss('Lilith', 250, 70)
let tabBoss = [Sauron, Chronos, Lilith]
let bossChoice = Math.round(Math.random() * 2)
let the_boss = tabBoss[bossChoice]
let choice;
let pseudo;
let perso;
let bot1;
let bot2;
let mana, fleches;
let posture;

// Demande du choix de héros
do {
    choice = prompt("Choix du héros ! Guerrier, Mage ou Archer ?")
    choice = choice.charAt().toUpperCase() + choice.substr(1).toLowerCase()
    console.log(choice)
} while (choice == "" || (choice != "Guerrier" && choice != "Mage" && choice != "Archer"))

// Demande d'un pseudo
do {
    pseudo = prompt("Quel pseudo choisissez-vous ?")
    pseudo = pseudo.charAt().toUpperCase() + pseudo.substr(1).toLowerCase()
} while (pseudo == "")


let tabMana = [9, 7, 11]
let nbMana = Math.round(Math.random() * 2)
console.log(nbMana)

let tabFleches = [7, 8, 9, 10, 11]
let nombreFleches = Math.round(Math.random() * 4)
console.log(nombreFleches)


//Création du héros et des bots
switch (choice) {
    case "Guerrier":
        perso = new Guerrier(pseudo, 200, 35, 0);
        mana = tabMana[nbMana];
        bot1 = new Mage('Bot1', 210, 40, mana);
        fleches = tabFleches[nombreFleches];
        bot2 = new Archer('Bot2', 195, 30, fleches);
        break;
    case "Mage":
        mana = tabMana[nbMana];
        perso = new Mage(pseudo, 210, 40, mana);
        bot1 = new Guerrier('Bot1', 200, 35, 0);
        fleches = tabFleches[nombreFleches];
        bot2 = new Archer('Bot2', 195, 30, fleches);
        break;
    case "Archer":
        fleches = tabFleches[nombreFleches];
        perso = new Archer(pseudo, 195, 30, fleches);
        mana = tabMana[nbMana];
        bot1 = new Mage('Bot1', 210, 40, mana);
        bot2 = new Guerrier('Bot2', 200, 35, 0);
        break;
}

console.log(perso);

alert("Le Boss est de la partie est " + the_boss.nom);
alert(perso.nom + " est un " + perso.type + "\n" + bot1.nom + " est un " + bot1.type + "\n" + bot2.nom + " est un " + bot2.type + "\n")

// Demande de la posture 
do {
    posture = prompt('Quelle posture choisissez-vous :\n - Attaque\n - Défense\n - Normale')
    posture = posture.charAt().toUpperCase() + posture.substr(1).toLowerCase()
    console.log(choice)
} while (posture == "" || (posture != "Attaque" && posture != "Défense" && posture != "Normale"))

// Activation de la posture
switch (posture) {
    case "Attaque":
        perso.attaque();
        perso.posture = posture
        alert(perso.nom + " est passé en mode " + perso.posture)
        break;
    case "Défense":
        perso.defense();
        perso.posture = posture;
        alert(perso.nom + " est passé en mode " + perso.posture)
        break;
    default:
        perso.posture = posture
        alert(perso.nom + " est passé en mode " + perso.posture)
}

let tabPerso = [perso, bot1, bot2]

function attaquer_boss() {
    let i = 0;
    while (the_boss.nbVie > 0 && i < tabPerso.length) {
        alert(tabPerso[i].nom + " attaque le boss !")
        the_boss.nbVie -= tabPerso[i].nbAttaque;
        if(the_boss.nbVie > 0){
            alert("Le boss a perdu " + tabPerso[i].nbAttaque + " PV !\nIl lui reste " + the_boss.nbVie + " PV")
        }else{
            alert('Le boss est mort')
        }
        
        if (the_boss.nbVie <= 20 && the_boss.nbVie >0 ) {
            poserEnigme()
        }
        i++
    }


}



function attaque_du_boss() {
    let i = 2;
    let at = Math.round(Math.random() * i)


    alert("Le boss attaque " + tabPerso[at].nom)
    tabPerso[at].nbVie -= the_boss.nbAttaque
    if (tabPerso[at].nbVie > 0) {
        alert(tabPerso[at].nom + " a perdu " +
            the_boss.nbAttaque + " PV !\nIl lui reste " + tabPerso[at].nbVie + " PV ")
    } else {
        alert(tabPerso[at].nom + " est mort !");
        tabPerso.splice(at, 1);
        i--;
    }


    // alert("Le boss attaque " + tabPerso[at].nom)
    // tabPerso[at].nbVie -= the_boss.nbAttaque
    // alert(tabPerso[at].nom + " a perdu " + the_boss.nbAttaque + " PV !\nIl lui reste " + tabPerso[at].nbVie + " PV ")
}

let choixEnig = Math.round(Math.random() * 2)
let essais = 2

function poserEnigme() {
    let enigme1 = "Une fois que l'on me prononce, je n'existe plus. Qui suis-je ?"
    let enigme2 = "Je suis d'eau,je suis d'air,et je suis d'électricité. Qui suis-je"
    let enigme3 = "Pour moi l'accouchement est avant la grossesse, l'enfance avant la naissance, l'adolescence avant l'enfant, la mort avant la vie. Qui suis-je?"

    let reponse1 = "silence"
    let reponse2 = "courant"
    let reponse3 = "dictionnaire"

    let tabEnigme = [enigme1, enigme2, enigme3]
    let tabReponse = [reponse1, reponse2, reponse3]


    let question;

    do {
        question = prompt(tabEnigme[choixEnig]);
        essais--;
    } while ((question != tabReponse[choixEnig]) && essais > 0)
    if (essais == 0) {
        perso.nbVie = 0
        bot1.nbVie = 0
        bot2.nbVie = 0
    }

}
do {
    attaquer_boss()
    if (the_boss.nbVie > 0) {
        attaque_du_boss()
        
    }


} while ((the_boss.nbVie > 0) && (tabPerso.includes(perso) || tabPerso.includes(bot1) || tabPerso.includes(bot2)))

if (the_boss.nbVie > 0 && tabPerso.length == 0) {
    alert('Game Over !')
} else {
    alert('Vous avez gagné')
}