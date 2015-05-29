$(document).ready(function () {

	var loginstatus = false;

	$("body").removeClass("preload");

	$(".signup-button").click(function () {
		$(".signup-after").show();
		$(".signup-before").hide();
	});

	$("#login-status").click(function () {
		if (loginstatus) {
			$(".login").hide();
		}
		else {
			$(".login").show();
		}
		loginstatus = !loginstatus;
	});

	$("#signup").click(function () {
		window.location = 'map.html';
	});
});