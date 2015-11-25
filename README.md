# WindesheimPlayer

![](https://github.com/HerrKauwer/WindesheimPlayer/raw/master/screenshot.png)

This is an example Spotify webplayer built for the Windesheim Bedrijvendag of 24-11-2015.

Use the "Download ZIP" button on the right to quickly download this project without having to install git first.

# Running the project
Simply host this project in your favorite Webserver such as Apache, NGINX or IIS. You can also run this using the http-server command-line server. This is what I did during the presentation.

Howto:

Install Node.js from https://nodejs.org/en/

Open an elevated command prompt

Install http-server using npm:

    npm install http-server -g
	 
Navigate to the root of this project (where index.html is) in your command prompt. Run:

    http-server
	
This should output something like:

    Starting up http-server, serving ./
    Available on:
      http:127.0.0.1:8080
	
Your website should now be available. Open a modern browser and go to http://127.0.0.1:8080

Have fun!

For this project I used:
Bootstrap http://getbootstrap.com/
jQuery http://jquery.com/
Knockout http://knockoutjs.com/
Spotify Web API https://developer.spotify.com/web-api/ they have many more great examples!