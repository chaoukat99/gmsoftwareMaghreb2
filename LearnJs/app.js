// console.log("hello guys")



// let user="sara"

// user="Karim"
// let age=30


// let prénom="Omar"





// console.log(user)
// console.log(age)

// console.log(prénom)




// console.log("*".repeat(1000))



// console.log("Bonjour "+user)






// DRY(don't repeat yourself)


// let username="Mohammed" ;

// username="Malek";


// console.log("Bonjour "+username);





// console.log("Bonsoir "+username);





// console.log("Bon weekend "+username)




// const adminEmail="admin@gmail.com";
// let school="UIR";

// console.log(school);




// variable syntax : let nom_de_la_variable = valeur;



// let USER="Samir";



// let age=20;



// let user ="samir";



// constante// const nom_de_la_constante = valeur;



// Type de données en Js 




// let usernmae='Samir';  // String " " ' '



// let Email="samir@gmail.com";




// let city = "Casablanca"; 

// let city2="Rabat";

// let ville =city2 // 5

// console.log(ville);

// console.log(city.length)

// lenght c'est une propriété qui retourne la taille d'une chaîne de caractères(String)




// let user1="Imad";

// let user2="Youssef";



// let user3=user2; //   Youssef

// user3=user1;  // Imad

// console.log(user3);




// Number 

let age =10; // Number


let salary=20000.23; // Number 




// let year=20;


// console.log(year)



// let client=null;


// Boolean 


// let userIsConnected=false;





// let schoolName="Groupe scolaire Gomycode"; // String


// let courseCount=20;  // NUmber


// let MoyenneDeGroupe=15.7; // Number



// let EcolePrivée=false; // Boolean 



// let Trophée=null;





// Opérateurs

// -Arithmétique
// +  -  *  /  %  **


let number1=10;

let number2=2;


// console.log(number1**number2);



const TVA=20;



let produitHT=2000;


let prouits=produitHT+(produitHT*TVA/100)




// Déclarer deux variable de type Numeber et afficher la somme, la différence, le produit et le quotient de ces deux variables.




let nb1=50;
let nb2=0;


// console.log(nb1+nb2);

// console.log(nb1-nb2);

// console.log(nb1*nb2);


// console.log(nb1/nb2);


// console.log(nb1%nb2);


// Opérateur de comparaison


// < > <= >= == === != 



// console.log(num1!=num2)


// console.log("2000"===2000);




// Les Opérateurs logiques
  // && || !  
  let num1="20";
  let num2=20;
  
  
let email="Samir@gmail.com";

let password="Samir123";

let inputEmail="Samir@gmail.com";
let inputPassword="Samir123";

// console.log(email==inputEmail && password==inputPassword && num1===num2);   // true  && true  && false=> false

// true && true => true
// false && true => false
// true && false => false   
// false && false => false




// console.log("3"===3);



let numDIdentité="MA1223";



let passportId="MA1242";


// console.log(numDIdentité=="MA11223" || passportId=="MA1212"); 

            // true  || true  =>true 

            // true || false => true 

            // false || false => false




            
let a = 10 ;
let b = a+5;

let c=b-5*2;

let d=c+5*2




// let test3=  b%a!=0 || "25"===(c**2) && d+5>=a*2;
            // true || false=false

// let test = a>b || "hello".length!=c && d>=c;


// false ||  false && true   =false 

// console.log(test); // false

// console.log(b%a!=0 ); // false



// let test5=false;   // ! (Not)

// let test7=!(30==="30");

// console.log(test7); // true





// Control Flow 


// Les conditions 



const userAge=10;

// if(userAge>=18){
//     console.log("Vous êtes majeur");
// }

// if(userAge<18){
//     console.log("Vous êtes mineur");
// }


// if(condition){
//    // instructions à exécuter si la condition est vraie 
// }




// let username="samir9";
// let userPassword="Samir123";



// if(username=="samir99" && userPassword=="Samir123"){

//     console.log("utilisateur Trouvé avec succès");
// }




let day=10;


// des conditions basé sur la variable day pour afficher le jour de la semaine correspondant
// 1 => Lundi 
// 2 => Mardi


// if(day<1 || day >7){
//     console.log("Jour invalide");
// }

// if(day == 1){
//     console.log("Lundi");
    
// }

// if(day == 2){
//     console.log("Mardi");
    
// }
// if(day == 3){
//     console.log("Mercredi");
    
// }
// if(day == 4){
//     console.log("Jeudi");
    
// }
// if(day == 5){
//     console.log("Vendredi");
    
// }
// if(day == 6){
//     console.log("Samedi");
    
// }
// if(day == 7){
//     console.log("Dimanche");
    
// }




let userage=15;


// if(userage>=18){
//     console.log("Vous êtes majeur");
// }else{
//     console.log("Vous êtes mineur");
// }




//  nested if else 


day=3+10;


// if(day==1){
//     console.log("Lundi");
// }else if(day==2){
//     console.log("Mardi");
// }else if(day==3){
//     console.log("Mercredi");
// }else if(day==4){
//     console.log("Jeudi");
// }else if(day==5){
//     console.log("Vendredi");
// }else if(day==6){
//     console.log("Samedi");
// }else if(day==7){
//     console.log("Dimanche");
// }else{
//     console.log("Jour invalide");
// }



// switch case 




// let prénom="hakim";


// switch(prénom){
//     case "Omar":
//         console.log("Bonjour Omar");
//         break;
//     case "Samir":
//         console.log("Bonjour Samir");
//         break;
//     case "Hakim":
//         console.log("Bonjour Hakim");
//         break;
//     case "hakim":
//         console.log("Bonjour Hakim en minuscule");
//         break;    
        
//     default:{
//         console.log("Valeur Incorrecte ")
//     }    
// }




let result ="";



let stock=10;

// if(stock>=1){
//     result="Stock disponible";
// }else{
//     result="Stock épuisé";
// }


// Condition Ternaire 


result=stock>=1 ? "Stock disponible" : "Stock épuisé";

    //  (condition ? valeur si vrai : valeur si faux)


// statuss=age>=18 ? "Majeur":"Mineur"    ;


// console.log(result);
// console.log(statuss);





// Alert Prompt Confirm



// alert("Paiement a été traiter avec succés") // string;


// confirm("message") // methode qui retourne  une valeur booléenne true ou false



// let test=confirm("Voulez-vous continuer ?"); 





// console.log(test);


// let username=prompt("Veuillez Saisir votre nom d'utilisateur"); //

// let type1=12;
// let type2="hello";
// let type3 =true;

// console.log(username);


// typeof

// console.log(typeof(type1));
// console.log(typeof(type2));
// console.log(typeof(type3));





// Demander à utilisateur de saisir son age et vous allez 
// afficeher le message "Vous êtes majeur" si l'age est supérieur ou égal à 18 sinon afficher "Vous êtes mineur".
// En utilisant alert , prompt






//  num1="10"; 

//  num2="1";


//  console.log(+num1 + +num2);


// let nom="Salimi";
// let prénom="samir"
//  console.log("Hello my firstname is "+prénom+" and my lastname is "+nom); // concatenation




//  Exercice : 

// Afficher Un menu sous forme alert qui va afficher le message suivant :
// 1- Addition | 2- Soustraction | 3- Multiplication | 4- Division | 5- Quitter


// il faut que l'utilisateur saisit deux nombre 

// finalement vous devrez afficher le résultat de l'opération choisie par l'utilisateur sous forme d'alert (Le résultat de l'addition est : x)




// alert("1- Addition | 2- Soustraction | 3- Multiplication | 4- Division | 5- Quitter")


// let nombre1=prompt("Veuillez saisir le premier nombre 1");
// let nombre2=prompt("Veuillez saisir le premier nombre 2");


// let choix=prompt("Veuillez saisir votre choix 1, 2, 3, 4 ou 5");

// let result2;

// switch(choix){
   
//      case "1":{
//       result2=+nombre1+ +nombre2;
//      }
//      break ; 

//      case "2":{
//       result2=nombre1-nombre2;
//      }
//      break;
//      case "3":{
//       result2=nombre1*nombre2;
//      }
//      break;
//      case "4":{
//         if(nombre2==0){
//           result2="Impossible de diviser par zéro";
//         }else{
//           result2=nombre1/nombre2;
//         }
//      }

//      break;

//      case "5":{
//       alert("Merci d'avoir utilisé notre application");
//      }
//      break;
//      default:{
//        alert("Choix Invalide")
//      }

// }



// alert(result2);


 email="email@gmail.com";
 let mobile="+21209080706";



// let phrase="Mon email est "+email+" et mon numéro de téléphone est "+mobile;

// console.log(phrase)




// let str="Monsieur le Directeur \n     Je vous écris pour vous ... "

// console.log(str);


// Exercice:

// nom prénom age email mobile profession 


/*
Name: samiri karim
Age : 30 
Email:email@gmail.com
Mobile: +21209080706
Profession: Développeur Web


*/