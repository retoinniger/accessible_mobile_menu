$(document).ready(function () {
	'use strict';
	/******************** mobile nav toggler ********************/
	$('#mobile_menu').click(function () {
		$('#menu').toggleClass('expanded');

		if ($('#menu').hasClass('expanded')) {
			$('#mobile_menu').attr('aria-expanded', 'true');
		} else {
			$('#mobile_menu').attr('aria-expanded', 'false');
		}
	});
});
