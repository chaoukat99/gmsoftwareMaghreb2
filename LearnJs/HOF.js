// HOF methodes qui facilite la manipulation des données en se basant sur les tableaux []



// syntax :  tableauOriginale.hof((el,i)=>traitement)

// Map: transfome les donné retourne un tableau 
// find : elle cherche un élement et il le retourne 
// filter : elle cherche plusieurs elément et les retourner  []
// foreach : c'est comme une boucle for qui se base sur les tableaux




// let arr=["Salim","Karim","Sabir"]

// map (elle transforme les élement du tableau et il retourne un nouveau tableau )

// let newarr=arr.map((el,i)=>"Mr "+el+" Merci bcp")   // [] type de retourne
// console.log(newarr)
// tab ["Mr Salim","Mr Karim","Mr Sabir "]


// ["SALIM","KARIM","SABIR"]
// let newarr=[] ;

// for(let i of arr){
//     newarr.push("Mr "+i);
// }


// console.log(newarr)


// let upperlist=arr.map((el,i)=>el.toUpperCase());

// console.log(upperlist)


// find methode qui retourne le premier elément qui valide une condition 


// let numbers=[12,11,6,-8,128,25,23];

let users=[
    {
      username:"salim00",
      password:"salim123"
    },
    {
      username:"brahim",
      password:"brahim123"
    },
    {
      username:"sanae",
      password:"sanae123"
    },
]


let userfinder=users.find((el,i)=>el.username=="sanae" && el.password=="sanae123")

// if(userfinder!=undefined){
//     console.log("Connécté")
// }else{
//     console.log("Déconnecté")
// }


// let numbers=[12,11,6,-8,128,25,23];
// il faut écrire un code qui cherche si l'utlisateur qui a le username sanae et le mot de passe sanae123 existe sur le tableau 

// le message a affiché connecté ou deconnecté

// let searchedValue=numbers.find((el,i)=>el>15 && el<23);

// console.log(searchedValue);


// let arr=["Salim","Karim","Sabir"];


// let value ="";

// for(let i of arr){
//     if(i.split("")[i.split("").length-1]=="r"){
//         value=i
//         break;
//     }

// }

// console.log(value);



// let value=arr.find((el,i)=>el.endsWith("r"));
// console.log(value)






// filter elle retourne un tableau des valeurs qui valide une condition

let prices=[40,12,11,6,9];


// créer un programme qui va génerer un tableau des prix paires et un tableau des prix impaires 
// let pairarr=prices.filter((el,i)=>el%2==0);
// console.log("Nombres pairs ")

// console.log(pairarr)
// let impairarr=prices.filter((el,i)=>el%2!=0);
// console.log("Nombres Impairs ")
// console.log(impairarr)


// [700,1300]

// let fileterdarr=prices.filter((el,i)=>el>=700 && el<=1300);

// console.log(fileterdarr);

// findindex


// foreach 

let villes=["Casablanca","Rabat","Fes","Oujda"];


villes.forEach((el,i)=>console.log(`Je suis a ${el} maintenant`))





// reduce