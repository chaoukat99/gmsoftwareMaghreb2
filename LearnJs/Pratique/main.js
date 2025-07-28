


// Dark Mode scénario : 


// on click on to dark text or checkbox  , on a besoin de changer l'arriére plan en noire et meme les textes en blanc 



// Selectionner les élements 

let label=document.querySelector("label");
let checkbox= document.querySelector("input[type='checkbox']")

function SwitchMode(){
   
        if(checkbox.checked){
            // to dark 
            document.body.classList.add("darkmode")
            label.innerHTML="To Light"
        }else{
            document.body.classList.add("lightmode")
            label.innerHTML="To Dark"

        }
    
}



// checkbox.onclick=()=>{
//     SwitchMode();
// }
// checked (true false)



// si le mot de passe est entre 10 et 20 (valide ) sinon c'est invalide 


// input (saisie)

// let input=document.querySelector("input");

// let btn=input.nextElementSibling.nextElementSibling






// function VerifyPassword(){
     

//     input.oninput=()=>{

//         if(input.value.length>=10 && input.value.length<=20 ){
//             btn.disabled=false; // activer le button (remove disabled attribute)
//             btn.classList.remove("disable")
//             btn.classList.add("enable") // ajouter la classe de validation (green)
//         }else{
//             btn.disabled=true; // desactiver le button (add disabled attribute)
              
//             btn.classList.add("disable") // ajouter la classe de validation (red)
//         }
//     }
// }


// call function 

//  VerifyPassword();




//  btn.onclick=()=>{
//     alert("hello")
//  }








// username doit etre entre 8 et 15 carctéres   

// age >18 

// doit contenir username et le carctére @  


// mobile doit commencer  avec (+212 | +213 | +216)


// on blur de chaque input il faut afficher sur la span qui se trouve aprés input :

// username valide (vert ) or username invalide (rouge)
let inputs=document.querySelectorAll("input"); // []
let spans=document.querySelectorAll("span"); // []

inputs[0].onblur=()=>{
    if(inputs[0].value.length>=8 && inputs[0].value.length<=15  ){
        spans[0].innerHTML="Username Valide"
         spans[0].classList.remove("invalid")
        spans[0].classList.add("valid")
    }else{
         spans[0].innerHTML="Username InValide"
        spans[0].classList.add("invalid")
    }
}



// age validation 


inputs[1].onblur=()=>{
    if(inputs[1].value>18 ){
        spans[1].innerHTML="Age Valide"
         spans[1].classList.remove("invalid")
        spans[1].classList.add("valid")
    }else{
         spans[1].innerHTML="Age InValide"
        spans[1].classList.add("invalid")
    }
}


// email validation 


inputs[2].onblur=()=>{
    if(inputs[2].value.includes(inputs[0].value) && inputs[2].value.includes("@") ){
        spans[2].innerHTML="Email Valide"
         spans[2].classList.remove("invalid")
        spans[2].classList.add("valid")
    }else{
         spans[2].innerHTML="Email InValide"
        spans[2].classList.add("invalid")
    }
}



// Mobile Validation 


inputs[3].onblur=()=>{
    if(inputs[3].value.startsWith("+212") || inputs[3].value.startsWith("+213") || inputs[3].value.startsWith("+216")  ){
        spans[3].innerHTML="Mobile Valide"
         spans[3].classList.remove("invalid")
        spans[3].classList.add("valid")
    }else{
         spans[3].innerHTML="Mobile InValide"
        spans[3].classList.add("invalid")
    }
}