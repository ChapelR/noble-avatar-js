## Usage Guide

### General Info
This is a set of functions, macros, assets, and other necessary plumbing for creating avatars in your game.  You can have the user create and customize their own avatar, create and use static avatars (such as for NPCs), and even create randomized avatars (JavaScript API only for now; complete system coming soon).

Every avatar has an ID, which is a unique name you'll use to access, display, save, edit, or alter them.  Avatar IDs can be any string, but I recommend using something that follows the same rules as an HTML/CSS id; that is, don't start with a number, and use dashes or underscores instead of sapces.

What ID an avatar has is determined by:
* For player-created avatars, you assign the ID with the [`<<avatarmaker>>` macro](5-Macros.md).
* For an [avatar passage](6-Avatar-Passages.md), the name of the passage is the avatar's ID.
* When you create an avatar via the JavaScript API, one of the arguments you pass to the `Noble.Character` constructor will be an ID.

### Quick Overview
* [Macros.](5-Macros.md)
    * `<<pt avatarID [options]>>`: creates and shows a portrait.
    * `<<ptlink avatarID [options]>><</ptlink>>`: creates and shows a clickable portrait; used like a `<<link>>` macro.
    * `<<avatarmaker avatarID passageName debug>>`: shows an avatar editor to the user, so they can make their own custom avatar.
* [JavaScript API](7-JavaScript-API.md)
    * `window.Noble`: the global namespace for all the APIs and options.
    * `Noble.config`: the configuration options are stored (and edited) here.
    * `Noble.components`: where the relative urls to components (the individual options) are stored.
    * `Noble.slots`: this interface is primarily for creating custom and random characters.
    * `Noble.editor`: this interface handles all the editor functionality.
    * `Noble.Character`: this constructor turns an object into an avatar object.
    * `Noble.Portrait`: this constructor builds a jQuery-wrapped output element from `Noble.Characters` instances.
    