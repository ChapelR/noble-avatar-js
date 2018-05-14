## Configuration Options

If you open up `noble.min.js`, you'll see something like this at the top of the script:

```
window.Noble=window.Noble||{},
Noble.config = {
    cache: true,
    portraitPassages: { tag: "avatar", onStartup: true },
    storyVar: "$nobleAvatars",
    defaultStrings: {
        swapGender: {
            both: "",
            female: "Change to Male",
            male: "Change to Female"
        },
        confirmBtn: "Confirm",
        groupNames: {
            base: "Skin",
            eyes: "Eyes",
            mouths: "Mouth",
            hair: "Hair",
            beard: "Beard",
            features: "Features",
            glasses: "Glasses",
            neck: "Neck",
            accessories: "Hat"
        }
    }
},
```

These are the configuration options you can edit.

### The `cache` option.
This option determines whether or not the image assets used by this system should be preloaded on startup.  If you allow them to preload, you can prevent a great deal of potential awkwardness, like images popping in layer-by-layer, or the editor hanging for a split second when the user makes a choice.  However, this forces your game to load before the loading screen is dismissed, meaning it can add to the game's initial load times, at least the first time a user plays your game.

If you have a lot of other stuff preloading, and the initial load time is too long, it may be a good idea to shut this option off.

### The `portraitPassages` options.
There are two options here, `tag` and `onStartup`.  You can create an [avatar passage](#6-Avatar-Passages.md) by tagging any passage with the indicated tag.  By default, this tag is `avatar`.  If you already need that tag for something else, or if you just feel like changing it, you can change it using this option.  The `onStartup` option determines whether these avatar passages should be loaded at start up, or as you request them in your code.  Unless you have a whole lot of avatar passages and they seem to be slowing your initial load times, it's not recommended you shut this off.

### The `storyVar` option.
This system creates a story variable (called `$nobleAvatars` by default) to store avatar data so it can be saved, loaded, undone, and redone along with your other stateful information.  If you already need the default variable for something else in your story, you can change this value to something else.  Be sure to start it with a $, or you may experience errors.

### The `defaultStrings` options.
These options allow you to change the strings used in the editor interface, either to translate them, or to make them match your world a bit better.

* `swapGender`: You can change these strings to alter the name of the gender-change button.  You can include a string for when the avatar is currently female and for when the avatar is currently male.  If you include an option for `both`, that option will override the others and always be shown, regardless of the avatar's current gender.
* `confirmBtn`: The confirm button in the editor interface.
* `groupNames`: The names of each group or category in the editor.