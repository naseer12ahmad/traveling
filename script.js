const container = document.querySelector(".container");

document.querySelector(".open-navbar-icon").addEventListener("click", () => {
  container.classList.add("change");
});

document.querySelector(".close-navbar-icon").addEventListener("click", () => {
  container.classList.remove("change");
});

const colors = ["#6495ed", "#7fffd4", "#ffa07a", "#f08080", "#afeeee"];

let i = 0;

Array.from(document.querySelectorAll(".nav-link")).forEach(item => {
  item.style.cssText = `background-color: ${colors[i++]}`;
});

Array.from(document.querySelectorAll(".navigation-button")).forEach(item => {
  item.onclick = () => {
    item.parentElement.parentElement.classList.toggle("change");
  };
});


   function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}

$("#submitButton").click(function() {
	var errorMessage = "";
	var fieldsMissing = "";

	if ($("#name").val() == "") {
		fieldsMissing += "<br>Name";
	}

	if ($("#email").val() == "") {
		fieldsMissing += "<br>Email";
	}

	if ($("#phone").val() == "") {
		fieldsMissing += "<br>Telephone";
	}

	if ($("#password").val() == "") {
		fieldsMissing += "<br>password";
	}

	if ($("#passwordConfirm").val() == "") {
		fieldsMissing += "<br> Confirm password";
	}

	if (fieldsMissing != "") {
		errorMessage += "<p>The following field(s) are missing:</p>" + fieldsMissing;
	}


$("#name").on("blur", function() {
    if ( $(this).val().match('^[a-zA-Z]{3,16}$') ) {
        alert( "Valid name" );
    } else {
        alert("That's not a name");
    }
});
   if ($("#name").val() == false) {
   	errorMessage += "<p>Your name is required</p>";
   }

	if (isEmail($("#email").val()) == false) {
		errorMessage += "<p>Your email address is not valid</p>";
	}
	if ($.isNumeric($("#phone").val()) == false) {
		errorMessage += "<p>You phone number is not numeric</p>";
	}
	if($("#password").val() != $("#passwordConfirm").val()) {
		errorMessage += "<p>Your password don't match";
	}
	if (errorMessage != "") {
		$("#errorMessage").html(errorMessage);
	} else {
		$("#successMessage").show();
		$("#errorMessage").hide();
	}
});