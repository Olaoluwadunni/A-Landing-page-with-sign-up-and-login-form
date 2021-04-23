function validateForm() {
    var x = document.forms["myform"][""].value;
    if (x =="") {
        alert("Name must be filled out");
        return false;
    }
}