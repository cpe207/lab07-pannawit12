const firstNameInput = document.querySelector("#first-name-input");
const lastNameInput = document.querySelector("#last-name-input");
const emailInput = document.querySelector("#email-input");
const passwordInput = document.querySelector("#password-input");
const submitBtn = document.querySelector("#submit-btn");

//simple email validation
function validateEmail(email) {
  var atPos = email.indexOf("@");
  var dotPos = email.lastIndexOf(".");
  return atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1;
}

firstNameInput.onkeyup=()=>{
  firstNameInput.classList.remove("is-valid");
  firstNameInput.classList.remove("is-invalid");
}

lastNameInput.onkeyup=()=>{
  lastNameInput.classList.remove("is-valid");
  lastNameInput.classList.remove("is-invalid");
}

emailInput.onkeyup=()=>{
  emailInput.classList.remove("is-valid");
  emailInput.classList.remove("is-invalid");
}

passwordInput.onkeyup=()=>{
  passwordInput.classList.remove("is-valid");
  passwordInput.classList.remove("is-invalid");
}

submitBtn.onclick = () => {
  let isInputOk=true;
  if (firstNameInput.value === ""){
    isInputOk=false;
    firstNameInput.classList.add("is-invalid");
  } else {
    firstNameInput.classList.add("is-valid");
  }
  if (lastNameInput.value === ""){
    isInputOk=false;
    lastNameInput.classList.add("is-invalid");
  } else {
    lastNameInput.classList.add("is-valid");
  }
  if (validateEmail(emailInput.value)){
    emailInput.classList.add("is-valid");
  } else {
    isInputOk=false;
    emailInput.classList.add("is-invalid");
  }
  if (passwordInput.value.length<6){
    isInputOk=false;
    passwordInput.classList.add("is-invalid");
  } else {
    passwordInput.classList.add("is-valid");
  }
  if(isInputOk){
    alert("Registered secessfully");
  }
};
