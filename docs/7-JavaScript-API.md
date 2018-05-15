## JavaScript API

All of the JavaScript used by this system is part of the global `window.Noble` namespace.

## `Noble.config`

See the [configuration options](4-Config.md).

## `Noble.components`

This object stores all of the relative URLs for each of the items.  It's structured like this:

```javascript
Noble.components = {
    [groupName] : {
        components : {
            u : [ arrayOfItems ],
            f : [ arrayOfItems ],
            m : [ arrayOfItems ]
        },
        required : [ boolean ],
        dir : {
            u : [ pathToFolder ],
            f : [ pathToFolder ],
            m : [ pathToFolder ]
        }
    },
    [etc...]
}
```

Each group name represents a single slot on the character, like hair, mouths, eyes, etc.  In the `components` object, three arrays of file names are stored--one for unisex items (`u`), one for female items (`f`), and one for male items (`m`).  The `required` boolean value simply lets the system know 1) not to generate a random portrait without something in this slot, and 2) not to give the player the option to have nothing in this slot in the editor.  You could edit this option to make anything required or not required for any group.

If you want to use your own custom components, you'll need to spend some time editing this object, or rebuilding it.  Check out the [guide](9-Customization.md) for more.

## `Noble.slots`

This is the API you can use to generate custom and random characters.  It's geared toward making characters at run-time; there are two "base" character objects, one for male and one for female.  To make a character, you can equip items to their slots, then send the appropriate male or female object to `Noble.Character` to finish it up.

### The male and female slots objects

The male and female objects have the following structures:
```javascript
Noble.slots = {
    [gender] : {
        [groupName] : {
            has : [ boolean ],
            component : [ currentComponent ],
            options : [ arrayOfPossibleComponents ]
        },
        [etc...]
    }, [otherGender] : {
        [etc...]
    }
}
```

Like with components, each `groupName` represents a single item slot; eyes, mouth, hair, etc.  The `has` property determines whether a character can equip something in that slot (for example, females can't have beards, so `Noble.slots.female.beard.has === false`).

### Methods

The `Noble.slots` object has the following methods.

---

#### `Noble.slots.check.required(groupName)`

Returns whether the passed `groupName` is required.

Returns: boolean

Arguments:
* groupName (string): The group name.

Examples:
```javascript
Noble.slots.check.required('hair'); // false
Noble.slots.check.required('eyes'); // true
```

---

#### `Noble.slots.check.possible(groupName, gender)`

Returns whether the passed gender can have a component from the group.

Returns: boolean

Arguments:
* groupName (string): The group name.
* gender (string): `'male'` or `'female'`.

Examples:
```javascript
Noble.slots.check.possible('hair', 'male'); // true
Noble.slots.check.possible('beard', 'female'); // false
```

---

#### `Noble.slots.set(groupName, gender, component)`

This method places or replaces a given component on the relevant slots object.

Returns: false if the equip is impossible, otherwise the component URL.

Arguments:
* groupName (string): The group name.
* gender (string): `'male'` or `'female'`.
* component (string): the URL to an image asset of a component.

Examples:
```javascript
Noble.slots.set('hair', 'female', './cac/hair/f/hair_f5.png');
```

---

#### `Noble.slots.unset(groupName, gender)`

This method replaces the component value with an empty string for the gender object indicated.

Returns: the URL of the item that was equipped before this method was run.

Arguments:
* groupName (string): The group name.
* gender (string): `'male'` or `'female'`.

Examples:
```javascript
Noble.slots.unset('hair', 'female');
```

---

#### `Noble.slots.randomize(groupName, gender)`

This method assigns a random component URL from the list of possible options to the group indicated for the gender indicated.  If the item is not required, it has a chance to be set to empty as well.

Returns: the URL of the item that was equipped.

Arguments:
* groupName (string): The group name.
* gender (string): `'male'` or `'female'`.

Examples:
```javascript
Noble.slots.randomize('hair', 'female');
```

---

#### `Noble.slots.randomizeAll(gender)`

Takes the indicated gender object and randomizes all it's slots. Useful for generating random characters.

Returns: `undefined`

Arguments:
* gender (string): `'male'` or `'female'`.

Examples:
```javascript
Noble.slots.randomizeAll('female');
```

---

#### `Noble.slots.convert(slotsObj)`

When you pass a slots object or a clone of one to this method, it trims the unnecessary data to create a definition object for the `Noble.Character` API.

Returns: a definition object.

Arguments:
* slotsObj: a gender object or clone of one.

Examples:
```javascript
var ch = Noble.slots.convert(Noble.slots.female);
new Noble.Character('sally', ch);
```

---

## `Noble.Character`

`Noble.Character` is a constructor function for making character instances.  In most cases, however, you'll want to call `Noble.Character.add()` to make your character instances, as this function will add the necessary plumbing to make your character available to the system without needing to assign it to a variable.

Instances of `Noble.Character` have the following properties.
* `<character>.id`: the id of the avatar.
* `<character>.def`: the definition object; a series of key value pairs where each key is group and each value is the corresponding component URL (or an empty string).

### Static Methods

---

#### `Noble.Character.add(id, definitionOrSlotsObj)`

This method creates a new `Noble.Character` instance and pushes it into the story variable array (see [the configuration options](4-Config.md)).  It will also automatically convert slots objects to definition objects via `Noble.slots.convert` when needed.

Returns: a new Noble.Character instance.

Arguments:
* id (string): the avatar ID to assign to the character instance.
* definitionOrSlotsObj (object): a definition object or a slots object.  If a slots object is passed, `Noble.slots.convert()` will be called on it automatically.

Example:
```javascript
Noble.Character.add('sally', Noble.slots.female);
```

---

#### `Noble.Character.is(thing)`

Returns whether the passed object, value, or variable is an instance of `Noble.Character`.

Returns: boolean

Arguments:
* thing (any): anything.

Example:
```javascript
var obj = {};
var that = 'hello';
var ch = Noble.Character.add('blah', Noble.slots.male);

Noble.Character.is(obj); // false
Noble.Character.is(that); // false
Noble.Character.is('blah'); // false
Noble.Character.is(Noble.slots.male); // false
Noble.Character.is(ch); // true
```

---

#### `Noble.Character.generateFromPassage(passageName)`

Attempts to pull avatar data from the indicated passage. If it is a valid [avatar passage](6-Avatar-Passage.md), a new `Noble.Character` instance is created, and the passage's name is used as the id.

Returns: `undefined`

Arguments:
* passageName (string): the name of a passage.

Example:
```javascript
Noble.Character.generateFromPassage('my avatar passage');
```

---

#### `Noble.Character.getByID(id)`

Searches the story variable array for the `Noble.Character` instance with the given id.

Returns: A `Noble.Character` instance or `undefined`.

Arguments:
* id (string): the id of a `Noble.Character` instance.

Example:
```javascript
var ch = Noble.Character.getByID('sally');
```

---

#### `Noble.Character.random(id [, gender])`

This method creates a new `Noble.Character` instance, but randomizes all the components. You can choose to supply a gender.

Coming soon: In a future update, I'd like for this object to also accept any parameters the player wishes while randomizing the rest.

Returns: A new `Noble.Character` instance.

Arguments:
* id (string): the id to assign to the new instance
* gender (string) (optional): `'male'` or `'female'`

Example:
```javascript
var ch = Noble.Character.getByID('sally');
```

---

### Instance methods

---

#### `<character>.portrait()`

This method takes the `Noble.Character` instance and generates and returns a `Noble.Portrait` object from it.  You should always use this method when possible, rather than the `Noble.Portrait` constructor.

Returns: a new `Noble.Portrait` instance generated from the `Noble.Character` instance.

Example:
```javascript
var chSally = Noble.Character.add('sally', Noble.slots.female);
var ptSally = chSally.portrait();

// place sally's portrait on the page:
ptSally.$el.appendTo('#passages');
```

---

#### `<character>.clickablePt([wikiCode])`

This method is similar to the above, but generates a clickable portrait.  The provided wiki code is run on click.

Returns: a new, clickable `Noble.Portrait` instance generated from the `Noble.Character` instance.

Arguments:
* wikiCode (string) (optional): a string of valid TwineScript code.

Example:
```javascript
var chSally = Noble.Character.add('sally', Noble.slots.female);
var ptSally = chSally.clickablePt('<<run UI.alert("hello")>>');

// place sally's portrait on the page:
ptSally.$el.appendTo('#passages');
// when the portrait is clicked, the code will run
```

---

## `Noble.Portrait`

`Noble.Portrait` is a constructor function that creates a complete portrait element in jQuery to be loaded onto the page.  To save memory and prevent issues with SugarCube's state, these instances are not stateful and never really saved anywhere, and are usually garbage collected once they're no longer being displayed. They're created as needed.  You should call the `<character>.portrait()` method rather than using this constructor in most cases.

Note that these objects cannot be saved as story variables, as the history system cannot track or clone them.

Each `Noble.Portrait` instance has these properties:
* `<portrait>.id`: the id of the `Noble.Character` instance the portrait is for.
* `<portrait>.$el`: the entire, constructed portrait element, in a jQuery wrapper.
* `<portrait>.$layers`: an array of references to the jQuery elements making up each layer of the image.
* `<portrait>.wiki`: any wiki code that should be run on click, or `undefined`.

### Instance Methods

---

#### `<portrait>.getLayer(groupName)`

This method returns the jQuery element from the `<portrait>.$layers` array that corresponds to the component group requested, or undefined, if it cannot be found.

Returns: a jQuery element or `undefined`.

Arguments:
* groupName (string): the name of a component group.

---

#### `<portrait>.getLayerIdx(groupName)`

As above, but this method returns the index of the element in the `<portrait>.$layers` array, rather than a reference to the element itself.

Returns: integer (array index or -1)

Arguments:
* groupName (string): the name of a component group.

---

#### `<portrait>.changeLayer(groupName, component)`

This layer gets the indicated jQuery layer element and changes its background image to the provided component URL.  This does not alter or effect the underlying `Noble.Character` instance, only the visuals of the portrait element.

Returns: `undefined`

Arguments:
* groupName (string): the name of a component group.
* component (string): the component URL to change the layer's image to.

---

## `Noble.editor`

The `Noble.editor` interface controls the avatar editor.  There's no way to make this API not complicated; users who want to dramatically alter the editor and its functionality are better off looking at the source code.  As such, this section will be brief and light on details and examples.

### Properties

This interface has a few properties that may be of use to authors:

* `Noble.editor.gender` (string): the currently selected gender.
* `Noble.editor.madeChanges['male'|'female']` (boolean): records whether the player has altered the avatars at all.

### Methods

---

#### `Noble.editor.start(target, id, passageName [, debug])`

Starts up the editor and appends it to the target element.  This is used for the macro, but it requires passage transition to work properly.  If you need to call the editor at some other time, you can rebuild it using the other methods below.

Returns: `undefined`

Arguments:
* target (string): a jQuery-style selector to append the editor to.
* id (string): the id of the avatar being created.
* passageName (string): the name of the passage to navigate to when the player confirms their creation.
* debug (boolean) (optional): providing a truthy argument starts the editor in debug mode, meaning clicking the portrait in the editor will display the avatar's JSON data for use in an [avatar passage](6-Avatar-Passages.md).

---

#### `Noble.editor.update()`

This method updates the editor's entire display, and is used when the player swaps genders.

Returns: `undefined`

---

#### `Noble.editor.content()`

This method updates the editor's content window.  Only used on initialization or when gender is switched.

Returns: `undefined`

---

#### `Noble.editor.portrait()`

This method updates the player's portrait when a component is selected.

Returns: a `Noble.Portrait` instance

---

#### `Noble.editor.confirmBtn($el, id, passageName)`

This method creates and appends the confirm button on the editor.

Returns: `undefined`

Arguments:
* $el (jQuery object): the jQuery object to attach the button to; generally the editor.
* id (string): the id of the avatar being created.
* passageName (string): the name of the passage to navigate to when the player confirms their creation.

---

#### `Noble.editor.build()`

Creates the editor interface and returns it as a jQuery element.

Returns: a jQuery element referencing the editor.

---

#### `Noble.editor.handlers([debug])`

Attaches event handlers to all of the editor elements. Best called after everything else has been built.

Returns: `undefined`

Arguments:
* debug (boolean) (optional): if truthy, adds the debug handlers. 

---
