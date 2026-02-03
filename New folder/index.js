let Butone = document.getElementById("butone");
let Myname = document.getElementById("myname");
let Sdiv = document.getElementById("sdiv");


function btnClicked() {

     Butone.innerText = "Clicked";
     Myname.innerText = " Info Found!!!";
     Sdiv.innerHTML = `
    
        <img id="img3" src="Z.jpg">
        <h1 id="headingone"> Zohil Rahimzai </h1>
        <h3 id="headingthree"> Software Engineer | Web developer </h3>
    
    
    
    `

    
}