// console.log("it's working ");




function ColorizeFullname(){

    let span=document.querySelector("#fullname"); // selection pour récuperer la balise <span> 

    let fullname=prompt("Veuillez Saisir le nom complet : ");
    let age=+ prompt("Veuillez saisir l'age : ");
     
    span.innerHTML=fullname.toUpperCase();  // je modifie le contenu de span avec le nom complet 



//    Traitement 

// css

//   if(age>14 && age<18){
//       span.style.color="yellow"
//   }else if(age>18){
//       span.style.color="green"

//   }else{
//       span.style.color="red"

//   }


//   Classes 


  if(age>14 && age<18){
      span.classList.add("orange")
  }else if(age>18){
          span.classList.add("green")


  }else{
        
          span.classList.add("red")

  }



}


ColorizeFullname(); // appel a la fonction 