// Sélécteurs
// Html Tag content 

// attributes Manipulation

// css  style with Js 

// classlist Object 
// Nodes 

// Create Elements with Js 

// Javascript Events



// DOM (document object Model)

// Sélection Des élements Html  



// getElementById


let titre= document.getElementById("mainTitle");


// GetElementsByTagName


let paras=document.getElementsByTagName("meta"); // []




// getElementsByClassName


// let classes=document.getElementsByClassName("cls"); // []


// Recommandé

// querySelector (elle applique la selection css)


let firstElementWithClass=document.querySelector(".cls");


// querySelectorAll (elle applique la selection css mais elle collectent tout les élements séléctionné en [] )



// let allClsClasseElement=document.querySelectorAll(".cls"); // []

// console.log(titre);
// console.log(paras);

// console.log(classes);
// console.log(firstElementWithClass)

// console.log(allClsClasseElement)





// Sélectionner en se basant sur les types des méthodes 



// Liens 

// List ul li 

// image
// inputs

// Toutes les sections 

// Links


// let links= document.getElementsByTagName("a");
// let links=document.getElementsByClassName("link-item");

// let links = document.querySelectorAll(".link-item");




// let ListItems=document.querySelectorAll("li");



// let img = document.querySelector("img");




// let emailInput=document.querySelector("input[type='email']");




// let all_sections=document.querySelectorAll("section");




// console.log(links)

// console.log(ListItems)

// console.log(img)

// console.log(emailInput)

// console.log(all_sections)




// Manipuler le Contenu d'une balise html 



// Lecture 



// innerText | innerHTML







let h1=document.querySelector(".cls");


// console.log(h1.innerText)
// console.log(h1.innerHTML)



// Ecriture



// h1.innerHTML="Hi"; // changer dynamiquement le contenu de la balise h1



// il faut créer une fonction javascript qui va demander a l'(utilisateur de saisir un paragraphe 
// et le texte saisi doit etre integre a l'intérieur du paragraphe <p>





let para = document.querySelector("p");



function AddContentInP(){
    //  get user input

    let text = prompt("Veuillez saisir un texte");

    para.innerHTML=text
}

// AddContentInP();



let span = document.querySelector("span");

function TypeName(){
     let name = prompt("Veuillez saisir votre prénom ");
    if(name.length>0){
            span.innerHTML="Mr "+name.toUpperCase()
    }else{
        span.innerHTML="Mr "+"Guest"
    }

}



// TypeName();



// 1-Addition 2-Sous 3-Multip 4-Division (prompt)


// demander d'inserer l'operation (Addition Sous Multipl)
// demander a l'user de saisir le n1
// demander a l'user de saisir le n2

// il faut que le programme affiche sur la page web le message suivant:


// L'addition de 5+3 est : 8
// La soustraction  de 5-3 est : 2

// prompt , if else (switch case ) + * - / // innerHTML







// Selction des spans 



// let spans=document.querySelectorAll("span"); // []


// // console.log(spans)



// // Math Functions 

// // L'Addition

// function Addition(num1,num2){
//     let result=+(num1)+ +(num2)
//     spans[0].innerHTML="L'addition "
//     spans[1].innerHTML=num1;
//     spans[2].innerHTML="+";
//     spans[3].innerHTML=num2;
//     spans[4].innerHTML=result

// }

// // Soustraction
// function Soustraction(num1,num2){
//     let result=num1-num2
//     spans[0].innerHTML="La Soustraction "
//     spans[1].innerHTML=num1;
//     spans[2].innerHTML="-";
//     spans[3].innerHTML=num2;
//     spans[4].innerHTML=result

// }
// // Multiplication
// function Multiplication(num1,num2){
//     let result=num1*num2
//     spans[0].innerHTML="La Multiplication"
//     spans[1].innerHTML=num1;
//     spans[2].innerHTML="x";
//     spans[3].innerHTML=num2;
//     spans[4].innerHTML=result

// }



// // Multiplication


// function Division(num1,num2){

//     let h3=document.querySelector("h3");
//     if(num2!=0){
//     let result=num1/num2
//     spans[0].innerHTML="La Division "
//     spans[1].innerHTML=num1;
//     spans[2].innerHTML="/";
//     spans[3].innerHTML=num2;
//     spans[4].innerHTML=result
//     }else{
//           h3.innerHTML="Impossible de diviser par 0 ";
//     }

// }






// let num1Prompt=prompt("Veuillez saisir le nombre 1 : ")
// let num2Prompt=prompt("Veuillez saisir le nombre 2 : ")

// let operationPrompt=prompt("1-Addition\n2-Sous\n3-Multip\n4-Division");



// switch(operationPrompt){
//     case "1":{
//         Addition(num1Prompt,num2Prompt);
//     }
//     break;

//     case "2":{
//         Soustraction(num1Prompt,num2Prompt);
//     }
//     break;

//     case "3":{
//         Multiplication(num1Prompt,num2Prompt);
//     }
//     break;

//     case "4":{
//         Division(num1Prompt,num2Prompt);
//     }
//     break;
//     default:{
//             let h3=document.querySelector("h3");
//                h3.innerHTML="Opération invalide"
//     }
// }






// Manipulation  des attributs


// Lecture des attributs 

// sytanxe => elm.nomdeL'Attribut="Nouvelle valeur" ex : para2.id







// let para2 = document.querySelector("#main-para");

// // Lecture 
// console.log(para2.title);


let input= document.querySelector("input");


// console.log(input.type);



// // Ecriture 


// input.type="date"




// document.querySelector("button").onclick=()=>{


//   let btn=document.querySelector("button");
//     if(btn.innerHTML=='<i class="fa-solid fa-eye-slash"></i> Hide Password'){
//           input.type="password";
//           btn.innerHTML=" <i class='fa-solid fa-eye'></i> Show Password"
//     }else{

      
//         input.type="text";
//         btn.innerHTML='<i class="fa-solid fa-eye-slash"></i> Hide Password'
//     }

  
// }





// Selectionner l'image


// let img = document.querySelector("img");



// let button=document.querySelector("button")


// button.onclick=()=>{
//     img.src="https://www.bigfootdigital.co.uk/wp-content/uploads/2020/07/image-optimisation-scaled.jpg";
// }




// il faut créer un programme qui va demander par prompt a saisir la source d'une image et automatiquement l'image va s'apparaitre 


let image=document.querySelector("img");

function AddImageToHtml(source){
    image.src=source;
    alert("Image a eté insére ");
} 



let imageSource=prompt("Veuillez saisir la source de l'image: ")


AddImageToHtml(imageSource)