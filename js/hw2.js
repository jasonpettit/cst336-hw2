//Javascript File
function isFormValid(){
    let isValid = true;
    if ($("#q1").val() == "") {
        isValid = false;
        $("#validationFdbk").html("Question 1 was not answered");
    }
    else if($("#q8").val() =="") {
        isValid = false;
        $("#validationFdbk").html("Question 8 was not answered");
    }
    return isValid;
}