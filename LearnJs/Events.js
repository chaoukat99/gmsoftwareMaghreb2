// Events Js





// Named Function 
// function SayHi(){
//     // traitement 
// }


// Anonymous Function 



// const test=function(){
//  console.log("hello");
// }




// Arrow Function (fléché)


// const SayHi=()=>{console.log("hello guys")};


// SayHi();


// const addition =(a,b)=>{console.log(`Le resultas est ${a+b}`)}



// addition(20,3)





// Events : 



// CLick Events 

//   syntaxe: element.on(eventname)=()=>{ traitement    }   

let btn = document.querySelector("#btn");

// click

// btn.onclick=()=>{
//     // Traitement 

//     // alert("Button Clicked");
//     // changer l'arriere plan du site web 


//        console.log("hello")
// }



let para=document.querySelector("p");


// para.onclick=()=>{
   
//     para.remove();
// }


// dblclick


// btn.ondblclick=()=>{
//         //  console.log("hello")
// }

// Mouse Events 


// MouseMove



let img = document.querySelector("img");

// img.onmouseover=()=>{
//     img.style.width="800px";
// }
// img.onmouseleave=()=>{
//     img.style.width="300px";
// }
// window.onkeydown=()=>{
//     img.style.width="800px";
// }    

let box=document.querySelector(".box");


// box.onmousemove=()=>{
//     console.log("you are moving the mouse");
// }



// mouseover  (hover en css)

// box.onmouseover=()=>{
//     console.log("you hovered the box ")
// }


// mouseleave (quand vous sortez de l'élement )

// box.onmouseleave=()=>{
//     console.log("you left the box ");
// }


//  keyboard Events 


// keydown 


// window.onkeydown=(ev)=>{
//     console.log("keyboard pressed "+ev.key)
// }

// keyup

// window.onkeyup=()=>{
//     console.log("tu as laché la clé ")
// }




// form Events 


// focus (clicker sur input pour commencer a saisir )


// let input = document.querySelector("input");
// let span=document.querySelector(".error");

// input.oninput=()=>{
//     if(input.value.length>10){
//         span.innerHTML="Mot de passe Invalide"
//     }else{
//         span.innerHTML="";
//     }
// }
// let btn2=document.querySelector("button");


// btn2.onclick=()=>{

//    if(+input.value>18){
//     alert("Majeur")
//    }else{
//     alert("Mineur")
//    }

// }

// input.onfocus=()=>{
//   console.log("focused")
// }

// blur
// input.onblur=()=>{
//     console.log("vous avez sorti de l'input ")
// }

// input


// input.oninput=()=>{
//     console.log("Vous etes en train de saisir ")
// }


// Selection Event 


let p=document.querySelector("p");

// p.onselectstart=()=>{
//     console.log("selection du texte")
// }



// Context Menu 

window.oncontextmenu=()=>{
    console.log("context menu opened ")
}

const date=new Date();

// console.log(date.toLocaleTimeString())



// Scroll 
let i=0.01
let op=1;
window.onscroll=()=>{
     op-=i;
    document.body.style.opacity=op;
}




// let shape=document.querySelector(".box");

// let val =0;
// window.onkeydown=(ev)=>{
//     if(ev.key=="ArrowRight"){
//         val+=100 
        
//         shape.style.left=val+"px"
      
//     }else if(ev.key=="ArrowLeft"){
//         val-=100 
//        shape.style.left=val+"px"
//     }else{
//         console.log("error") 
//     }
// }



// bloquer un evenements 



// let link=document.querySelector("a");

// // bloquer les evenements (désactiver)

// link.onclick=(ev)=>{

//     ev.preventDefault();
//    console.log("hello")
// }





let para2=document.querySelector("p");

// para2.onselectstart=(ev)=>{
//      ev.preventDefault(); // elle bloque l'evenement 
// }



// window.oncontextmenu=(ev)=>{


//     ev.preventDefault();
// }



// let form = document.querySelector("form");


// form.onsubmit=(ev)=>{


//     ev.preventDefault(); // il bloque le submit (envoie auto des données)

//     console.log("form bloqué ")
// }