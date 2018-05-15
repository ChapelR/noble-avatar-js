## CSS Selectors Reference

### Portrait CSS

`div.noble-wrapper` is the container element onto which the png layers of each image are layered.  To change the size or position of the image, you'll want to use this selector.  Each portrait further has a number of individual layers, each one uses the `div.noble-wrapper div.layer` selector.  The images are laid in order, meaning we don't use z-index to order them.  In general, there should be any reason to mess with the layers as doing so could cause them to fail to lay properly.

The basic portrait CSS looks like this:
```css
div.noble-wrapper {
    position: relative;
    width: 400px;
    height: 400px;
}

div.noble-wrapper div.layer {
    position: absolute;
    width: 100%; height: 100%;
    background-size: contain;
    background-repeat: no-repeat;
}
```

Additionally, the portraits accept various options, which are each converted to classes by the `<<pt>>` and `<<ptlink>>` macros.

These classes have the following CSS:
```css
/* floats */
div.noble-wrapper.right {
    float: right;
}
div.noble-wrapper.left {
    float: left;
}

/* outside styling */
div.noble-wrapper.flat {
    border: none;
}
div.noble-wrapper.material.invert {
    box-shadow: 0px 0px 2px #888;
}
div.noble-wrapper.material {
    box-shadow: 0px 0px 2px #000;
}
div.noble-wrapper.border-thin.invert {
    border: 2px solid #111;
}
div.noble-wrapper.border-thin {
    border: 2px solid #eee;
}
div.noble-wrapper.border-thick.invert {
    border: 6px solid #111;
}
div.noble-wrapper.border-thick {
    border: 6px solid #eee;
}
div.noble-wrapper.border-outset.invert {
    border: 6px outset #555;
}
div.noble-wrapper.border-outset {
    border: 6px outset #ccc;
}
div.noble-wrapper.border-inset.invert {
    border: 6px inset #555;
}
div.noble-wrapper.border-inset {
    border: 6px inset #ccc;
}

/* sizes (absolute) */
div.noble-wrapper.tiny {
    width: 64px; height: 64px;
}
div.noble-wrapper.small {
    width: 128px; height: 128px;
}
div.noble-wrapper.medium {
    width: 256px; height: 256px;
}
div.noble-wrapper.large {
    width: 320px; height: 320px;
}
div.noble-wrapper.max-safe, div.noble-wrapper.very-large {
    width: 400px; height: 400px;
}
div.noble-wrapper.oversized {
    width: 600px; height: 600px;
}

/* sizes (relative) */
div.noble-wrapper.relative {
    max-width: 400px; 
    max-height: 400px;
}
div.noble-wrapper.relative.small {
    max-width: 4rem; 
    max-height: 4rem;
}
div.noble-wrapper.relative.medium {
    max-width: 8rem; 
    max-height: 8rem;
}
div.noble-wrapper.relative.large {
    max-width: 12rem; 
    max-height: 12rem;
}
div.noble-wrapper.relative.very-large {
    max-width: 16rem; 
    max-height: 16rem;
}
```

### The Editor

The avatar editor's HTML structure looks like this:
```html
<div id="editor-wrapper">
    <div id="editor-view">
        <!-- PORTRAIT (see above) -->
    </div>
    <div id="editor-window">
        <div id="editor-header">
            <select id="editor-window" tab-index="0">
                <option value="base"></option>
                <option value="eyes"></option>
                <option value="mouths"></option>
                <option value="hair"></option>
                <option value="beard"></option>
                <option value="features"></option> 
                <option value="glasses"></option>
                <option value="neck"></option>
                <option value="accessories"></option>
            </select>
            <button id="gender" tab-index="0"></button>
        </div>
        <div id="editor-window-wrapper">
            <div class="editor-content selected" id="base"></div>
            <div class="editor-content" id="eyes"></div>
            <div class="editor-content" id="mouths"></div>
            <div class="editor-content" id="hair"></div>
            <div class="editor-content" id="beard"></div>
            <div class="editor-content" id="features"></div>
            <div class="editor-content" id="glasses"></div>
            <div class="editor-content" id="neck"></div>
            <div class="editor-content" id="accessories"></div>
        </div>
    </div>
    <button id="editor-button-confirm" tab-index="0"></button>
</div>
```

And the editor's default CSS:

```css
div#editor-view {
    width: 49%;
    height: 250px;
    float: left;
}

div#editor-view div.noble-wrapper {
    height: 100%; width: 100%;
}

div#editor-window-wrapper {
    width: 49%;
    height: 15em;
    overflow: auto;
    float: left;
    background-color: #888;
}

img.editor-option {
    width: 6em;
    float: left;
    background-color: #eee;
    border: 2px solid #888;
}

div.editor-content {
    display: none;
}
div.editor-content.selected {
    display: block;
}

button#editor-button-confirm {
    width: 99%;
    margin: 2em 0;
}
```

### Responsive Rules

The following CSS adds a bit of responsiveness to the editor:
```css
@media only screen and (max-width: 600px) {
    div#editor-view {
        width: 100%;
        margin: 1em 0;
    }
    div#editor-view div.noble-wrapper {
        height: 100%;
        width: unset;
        margin: auto;
    }
    div#editor-window-wrapper {
        width: 100%;
    }
}
```