// Get date
const nameInput = document.querySelector("#name");
const message = document.querySelector("#message");
const email = document.querySelector("#email");
const address = document.querySelector("#address");
const city = document.querySelector("#city");
const postal = document.querySelector("#postal");
const success = document.querySelector("#success");
const errorNodes = document.querySelectorAll(".error");


document.getElementById("contact").style.display ="none";

function clickBtn2(){
	const p1 = document.getElementById("contact");

	if(p1.style.display=="block"){
        // display nothing 
		p1.style.display ="none";
	}
    else{
        // display the contact
		p1.style.display ="block";
	}
}

// Validate data    
function validateForm(){

    clearMessages();

    let errorFlag = false;

    if(nameInput.value.length < 1){
        errorNodes[0].innerText = "Name cannot be blank";
        nameInput.classList.add("error-border");
        errorFlag = true;
    }

    if(!emailIsValid(email.value)){
        errorNodes[1].innerText = "Invalid email address";
        email.classList.add("error-border");
        errorFlag = true;
    }

    if(address.value.length < 1){
        errorNodes[2].innerText = "Invalid address";
        address.classList.add("error-border");
        errorFlag = true;
    }

    if(city.value.length < 1){
        errorNodes[3].innerText = "Choose city";
        city.classList.add("error-border");
        errorFlag = true;
    }

    if(!postalIsValid(postal.value)){
        errorNodes[4].innerText = "Invalid postal codes";
        postal.classList.add("error-border");
        errorFlag = true;
    }
    if(message.value.length < 1){
        errorNodes[5].innerText = "Enter mesaage";
        message.classList.add("error-border");
        errorFlag = true;
    }

    if(!errorFlag){
        success,innerText = "Success!";
    }
}

//Clear error/ success messages
function clearMessages(){
    for(let i = 0; i < errorNodes.length; i++){
        errorNodes[i].innerText = "";
    }
    success.innerText = "";
    nameInput.classList.remove("error-border");
    email.classList.remove("error-border");
    address.classList.remove("error-border");
    city.classList.remove("error-border");
    message.classList.remove("error-border");
    postal.classList.remove("error-border");
}

function emailIsValid(email){
    let pattern = /\S+@\S+\.\S+/;
    return pattern.test(email);
}

function postalIsValid(postal){
    let pattern = /^[ABCEGHJ-NPRSTVXYabceghj-nprstvxy]\d[ABCEGHJ-NPRSTV-Zabceghj-nprstv-z][ -]?\d[ABCEGHJ-NPRSTV-Zabceghj-nprstv-z]\d$/;
    return pattern.test(postal)
}

document.getElementById("question").addEventListener("change", () => {
    document.getElementById("rate").style = "display: none;";
  });
  
  document.getElementById("comment").addEventListener("change", () => {
    document.getElementById("rate").style = "display: none;";
  });
  
  document.getElementById("hiring").addEventListener("change", () => {
    document.getElementById("rate").style = "display: grid;";
  });
  
  document.addEventListener("scroll", scrollUp);
  
