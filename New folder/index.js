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


    Btn2.innerHTML= `

        <img id="img4" src="Z.jpg">
        <img id="img5" src="X.png">
        <img id="img6" src="g.png">

        <button id="btn3"> <a href="https://github.com/ZohilRahimzai">GitHub</a></button>
        <button id="btn4"><a href="https://x.com/ZohilRahimzai">X</a></button>
            
    
    
    `


}