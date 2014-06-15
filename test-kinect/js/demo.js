$(function() {
	var $demoReadout;

	$demoReadout = $('#central_stack');
	$demoReadout.html('Press some keys...');
	
	$(document).on('keydown', updateReadout);
	$(document).on('keyup', updateReadout);

	function updateReadout() {
		setTimeout(function() {
			var keys, keysString;

			keys = KeyboardJS.activeKeys();
			if(keys.length) {
				keysString = keys.join(', ');
				if(keysString == "left")
				{
					humane.error("left");
				}
				if(keysString == "right")
				{
					humane.error("right");
				}
				if(keysString == "up")
				{
					humane.error("up");
				}
				if(keysString == "down")
				{
					humane.error("down");
				}
				if(keysString == "left, down" || keysString == "down, left")
				{
					humane.error("left-botom");
				}
				if(keysString == "rght, down" || keysString == "down, right")
				{
					humane.error("right-bottom");
				}
				if(keysString == "left, up" || keysString == "up, left")
				{
					humane.error("left-top");
				}
				if(keysString == "right, up" || keysString == "up, right")
				{
					humane.error("right-top");
				}
				if(keysString == "enter")
				{
					humane.error("enter");
				}
				if(keysString == "ctrl")
				{
					humane.error("ctrl");
				}
			} else {
				keysString = 'Press some keys...';
			}
			$demoReadout.html(keysString);
		}, 0);
	}
});
