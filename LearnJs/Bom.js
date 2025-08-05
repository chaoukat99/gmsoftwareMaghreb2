// BOM (Browser Object Model )

// window 



function ShowAlert(){
    Swal.fire("SweetAlert2 is working!");
}



// SetTimeout    en ms 1s => 1000ms
let annonce=document.createElement("marquee");

annonce.innerHTML="<h2>This is A js Ad</h2>";


// setTimeout(()=>{
//   document.body.append(annonce)
// },5000)





// SetInterval 


// setInterval(()=>{

// },3000)


// const interval=setInterval(()=>{
//     const prompt2=prompt("Veuillez saisir un nombre different a 2 :") 
//     if(prompt2!=2){
//         console.log("Trés Bien !")
//     }else{
//         console.log("Oops");
//         clearInterval(interval); // arréter l'intervale
//     }
// },5000)



// let button=document.querySelector("button");
// let lien = document.querySelector("a");


// // button.onclick=()=>{
// //     lien.click(); // il force le click
// //     // blur
// //     // focus
// //     // submit
// //     // reset
// // }




// // Préparer Intervale 

// let start=10;


// function ForceDownload(){
//     let lien=document.querySelector("a")
//     lien.click();
// }


// function CountdownFunction(){

// let countdown=setInterval(()=>{
//     if(start==1){
//         clearInterval(countdown);
//         console.log("Breaking coundown")

//         // Appller la fonction qui va forcer le click sur le button de télechargement
//         ForceDownload();

//         // attendre 2s pour supprimer le paragraphe 
//          setTimeout(()=>{
//             document.querySelector(".message").innerHTML="";
//          },2000)

//     }
//     start=start-1 // decrementer la valeur 
// document.querySelector(".message").innerHTML=" Le télechargement va se demarrer en "+ start+" secondes"

// },1000)


// }


// button.onclick=()=>{
//     CountdownFunction();
// }


// location  


// reload 

// document.querySelector("button").onclick=()=>{
//     location.reload(); // refresh the page 
// }




// href 


// Read Lire URL 
// console.log(location.href);

// Write Rediriger les utilisatuers vers d'autre page / sites

// location.href="<url>";

// Redirection code after 3 seconds  

// document.querySelector("button").onclick=()=>{

//     setTimeout(()=>{
//        location.href="./app.html"
//     },3000)
// }








// history 



// open 


// localstorage 








// Location (window browser )



// reload 




let btn = document.querySelector("button");


// btn.onclick=()=>{
//     // Actualiser 

//     window.location.reload();
// }



// href 


// Lecture 


// href = lit url 

// protocol
// console.log(location.protocol)


// let url = location.href;


// console.log(url.split("/")[0])

// Ecriture


// Redirection

// setTimeout(()=>{
//      location.href="https://www.google.com"
// },5000)



// location.href=""


// document.querySelector("button").onclick=()=>{
//     location.href="#section2"
// }



// history 


// history.back();




// open 


// let chatgptwindow;
// document.querySelectorAll("button")[0].onclick=()=>{

// // traitement 

//   chatgptwindow=open("https://chatgpt.com/","","width=200"); 
     


// }



// document.querySelectorAll("button")[1].onclick=()=>{

// // traitement 

//    if (chatgptwindow && !chatgptwindow.closed){
//     window.close();
//     console.log("Fermé");
//    }
     


// }


// Objet js 


let obj={
    id:1,
    name:"Samir",
    age:20,
    profession:"Software Engineer"
}



// JSON

// parse ((methode qui converti  json en objet js))



// stringify (methode qui converti un objet js en json)

// console.log("obj js ");
// console.log(obj);

// console.log("Json")
// obj.is_connected=false
// let json=JSON.stringify(obj)

// console.log(json);




// convertir de json => js 


// console.log("Obj Js a nouveau ")

// console.log(JSON.parse(json))

// console.log(obj.profession)



// JSON (Javascript object notation) Texte (string )


// Local storage 


// lecture des valeurs getItem

// let value=localStorage.getItem("userConnected");

// // console.log(JSON.parse(value));


// // Ecriture / Modification

// localStorage.setItem("color","red");








// if(localStorage.getItem("colormode")!=null){
   
//     document.body.style.backgroundColor=localStorage.getItem("colormode");
//     // coloriser l'arriére en permanence

// }


// document.querySelectorAll("button")[0].onclick=()=>{
//     document.body.style.backgroundColor="black";
//     localStorage.setItem("colormode","black")
// }


// document.querySelectorAll("button")[1].onclick=()=>{
//     document.body.style.backgroundColor="white";
//     localStorage.setItem("colormode","white");
// }




let user={
id:1,
nom:"Karim",
age:23
}







localStorage.setItem("userdetails",JSON.stringify(user));



console.log(JSON.parse(localStorage.getItem("userdetails")))



document.querySelector("span").innerHTML=JSON.parse(localStorage.getItem("userdetails")).nom