


let selectedProduct=[];


function OrderProduct(btn){

    // Récuperer le stock 
    let stockValue=btn.previousElementSibling.children[0].innerHTML; 

    // let stockElement=btn.previousElementSibling.children[0];

    // Récuperer le Nom de l'article 
    let productname=btn.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML;

    // Récuperer le prix : 
    let productPrice=btn.previousElementSibling.previousElementSibling.children[0].innerHTML; 
    //  traitement 
    

    if(stockValue>0){
              Swal.fire({
                title: `Product ${productname} Added To cart` ,
                text: "Welcome ",
                icon: "success"
                });
                //  Changer la valeur du stock sur la page 
               btn.previousElementSibling.children[0].innerHTML=btn.previousElementSibling.children[0].innerHTML-1

               let obj={
                name:productname,
                price:productPrice
               }

            //    Stocker le produit selectionné sur le tableau 
              selectedProduct.push(obj);


    }else{    
        Swal.fire({
                title: `Impossible de commander le produit  ${productname}` ,
                text: "Out Of Stock",
                icon: "error"
                });

    }
}


// let btn = document.querySelector("button");


// // console.log(btn.previousElementSibling.children[0].innerHTML);


// console.log()




let buttons=document.querySelectorAll(".btn-primary");


console.log(buttons);



// Simple

// buttons[0].onclick=()=>{
//     OrderProduct(buttons[0]);
// }
// buttons[1].onclick=()=>{
//     OrderProduct(buttons[1]);
// }
// buttons[2].onclick=()=>{
//     OrderProduct(buttons[2]);
// }

// Pratique 
for(let i of buttons){
    i.onclick=()=>{
          OrderProduct(i)
    }
}




let Mtbtn=document.querySelector(".btn-success");




function  ListProductAmount(){
    
    let ulList=document.querySelector(".list-group");

    for(let i of selectedProduct){

        let li=document.createElement("li");

        li.classList.add("list-group-item");

        // Ajouter le contenu de la liste 
        li.innerHTML=`${i.name}  : <b>${i.price} $</b> `

       ulList.append(li);


    }
    let somme =0;
    // Calculer La somme 
    for(let i of selectedProduct){
        somme+= +(i.price)
    }

    let Totalli=document.createElement("li");

    Totalli.classList.add("list-group-item");

    Totalli.innerHTML=`Total A payé : <b> ${somme} $ </b>`

    ulList.append(Totalli);

}

let carte=document.querySelector("#carte");
Mtbtn.onclick=()=>{
    
   if(selectedProduct.length>0){
       ListProductAmount();
       carte.style.display="block";

   }else{
               Swal.fire({
                title: `Nothing To Order ` ,
                text: "Try Later",
                icon: "error"
                });
   }
}