// Authentification avec js 

// from database
let users =[
    {
        id:1,
        nom:"Salim",
        age:23,
        ville:"Casablanca",
        email:"salim@gmail.com",
        password:"salim123"
    },
    {
        id:2,
        nom:"Karim",
        age:30,
        ville:"Rabat",
        email:"karim@gmail.com",
        password:"karim123"
    },
    {
        id:3,
        nom:"sara",
        age:30,
        ville:"Fés",
        email:"sara@gmail.com",
        password:"sara123"
    },
]




// 


function Redirection(){
    setTimeout(()=>{
    //    redirection
    location.href="./dashboard.html"
    },2000)
}



// 


function VerifyLogin(email,password,form){

    let finder=users.find((el,i)=>el.email==email && el.password==password);

    if(finder!=undefined){
          
        // stocker les données de l'utilisateur trouvé sur le localstorage

        let userAstocker=JSON.stringify(finder);
        localStorage.setItem("user_connected",userAstocker);

          Swal.fire({
              title: "Correct Credentials",
              text: "Welcome ",
              icon: "success",
              showConfirmButton:false,
              timer:1000
});

         Redirection();

    }else{
            form.reset();
            Swal.fire({
              title: "Invalid  Credentials Try again",
             
              icon: "error",
              showConfirmButton:false,
              timer:2000
});
    }
}




let myform=document.querySelector("form");



myform.onsubmit=(ev)=>{

    // bloquer le submit 
    ev.preventDefault();

    let emailval=document.querySelector("#email").value;
    let passwordval=document.querySelector("#pass").value;

    VerifyLogin(emailval,passwordval,myform);

}