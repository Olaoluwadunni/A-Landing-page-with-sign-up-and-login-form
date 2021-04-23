const pwd = document.getElementsById ("psswd").nodeValue;
const confPwrd = document.getElementById("confirm_password");
const input= document.getElementsByClassName("FirstName");
const input2= document.getElementsByClassName("LastName");
const input3= document.getElementsByClassName("email");
const input4= document.getElementsByClassName("password");
const input5= document.getElementsByClassName("conf_password");
const modalss= document.getElementsByClassName("mymodal");
const modalss2= document.getElementsByClassName("mymodal");
const span= document.getElementsByClassName("mymodal2");
const span2= document.getElementsByClassName("close-button");
const checkBox= document.getElementsByClassName("close-button2");
const checkBox = document.getElementsByClassName("use");

//clears all inputs once submit is successful. and each of the input variable value is assigned an empty string
function clearInputs() {
    input.value="";
    input2.value="";
    input3.value="";
    input3.value="";
    input4.value="";
    input5.value="";
}
function verifyName() {
    return input.value.length;
  }
  function verifyName2() {
    return input2.value.length;
  }
  function verifyPass() {
    return input4.value.length;
  }
  function verifyPass2() {
    return input5.value.length;
  }
   function popUp() {
    modalss.style.display = 'block';
    span.onclick = function() {
      modalss.style.display = "none"; 
    }
  }
  function successPopUp() {
    modalss2.style.display = 'block';
    span2.onclick = function() {
      modalss2.style.display = "none"; 
    }
  }

// This function verifys if a user inputs at least 4 character in the input fields. The lastname, firstname, password and confirm password input is returned. The functions are then specified using an if statement with the logical or operator
function validate() {
    if (pwrd!=confPwrd) {
        alert("password do not match");
    }
    else if (verifyName() < 4 || verifyName2() < 4 || verifyPass() < 4 || verifyPass() < 4) {
        popUp();

        //backend can redirect the link to login page after collecting the information
        //document.valid_psswd.submit()l
    } else {
        successPopUp();
        clearInputs();
    }
}