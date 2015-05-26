$(document).ready(function () {

	var loginstatus = false;

	$("body").removeClass("preload");

	$(".signup-button").click(function () {
		$(".signup-after").show();
		$(".signup-before").hide();
	});

	$("#login-status").click(function () {
		if (loginstatus) {
			$(".login").css("opacity", "0");
		}
		else {
			$(".login").css("opacity", "100");
		}
		loginstatus = !loginstatus;
	});
});