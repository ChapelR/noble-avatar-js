Noble avatars is a drop-in character portrait generator for the SugarCube 2 story format of Twine. It was built using resources that were generously open-sourced by [Noble Master Games](http://www.noblemaster.com). All the code was written from the ground up in JavaScript to work with SugarCube. 

[Visit the homepage.](http://twinelab.net/noble-avatar-js/)  
[Live demo.](http://twinelab.net/noble-avatar-js/demo/)

## Downloads
* [From Google Drive](https://drive.google.com/open?id=1rCXShwoD3teElwwgheosZyYeUREfjtnB)
* [From GitHub](https://github.com/ChapelR/noble-avatar-js/releases)

## Documentation
* [Installation guide](./2-Installation.md)
* [Usage guide](./3-Usage.md)
* [Configuration options](./4-Config.md)
* [Macros](./5-Macros.md)
* [Avatar passages](./6-Avatar-Passages.md)
* [JavaScript API](./7-JavaScript-API.md)
* [CSS selectors reference](./8-CSS-Reference.md)
* [Using custom components](./9-Customization.md)

## Features
* Allows for player-controlled custom character creation out of the box, using a simple macro. 
* Portraits can be made clickable and used like `<link>>` macros for things like initiating conversations or seeing character descriptions. 
* Can be used to generate random and predefined character portraits for all your character-generating needs, using a simple, passage and macro-based API. 
* 15 trillion + combinations (supposedly, didn't do the math myself). 
* Includes a bevy of customization options and configuration settings. 
* A fairly complete JavaScript API and CSS selectors reference for tailoring the system to your needs. 
* Includes an optional preloader for the image assets to ensure good performance. 
* Simple to install and use. 

### Some things that aren't supported (at least right now).
* This was designed to use SugarCube, so does not work as a general-use JavaScript library or Twine plug-in. 
* Using custom assets is possible but would requires some finagling to get it right. Making that less complex will be a design goal for the future, assuming this library sees some use and it is requested. 
* Unfortunately, Noble Avatars uses totally different assets for the base male and female options, meaning that gender selection is completely binary and required. 
* Right now, there's no way to tag certain creation options (outside gender restrictions and required-ness, i.e. all characters require eyes), meaning character portraits that are generated randomly are completely random by default, though you can use the API to supply only certain options to certain randomized characters, but this is labor-intensive. 

## Licensing info
This code is licensed under MIT.  See the license for more.  In general, you must provide attribution to me (Chapel) in addition to including the info from the credits section somewhere in your game, like an about page.  It does not need to be particularly prominent. Please avoid implying that any of the individuals, myself included, directly worked on or endorsed your project.

## Credits
[Avatar graphics created by Noble Master Games](http://www.noblemaster.com)  
[Avatar graphics designed by Mei-Li Nieuwland](http://liea.deviantart.com)  
Noble Avatar Graphics licensed under [CC-BY-3.0](https://creativecommons.org/licenses/by/3.0/legalcode)