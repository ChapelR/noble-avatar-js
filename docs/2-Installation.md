## Installation Guide

### Part 1: Get the files.

Download the files, or grab the `dist/` directory of this repo.  You need the `cac` folder with all it's images, and the `noble.min.css` and `noble.min.js` files.  You can also download an html version of the documentation for offline use.

Download the files:
* [From Google Drive](https://drive.google.com/open?id=1rCXShwoD3teElwwgheosZyYeUREfjtnB)
* [From GitHub](https://github.com/ChapelR/holy-land-demo/raw/master/noble-avatar/noble-avatars.zip)
* [From HolyLandGame.com](http://holylandgame.com/noble-avatar/noble-avatars.zip)

Download the docs:
* [From Google Drive](https://drive.google.com/open?id=1U27wuSrZjXOr1-Jcu5clgqKEM2aYsddr)
* [From GitHub](https://github.com/ChapelR/holy-land-demo/raw/master/noble-avatar/noble-avatars.docs.zip)
* [From HolyLandGame.com](http://holylandgame.com/noble-avatar/noble-avatars.docs.zip)

### Part 2: Place the `cac` folder.

Do **NOT** move any of the files inside the `cac` folder.  Place this folder with your published html file, in the same folder, so that it looks something like this:

```
.
+-- index.html
+-- cac
|   +-- accessories
|   +-- etc...
```

This is the only way the images can be found and loaded by your game.  This also means that you will need to upload your entire folder structure to host it online, and that you'll need to provide this entire structure to users who download your game (probably as an archive).  This also, unfortunately, means that you won't be able to host your game to philome.la.  However, you can still use: GitHub pages, BitBucket pages, Itch.io, and NewGrounds, among many others, to host your game for free.  You can also still package your game using NW.js and Electron if desired.

### Part 3: Place the JavaScript and CSS files.

If you're using Twine 2, open the `noble.min.js` file in a text editor (not a word processor) and copy and paste the contents into your story JavaScript area.  Do the same thing with `noble.min.css`, pasting it into your story Stylesheet area.

For Twine 1, you will do the same things, except you'll be pasting the JavaScript portion into a `script`-tagged passage, and the CSS portion into a `stylesheet`-tagged passage.  You can creat new passages and add the tags yourself, or right-click on a blank spot in the editor and select `new script here` and `new stylesheet here` to generate each passage.

For the CLI compilers like Twee2 and Tweego, simply place the `noble.min.css` and `noble.min.js` files into your project directory, or add them to the command line arguments when you build.  Remember, the `cac` folder will go in your output directory, not in your project files!

### Part 4: Testing.

Once everything is in place, build and run your project to make sure nothing explodes.  You can check to make sure the install was successful by looking at the global object `Noble` in your console.  If it doesn't seem to work, try these things before reporting an issue:
* Update to the latest version of SugarCube 2.
* Update your compiler.
* Try the whole thing again.  Delete all the files, re-download and go.
If it still doesn't work, please [open an issue](https://github.com/ChapelR/noble-avatar-js/issues/new) and let me know.