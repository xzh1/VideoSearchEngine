VideoSearchEngine
=================

A motion controllable video search engine using YouTube API support keyword search

The idea for the project was researching a new way how users could interact with browser. 
Since beamers and big screens are more commonly adopt by common users, I proposed users 
could do gesture control with a Kinect as using remote controller to browse Internet.
I made a simple video search engine with YouTube API. To make the layout of the page more 
suitable for gesture control, I did a HCI survey on several users and finally decided use 
the star network layout to organize several stacks of search results.

The stack in the central is a bunch of videos most related (the degree of association is 
determined by YouTube API) to the keyword given by user. The peripheral stacks are videos 
users may also be interested in. They are recommended by YouTube.

By simple gestures, users can put one peripheral stack to the centre and those videos related 
to the new central stack will be retrieved from YouTbe. Users are possible to use simple 
gestures to expand a stack of videos and view any of them.

Gestures are binding with keyboard messages which means if users don't have a Kinect, they can 
still use keyboard to control the site.

If you have a Kinect, please connect it to your computer, use the application in 'MotionControl'
folder, run 'kinect.exe' and open the video search engine to play with it. 

If you don't have a Kinect, you can still use keyboard to try the site.

ENTER is for forward.
CTRL is for going back.
LEFT, RIGHT, UP, DOWN and 1, 2, 3, 4 keys are for 8 directions movement.
LEFT, RIGHT keys are also for progress control while playing videos.
UP, DOWN keys are for sound volume control while playing videos.
