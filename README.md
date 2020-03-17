![ TradTracker.com](https://github.com/Andeweg01/tradTracker/blob/master/assets/img/TradTracker.png?raw=true)

# Cork TradTracker.com

## Sascha Andeweg's Interactive Frontend Development Milestone Project for CodeInstitute

I enjoy traditional Irish music myself and there's nothing better than being where it's played: the pub sessions. 
Trying to look online for venues or pubs where the music is played on a regular basis near my hometown in county Cork, Ireland, 
I've often wished for a website where all the venues (generally pubs) are shown on a map, the way that for instance booking.com does it with hotels.
This is where the idea came up to build a site with Google Maps functionality showing all the venues in county Cork.

As mentioned, very few websites have collected locations for this specific theme, while this is a huge part or Irish heritage and hugely appreciated
by tourists and other visitors, and locals like myself... 
For now this site is built for educational purposes, but after adding more features it should be fit for the real world.
When proven successful, the idea will be extended to more counties. Even cross border...


## UX
The goal of the site is to provide a quick overview of all the locations where sessions are played regularly and a quick filter on specific days of the week.
Initially the map loads with all the available markers (pubs); a no-click-result. Colours are chosen to be linked to Ireland (green) but not the deep, 
dark green you might think of when looking for pubs. This is to try and avoid a cliche, dark atmosphere. Even though these dark colours are associated with 
a night in the pub, the site has to be inviting, modern looking but most of all practical. This light, but still traditional colour green works well 
as family and friends confirmed.
Only a short description of what the site is about and how it works should be enough for a very quick result for the user.  

The logo is my own design. For music enthousiast very clearly a pick for stringed instruments but at the same time a location pin as used in Google Maps. 
The descriptive and decorative text 'Find your session now' is placed in the font that Fender uses for it's brand. 
Another clear indication that we're talking music here.

The page 'About.html' gives some standard information about myself and on traditional music, taken from Wikipedia. This could later be localised, since there's quite some
interesting information on traditional music in Cork that is not that widely known.
The background picture is kept light to avoid interference with the text.

The page 'Form.html' shows a simple form in a similar layout to about.html. Pub owners are businessmen and don't want to spend much time on filling out forms, even online. 
The form is processed with EmailJS.com and gives a response pop up when successfully sent, or for some reason failed.


A few examples of how this site can benefit users:

### Music lover:

A person like myself might feel like enjoying a night out with good traditional Irish music. 
Visiting cork.tradtracker.com will show the map of Cork with markers where the music is on.
The required day can be selected and the locations are filtered on the day that sessions are on.

### Tourist:

Many tourists in Ireland consider being in a pub with trad music the ultimate experience on their holidays. 
It could require asking around, surfing the web for scattered information and a bit of luck to find this hidden gem. 
With cork.tradtracker.com the information is there for them. Pick a location and it'll show them where to go for a guaranteed good Irish night out.

### Pub owners:

Having locations of one's pub on a map showing their regular trad sessions can generate extra revenue by attracting more customers.
Also the organiser of sessions can plan more effectively when he's up-to-date with the days that other pubs have their sessions.


## Features

The site will consist of very brief explanation of what can be found on the map and why this is the best place to find that information.
The map will be the main focus with the filter to select the day of the week.
A form for organisers to add their venue and additional information or to ask for more information.
An about page with some information about the maker and his intentions with this site.

### Features Left to Implement

* Filtering on more catergories like type of music, instrument used or musicians
* More links to useful information on Irish trad
* Possibly linking to TripAdvisor for ratings 
* Clicking on the marker will give the user more information on the location.
* Social media links when set up.


### Technologies used:
  * [FontAwesome](https://fontawesome.com/) for icons like the pin symbol, phone and email symbols where the contact details for Designed.Irish are.
  * [Google Fonts](https://fonts.google.com/) for the used font Open-Sans.
  * [Bootstrap 4.4.1](https://getbootstrap.com/) for basic elements and components like the toggle navbar (which always stays the hamburger-type), flexbox functionality, resonsiveness.
  * HTML5
  * CSS3
  * JavaScript
  * [Google Maps API](https://developers.google.com/maps/documentation) for placing markers and clustering of markers.
  * [JQuery 3.4.1](https://jquery.com/download/) is only used for the toggle menu, but will play a role in a next fase where more data for clicked markers will be shown.
  * [EmailJS](https://www.emailjs.com/) for processing the email form on the page form.html.


## TESTING:

Testing of the website is done physically on Windows 10 desktop, tablet and laptop, Android tablet and phone, iPad iOS, iPhone and MacBook Pro.
The tested browsers were Chrome, Edge, Firefox, Samsung for Android tablet, Safari. Not all browsers were available on all platforms as the table hereunder shows.
The following was tested:

1 *Responsiveness:* Do the columns flow correctly resizing the screen or rotating. Do images resize as intended and does all text stay readable and visible.

2 *Navigation:* Do all the links in the navigation link to the appropriate pages and does the radio button selection refresh the Google Maps map accordingly.

3 *Links:* Do all the links and radio buttons function properly and do all functions and links stay within the site as intended (no _blank) at this point.

4 *Form:* Does the form warn when fields are blank before sending and does the pop up show when successfully sent.

5 *Map redraw:* Does the map redraw with the relevant markers when opening and selecting 'days' with the radio buttons.

|   Windows 10 pc and laptop:       |   Chrome   |   Firefox   |   Edge   |   Samsung   |   Safari   |
| --------------------------------  |   ------   |   -------   |   ----   |   -------   |   ------   |
|   1                               |      +     |      +      |     +    |            |            |
|   2                               |      +     |      +      |     +    |             |            |
|   3                               |      +     |      +      |     +    |             |            |
|   4                               |      +     |      +      |     +    |             |            |
|   5                               |      +     |      +      |     +    |             |            |
| --------------------------------  |   ------   |   -------   |   ----   |   -------   |   ------   |
|   Windows 10 desktop:             |   Chrome   |   Firefox   |   Edge   |   Samsung   |   Safari   |
| --------------------------------  |   ------   |   -------   |   ----   |   -------   |   ------   |
|   1                               |      +     |      +      |     +    |             |            |
|   2                               |      +     |      +      |     +    |             |            |
|   3                               |      +     |      +      |     +    |             |            |
|   4                               |      +     |      +      |     +    |             |            |
|   5                               |      +     |      +      |     +    |             |            |
| --------------------------------  |   ------   |   -------   |   ----   |   -------   |   ------   |
|   Android tablet:                 |   Chrome   |   Firefox   |   Edge   |   Samsung   |   Safari   |
| --------------------------------  |   ------   |   -------   |   ----   |   -------   |   ------   |
|   1                               |      +     |      +      |          |       +     |            |
|   2                               |      +     |      +      |          |       +     |            |
|   3                               |      +     |      +      |          |       +     |            |
|   4                               |      +     |      +      |          |       +     |            |
|   5                               |      +     |      +      |          |       +     |            |
| --------------------------------  |   ------   |   -------   |   ----   |   -------   |   ------   |
|   Android phone:                  |   Chrome   |   Firefox   |   Edge   |   Samsung   |   Safari   |
| --------------------------------  |   ------   |   -------   |   ----   |   -------   |   ------   |
|   1                               |      +     |             |          |             |            |
|   2                               |      +     |             |          |             |            |
|   3                               |      +     |             |          |             |            |
|   4                               |      +     |             |          |             |            |
|   5                               |      +     |             |          |             |            |
| --------------------------------  |   ------   |   -------   |   ----   |   -------   |   ------   |
|   iPad:                           |   Chrome   |   Firefox   |   Edge   |   Samsung   |   Safari   |
| --------------------------------  |   ------   |   -------   |   ----   |   -------   |   ------   |
|   1                               |      +     |             |          |             |      +     |
|   2                               |      +     |             |          |             |      +     |
|   3                               |      +     |             |          |             |      +     |
|   4                               |      +     |             |          |             |      +     |
|   5                               |      +     |             |          |             |      +     |
| --------------------------------  |   ------   |   -------   |   ----   |   -------   |   ------   |
|   iPhone7+                        |   Chrome   |   Firefox   |   Edge   |   Samsung   |   Safari   |
| --------------------------------  |   ------   |   -------   |   ----   |   -------   |   ------   |
|   1                               |      +     |             |     +    |             |      +     |
|   2                               |      +     |             |     +    |             |      +     |
|   3                               |      +     |             |     +    |             |      +     |
|   4                               |      +     |             |     +    |             |      +     |
|   5                               |      +     |             |     +    |             |      +     |
| --------------------------------  |   ------   |   -------   |   ----   |   -------   |   ------   |
|   MacBookPro:                     |   Chrome   |   Firefox   |   Edge   |   Samsung   |   Safari   |
| --------------------------------  |   ------   |   -------   |   ----   |   -------   |   ------   |
|   1                               |            |             |          |             |      +     |
|   2                               |            |             |          |             |      +     |
|   3                               |            |             |          |             |      +     |
|   4                               |            |             |          |             |      +     |
|   5                               |            |             |          |             |      +     |
| --------------------------------  |   ------   |   -------   |   ----   |   -------   |   ------   |

Colours look good on all platforms and browsers.


## DEPLOYMENT

Development was done within Adobe Dreamweaver to avoid losing code when GitPod glitches. 
Deploying to another live environment (tradtracker.com) gave me more information on how code was behaving and was sometimes just quicker to check.
Code was copied regularly to GitPod where the assets and files were pushed to the GitHub repository. Sessions with tutors and mentor were mostly done on GitPod.

## CREDITS

### Content
The locations used on this initial map was found partly on [TradConnect](https://tradconnect.com/page/ireland-sessions-listing-pub/) and Facebook profiles of pubs. 
Text on the about.html page on traditional music was taken from Wikipedia.

### Media
The photographs used on the site are my own.

## Acknowledgements
The overall design is my own. The hamburger navigation on top comes from [Bootstrap](https://getbootstrap.com/).
Much of the html and css code is based on earlier lessons in the CodeInstitute course. 
JavaScript code has been tough for me. I have tried different approaches based on fellow student's code, 
a good friends' code who is well versed in Java but not JavaScript. I learned a lot about the structure, but got lost in the differences in syntax.
Ultimately the help of my mentor Aaron Sinnott got me through the challenges of cracking the puzzle. He has shown me some latest developments in
how to approach the filtering and redrawing the Google Maps map, resulting in a compact script that tested successfully on all devices available to me physically and
only showing standard errors on the bootstrap library in validators.

I thank the Code Institute for their well organised and enthousiastic support. Their commitment to my success is much appreciated.