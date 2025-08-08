let products = [
    { 
        id: 1, 
        name: "TV", 
        price: 2000.5, 
        qte: 30, 
        image: "https://media.istockphoto.com/id/1395191574/fr/photo/noir-led-tv-%C3%A9cran-de-t%C3%A9l%C3%A9vision-vierge-isol%C3%A9.jpg?s=612x612&w=0&k=20&c=e0CTyOK3YOg9VVdc1bvW0yq7rBhPZ0LkIPGXDZFCfR4=", 
        disponible: true 
    },
    { 
        id: 2, 
        name: "Laptop", 
        price: 5500.0, 
        qte: 15, 
        image: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/13-laptop-platinum-right-render-fy25:VP4-1260x795?fmt=png-alpha", 
        disponible: true 
    },
    { 
        id: 3, 
        name: "Smartphone", 
        price: 3200.99, 
        qte: 50, 
image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSK8_BdPpbzhlPqJTQBXUofFwDAyrUceBwTg&s",        disponible: true 
    },
    { 
        id: 4, 
        name: "Casque Bluetooth", 
        price: 800.75, 
        qte: 40, 
        image: "https://mmkdo.fr/11301-large_default/casque-bluetooth-casque-bluetooth.jpg", 
        disponible: true 
    },
    { 
        id: 5, 
        name: "Imprimante", 
        price: 1500.0, 
        qte: 20, 
        image: "https://www.mbtech.fr/31104-thickbox_default/canon-imprimante-jet-dencre-pixma-ts5150-multifonction-tirages-a4.jpg", 
        disponible: false 
    },
    
];




let parent = document.querySelector(".parent");

// foreach


products.forEach((el,i)=>{
     
    let card = document.createElement('div');
    card.classList.add("card");
    card.style.width="18rem";
    let img = document.createElement("img");
    img.src=el.image;
    let cardbody=document.createElement("div");
    cardbody.classList.add("card-body");
    let productTitle=document.createElement("h2");
    productTitle.classList.add("card-title");
    productTitle.innerHTML=el.name;
    let productPrice=document.createElement("h3");
    productPrice.classList.add("card-title");
    productPrice.innerHTML="Prix : "+el.price;
    let productQte=document.createElement("h3");
    productQte.classList.add("card-title");
    productQte.innerHTML="Qantité : "+el.qte;
    let shopbutton=document.createElement("button");
    shopbutton.classList.add("btn","btn-primary")
    shopbutton.innerHTML="Shop now"
     shopbutton.onclick=()=>{
        alert("Vous avez commander le produits "+el.name)
     }

cardbody.append(productTitle);
cardbody.append(productPrice);
cardbody.append(productQte);
cardbody.append(shopbutton);


card.append(img);
card.append(cardbody);


parent.append(card);

     

})


// un programme qui va créer des produits html comme des cartes bootsrap et en les ajoutant a la div .parent dans la page E-comm.html
/*
<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
*/