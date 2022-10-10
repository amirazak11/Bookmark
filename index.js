var pizza =document.getElementById("pizza");
var checkemail=document.getElementById("checkemail");
var ingrediant =document.getElementById("ingrediant");
var inputitem=document.querySelector("input")



function addData(){
    if (validateName() == true && inputitem !="") {

        window.location.href = "http://google.com";

    }


}

function validateName() {
    var regextext = /^[A-Z][a-z]{3,8}$/;
    if (regex.test(inputitem.value) == true || siteUrl.value != "" ) {
                document.getElementById("name-validation").classList.replace("d-block", "d-none");

    return true
    } else {
        document.getElementById("name-validation").classList.replace("d-none","d-block")
     return false
    }
}