//detection for key pressed
document.onkeydown=checkkey;
function checkkey() {
	var event=document.all?window.event:arguments[0];
	key = event.keyCode;
	if(document.getElementById("central_stack").style.display != "none")
	{
		if(key == 50)//key2
		{
			//humane.error("move to top-right");
			movetodirection("top-right");
		}
		else if(key == 38)//key up
		{
			//humane.error("move up");
			movetodirection("up");
		}
		else if(key == 49)//key1
		{
			//humane.error("move to top-left");
			movetodirection("top-left");
		}
		else if(key == 39)//key right
		{
			//humane.error("move right");
			movetodirection("right");
		}
		else if(key == 37)//key left
		{
			//humane.error("move left");
			movetodirection("left");
		}
		else if(key == 52)//key4
		{
			//humane.error("move to bottom-right");
			movetodirection("bottom-right");
		}
		else if(key == 40)//key down
		{
			//humane.error("move down");
			movetodirection("down");
		}
		else if(key == 51)//key3
		{
			//humane.error("move to bottom-left");
			movetodirection("bottom-left");
		}
		else if(key == 13)//key enter
		{
			if(document.getElementById("insmasker"))
			{
				removeinstruction();
			}
			else
			{
				humane.error("enter");
				zoomout();
			}
		}
		else if(key == 17)//key ctrl
		{
			humane.error("back");
			stacksgoback();
		}
	}
	if(state == 3 && document.getElementById("videolist0").style.display != "none")
	{
		if(key == 50)//key2
		{
			//humane.error("move to top-right");
			chagechoice("top-right");
		}
		else if(key == 38)//key up
		{
			//humane.error("move up");
			chagechoice("up");
		}
		else if(key == 49)//key1
		{
			//humane.error("move to top-left");
			chagechoice("top-left");
		}
		else if(key == 39)//key right
		{
			//humane.error("move right");
			chagechoice("right");
		}
		else if(key == 37)//key left
		{
			//humane.error("move left");
			chagechoice("left");
		}
		else if(key == 52)//key4
		{
			//humane.error("move to bottom-right");
			chagechoice("bottom-right");
		}
		else if(key == 40)//key down
		{
			//humane.error("move down");
			chagechoice("down");
		}
		else if(key == 51)//key3
		{
			//humane.error("move to bottom-left");
			chagechoice("bottom-left");
		}
		else if(key == 13)//key enter
		{
			humane.error("play");
			playvideo();
		}
		else if(key == 17)//key ctrl
		{
			humane.error("go back");
			videolistgoback();
		}
	}
	if(state == 4 && document.getElementById("playerContainer").style.display != "none")
	{
		if(key == 38)//key up
		{
			//humane.error("louder");
			louder();
		}
		else if(key == 40)//key down
		{
			//humane.error("less louder");
			lesslouder();
		}
		else if(key == 39)//key right
		{
			//humane.error("seek more time");
			seekmore();
		}
		else if(key == 37)//key left
		{
			//humane.error("seek less time");
			seekless();
		}
		else if(key == 13)//key enter
		{
			//humane.error("change state of player");
			changeplayerstate();
		}
		else if(key == 17)//key ctrl
		{
			humane.error("play stoped");
			playergoback();
		}
	}
}