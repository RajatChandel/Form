



var name, lastname, numberr, email;

function _(x){
	return document.getElementById(x);
}

function processPhase1(){
	name= _("inf_field_FirstName").value;
	lastname= _("inf_field_LastName").value;
$(".alertbox").css("display","none");

	if(name.length > 2) {
		if(lastname.length > 2){
			
		
        $("#phase1").css("display","none");
        $("#phase2").css("display","block");
        _("progressbar").value=100;
        _("status").innerHTML= "Step 2 of 2";
    }else{
    	$("#alert2").css("display","block");
    }
	}else{

		$("#alert").css("display","block");

	}
}

function submitfrm(){
	$(".alertbox").css("display","none");
	numberr= _("inf_field_Phone1").value;
	email=_("inf_field_Email").value;
	console.log(email);
	var filter = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
if(numberr.length > 0){
	if(filter.test(email)== false ){
		$("#alert1").css("display","block");
	}else{
	_("inf_form_3ab7e44006e346a46354cf7bc5c0f2ac").submit();
}} else{
	$("#alert3").css("display","block");
}

}