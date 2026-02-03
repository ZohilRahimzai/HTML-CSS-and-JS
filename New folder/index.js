let Butone = document.getElementById("butone");
let Myname = document.getElementById("myname");
let Sdiv = document.getElementById("sdiv");
let Btn2 = document.getElementById("tdiv");


function btnClicked() {

     Butone.innerText = "Clicked";
     Myname.innerText = " Info Found!!!";
     Sdiv.innerHTML = `
    
        <img id="img3" src="Z.jpg">
        <h1 id="headingone"> Zohil Rahimzai </h1>
        <h3 id="headingthree"> Software Engineer | Web developer </h3>
    
        <img id="img11" src="11.png">

        <button id="btn2" onclick="btn2Clicked()" >MY Github and X</button>
    
    `
 
}

function btn2Clicked() {


    Btn2.innerHTML= ``


}