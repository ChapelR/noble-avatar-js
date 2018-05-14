## Macros

### The `<<pt>>` Macro

**Syntax**: `<<pt avatarID [options]>>`

This macro creates a portrait of the avatar with the provided ID.

**Arguments**:

* **avatarID** (string): Each avatar has an ID.  If you're having the user create avatars, the ID is assigned as part of the `<<avatarmaker>>` macro call.  If you're instead importing avatars as passages using an `avatar`-tagged passage, then the ID is the name of the passage.
* **options** (string | string array) (optional): You can supply a number of display options to your portrait, including borders, sizing, and floating. You can pass options as a list of space-separated quoted strings, a quoted list of space-separated strings, an array of strings, or any combination of these.  You should generally only pass one option for each group listed below.  If you don't pass any options: the image will not be floated, the image will be 400px by 400px, and the image will have no borders.  You can also edit the appearance of portraits in more detail using [CSS](css-ref.md).
  * float options (`'right'` or `'left'`): Floats the image to the indicated side of the screen.
  * sizing options (see list below): You can size the image using these options, using the keywords below.  You can also include the `'relative'` keyword with some of the following size options to make the images responsive.
    * `'tiny'`: 64px, no relative option.
    * `'small'`: 128px, 4em relative.
    * `'medium'`: 256px, 8em relative.
    * `'large'`: 320px, 12em relative.
    * `'very-large'`: 400px, 16em relative.
    * `'max-safe'`: 400px, no relative option.
    * `'oversized'`: 600px, no relative option.
  * border options (see list below): You can add a border to the image using these keywords.  The style of the borders are described below.  You can add the keyword `'invert'` to your options to invert the default colors of the borders.
    * `'material'`: creates a box-shadow effect around the portrait.
    * `'border-thin'`: creates a 2px solid border around the portrait.
    * `'border-thick'`: creates a 6px solid border around the portrait.
    * `'border-outset'`: creates an outset border around the portrait.
    * `'border-inset'`: creates an inset border around the portrait.

**Examples**:
```
<<pt 'player'>>

<<pt 'guard' 'relative' 'small'>>

<<pt 'king' 'medium' 'invert' 'outset'>>

<<pt 'player' 'material'>>
```

### The `<<ptlink>>` Macro

**Syntax**: `<<ptlink avatarID [options]>><</ptlink>>`

This macro is the same as the `<<pt>>` macro, except that the portrait is rendered as a click-able link.  You can use this macro to run any kind of code on click, just like a `<<link>>` or `<<button>>`.

**Arguments**:

* **avatarID** (string): Each avatar has an ID.  If you're having the user create avatars, the ID is assigned as part of the `<<avatarmaker>>` macro call.  If you're instead importing avatars as passages using an `avatar`-tagged passage, then the ID is the name of the passage.
* **options** (string | string array) (optional): See the `<<pt>>` macro above.

**Examples**:
```
/% Creating a description dialog. %/
<<ptlink 'bob' 'border-thin'>>
    <<script>>
        Dialog.setup('Bob Description');
        Dialog.wiki('This is Bob.');
        Dialog.open();
    <</script>>
<</ptlink>>
```
```
/% Creating link that leads to a talk passage. %/
<<ptlink 'jimmy'>>
    <<goto 'talk to jimmy'>>
<</ptlink>>
```

### The `<<avatarmaker>>` Macro

**Syntax**: `<<avatarmaker avatarID passage [debug]>>`

This macro renders the avatar editor onto the page for the user to create an avatar.  The avatar created is stored with the provided ID, and clicking the confirm button forwards the user to the indicated passage.  Unfortunately, there are a few limitations in effect for this macro.  First, if you include multiple `<<avatarmaker>>` macros on the same page, only the one the player pressed the confirm button on will be created.  Secondly, the passage must be forwarded for the avatar to be saved right now.  Altering this to give more developer freedom is on my to-do list.  You can also use this macro to create your own avatars for NPCs, by enabling the debug option.  Doing so will allow you to get the avatar's data at any time by clicking the portrait.  You can then use this data to create an [avatar passage](passages.md).

**Arguments**:

* **avatarID** (string): The avatar will be created with this ID.
* **passage** (string): The passage to forward the user to when they confirm their avatar.

**Examples**:
```
/% player character creation %/
<<avatar 'player' 'next passage'>> 
```
```
/% for the author to make static npc avatars %/
<<avatar 'npcs' `passage()` true>> 
```