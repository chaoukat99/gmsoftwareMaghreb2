// Sélécteurs
// Html Tag content  innerHTML

// attributes Manipulation 

// css  style with Js 

// classlist Object 
// Dom traversing 

// Create HTML Elements with Js and (append and remove )

// Javascript Events (click scrolling )



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



// let imageSource=prompt("Veuillez saisir la source de l'image: ")


// AddImageToHtml(imageSource)




// Css Styling with Js



let myTitle=document.querySelector(".cls");




// console.log(myTitle);


// 1ere Method Syntax : element.style.cssProperty=value()

// myTitle.style.backgroundColor="black";
// myTitle.style.color="white";
// myTitle.style.padding="10px";
// myTitle.style.textAlign="center";
// myTitle.style.fontFamily="cursive";
// myTitle.style.border="solid 2px red"
// myTitle.style.borderRadius="10px"



let customAlert=document.querySelector(".clss");



// Le style css 

// customAlert.style.width="200px";
// customAlert.style.height="60px";
// customAlert.style.backgroundColor="#eee";
// customAlert.style.padding="10px";
// customAlert.style.borderLeft="6px solid green";
// customAlert.style.borderRadius="5px";
// customAlert.style.display="flex";
// customAlert.style.justifyContent="center";
// customAlert.style.alignItems="center";
// customAlert.style.fontFamily="cursive";
// customAlert.style.fontWeight="bold";






// 2eme Method cssText syntax: element.style.cssText="color:red;background-color:white"



// customAlert.style.cssText="color:red;background-color:#eee;padding:10px;border-radius:10px"





let Switch=document.querySelector("input[type='checkbox']");

// let body=document.querySelector("body");

// console.log(Switch.required) // Boolean 

// Switch.onclick=()=>{
//     if(!Switch.checked){
//           document.body.style.background="white";
//           document.body.style.color="red";
//     }else{
//         // document.body.style.background="rgb(40, 38, 38)";
//         // document.body.style.transition="0.4s";
//          document.body.style.cssText="background-color:rgb(40, 38, 38);color:white;transition:0.4s"  
//     }
// }





// ClassList (add remove toggle contains)



// contains 



let h1Title=document.querySelector("h1");


// console.log(h1Title.classList.contains("cls")) // contains  il va verifier si le h1 contient une classe nommé cls ou non 




// add (ajouter auto une classe html a un élement )


// h1Title.classList.add("active","cls","cls2","bg")



let btns=document.querySelectorAll("button");




// btns[2].onclick=()=>{

//     // h1Title.classList.add("masquer");
//     let div= document.querySelector("div") ;

//     div.classList.add("clss")
// }    


// btns[1].onclick=()=>{
//     h1Title.classList.add("afficher")
// }




// remove (elle supprime auto une classe a partir d'un element html )



// btns[0].onclick=()=>{

//     h1Title.classList.add("masquer");

// }    


// btns[1].onclick=()=>{
//     h1Title.classList.remove("masquer")
// }


// Toggle 

// S'il trouve la classe sur l'element elle va la supprimer sinon elle va l'ajouter



// btns[2].onclick=()=>{


//     h1Title.classList.toggle("masquer") 

//     // 
// }


// IL fault creér une page Html qui va demander a l'utilisateur de saisir le nom complet et l'age 



// il faut afficher en titre h1 le message Bienvenue Samir (rouge vert en jaune )



//  la couleur du nom complet sera colorisé en se basant sur l'age 


// age >18 (vert)


// age <14 (rouge )



// age entre 18 et 14 (jaune )




// Concept a utilsé : 

// innerHtml 
// ClassList / css with Js 
// if 

// prompt 






// DOM NODES & Traversing 

// let madiv=document.querySelector(".wrapper");

// // Children
// console.log(madiv.children); // affiche une liste des enfants de l'élement selectionné


// let p = document.querySelector("p")

// let collectionOfChildren=madiv.children // []


// for(let i of collectionOfChildren){
//     i.style.color="red";
// }



// let ListItems=collectionOfChildren[2]; // recuperer le ul 

// console.log(ListItems.children)
// for(let i of ListItems.children){
//     i.style.color="red";
// }






para = document.querySelector("p");



// console.log(para.children)

// ParentNode // retourne le parent d'un element html 







// console.log(para.parentNode)


// let thirdListItem=document.querySelectorAll("ul li")[2];


// console.log(thirdListItem.parentNode);






// console.log(para.previousElementSibling) //  il va recupere le frere qui se trouve avant 


// console.log(para.nextElementSibling.nextElementSibling) //  il va recupere le frere qui se trouve aprés





// append remove 



// 1- Recuper les fils de ul 


// 2- Récuperer le parent du button 


// 3- D'aprés le h2 sur la section about il faut selectionner  le lien Contact   


// 1- 
let listItemss=document.querySelector("ul")


// console.log(listItemss.children)


// 2-

let button=document.querySelector("button");



// console.log(button.parentNode)



// 3- 



// const h2= document.querySelector("h2");



// console.log(h2)



// Append et remove 


// Append (c'est une methode qui insere des element HTML a l'interieur d'un element )

// Syntaxe : elementParent.append(elementchild)

// let list=document.querySelector("ul");

// let new_Item="<li>Css</li>"


// const text="This is a text generated from Js"
// list.append(new_Item)
// ajouter new_Item sur la liste

// console.log(list);





// let div = document.querySelector(".alert");


// ajouter le text a l'element (append)


// div.append(text)


// Remove 


// Syntax : element.remove() // il va supprimer l'element selectionner


// let span3=document.querySelector("span")


// span3.onclick=()=>{
//     span3.parentNode.remove();
// }



// Create HTML  ELEMENT  with Js



// exemple paragraphe


// let paraa=document.createElement("p");

// append pour insérer un text a l'intérieur du paragraphe


// paraa.append("this is a Js  para ")

// paraa.style.color="red";
// paraa.style.textAlign="center";



// Ajouter le paragraphe au niveau du body 


// document.body.append(paraa)


// console.log(paraa)





// <div class='alert'>
//    <span>X</span>
//    this is alert Message   

// </div>


// Creer les element de base 


let my_div=document.createElement("div");

let my_span= document.createElement("span");


// Ajouter le carctére x pour la span 
my_span.append("x");

// Ajouter la classe alert pour la div 

my_div.classList.add("alert");

// Ajouter la span a l'interieur de la div (append)
my_div.append(my_span)



// ON a ajouter un texte a l'interieur de la div(append ) aprés la span
my_div.append("this is alert Message")




// Ajouter la div a l'interieur du body 



// 


function AddingDynamicList(){

    // 1- Création d'elements HTML
const ul = document.createElement("ul");

const list1=document.createElement("li");
const list2=document.createElement("li");
const list3=document.createElement("li");
const list4=document.createElement("li");



// Ajouter la classe list-parent a ul 

// 2-Ajouter les classes (classList.add)
ul.classList.add("list-parent");


list1.classList.add("items")
list2.classList.add("items")
list3.classList.add("items")
list4.classList.add("items")

// 3-Inserer le contenu textuel des li (append)

list1.append("Home")
list2.append("About")
list3.append("Contact")
list4.append("blog")




// 4-Ajouter les li sur le ul (append)
ul.append(list1)
ul.append(list2)
ul.append(list3)
ul.append(list4)


// 5-Insérer la liste (ul ) au niveu du body (append)
document.body.append(ul)

}







AddingDynamicList()









