(function () {
    
    Noble.editor = { gender : 'female', madeChanges : { male : false, female : false } };
    
    // html structure
    
    function swapGenderText (gender) {
        if (Noble.config.defaultStrings.swapGender.both) {
            return Noble.config.defaultStrings.swapGender.both;
        }
        return Noble.config.defaultStrings.swapGender[gender];
    }
    
    function confirmText () {
        return Noble.config.defaultStrings.confirmBtn;
    }
    
    function getGroupName (group) {
        return Noble.config.defaultStrings.groupNames[group];
    }
    
    var struct = '<div id="editor-view"></div>' + 
    '<div id="editor-window">' + 
        '<div id="editor-header">' + 
            '<select id="editor-window" tab-index="0">' + 
                '<option value="base">' + getGroupName('base') + '</option>' + 
                '<option value="eyes">' + getGroupName('eyes') + '</option>' + 
                '<option value="mouths">' + getGroupName('mouths') + '</option>' + 
                '<option value="hair">' + getGroupName('hair') + '</option>' + 
                '<option value="beard">' + getGroupName('beard') + '</option>' + 
                '<option value="features">' + getGroupName('features') + '</option>' + 
                '<option value="glasses">' + getGroupName('glasses') + '</option>' + 
                '<option value="neck">' + getGroupName('neck') + '</option>' + 
                '<option value="accessories">' + getGroupName('accessories') + '</option>' + 
            '</select>' + 
            '<button id="gender" tab-index="0">' + swapGenderText('female') + '</button>' +
        '</div>' + 
        '<div id="editor-window-wrapper">' +
            '<div class="editor-content selected" id="base"></div>' + 
            '<div class="editor-content" id="eyes"></div>' + 
            '<div class="editor-content" id="mouths"></div>' + 
            '<div class="editor-content" id="hair"></div>' + 
            '<div class="editor-content" id="beard"></div>' + 
            '<div class="editor-content" id="features"></div>' + 
            '<div class="editor-content" id="glasses"></div>' + 
            '<div class="editor-content" id="neck"></div>' + 
            '<div class="editor-content" id="accessories"></div>' + 
        '</div>' + 
    '</div>';
    
    function buildEditor () {
        return $(document.createElement('div'))
            .addClass('editor-wrapper')
            .append(struct);
    }
    
    function createConfirmBtn ($el, id, psg) {
        var $confirm = $(document.createElement('button'))
            .attr('id', 'editor-button-confirm')
            .wiki(confirmText())
            .ariaClick( function () {
                
                $(document).trigger({
                    type : ':editor-confirm',
                    id : id,
                    passage : psg
                });
                
                Noble.editor.madeChanges = {
                    male : false,
                    female : false
                };
                
                $(this).remove();
                
            }).appendTo($el);
    }
    
    // general start up / restart functions
    
    function updatePt () { // any time a change is made somewhere
        var editorChar = new Noble.Character('editorPt', Noble.slots.convert(Noble.slots[Noble.editor.gender])),
            $editPt = new Noble.Portrait(editorChar.id, editorChar.def);
        
        $('#editor-view').empty().append($editPt.$el);
        Noble.editor.character = editorChar;
        Noble.editor.$pt = $editPt;
        return $editPt;
    }
    
    function populateEditor () {
        // get all content elements and fill with image blocks
        var els = $('div.editor-content').toArray();
        els.forEach( function (el) {
            var $el = $(el),
                group = $el.attr('id'),
                gender = Noble.editor.gender,
                opts = Noble.slots[gender][group].options;
            
            var $blocks = opts.map( function (opt) {
                // the image blocks
                return $(document.createElement('img'))
                    .addClass('editor-option')
                    .attr({
                        src : opt,
                        'data-option' : opt
                    }).ariaClick( function () {
                        Noble.slots.set(group, gender, $(this).attr('data-option'));
                        if (!Noble.editor.madeChanges[Noble.editor.gender]) {
                            Noble.editor.madeChanges[Noble.editor.gender] = true;
                        }
                        updatePt();
                    });
            });
            if (!Noble.slots.check.required(group)) {
                var $none = $(document.createElement('img')) 
                    .addClass('editor-option')
                    .attr({
                        src : './cac/none.png',
                        'data-option' : ''
                    }).ariaClick( function () {
                        Noble.slots.unset(group, gender);
                        if (!Noble.editor.madeChanges[Noble.editor.gender]) {
                            Noble.editor.madeChanges[Noble.editor.gender] = true;
                        }
                        updatePt();
                    });
                $blocks.unshift($none);
            }
            $el.empty().append($blocks);
        });
    }
    
    function updateEditor () {
        // reload the editor to reflect gender swaps, etc...
        if (!Noble.editor.madeChanges[Noble.editor.gender]) {
            Noble.slots.randomizeAll(Noble.editor.gender);
        }
        updatePt();
        populateEditor(); // will use bas slot info
    }
    
    // events
    
    function addHandlers (debug) {
        
        $('div#editor-window button#gender').ariaClick( function () {
            
            if (Noble.editor.gender === 'female') {
                Noble.editor.gender = 'male';
            } else {
                Noble.editor.gender = 'female';
            }
            
            $(this).empty().wiki(swapGenderText(Noble.editor.gender));
            
            updateEditor();
            
        });
        
        $('select#editor-window').on('change', function () {
            // remove selected class from current content, add to new
            var id = $(this).val();
            $('div.editor-content.selected').removeClass('selected');
            $('div.editor-content#' + id).addClass('selected');
        });
        
        if (debug) {
            $('#editor-view .layer').ariaClick(function () {
                try {
                    var data = JSON.stringify(Noble.slots.convert(Noble.slots[Noble.editor.gender]));
                    Dialog.setup('Character Data', 'editor-data-out');
                    Dialog.wiki('<textarea id="data-out">' + data + '</textarea>\n\n' + 
                                "<<button 'Select All'>>" + 
                                    "<<run $('#data-out').select()>>" + 
                                "<</button>>" + 
                                "<<button 'Copy to Clipboard'>>" + 
                                    "<<run $('#data-out').select()>>" + 
                                    "<<run document.execCommand('copy')>>" + 
                                "<</button>>");
                    Dialog.open();
                } catch (err) {
                    console.error(err);
                }
            });
        }
        
        $(document).on(':editor-confirm', function (ev) {
            Noble.Character.add(ev.id, Noble.slots.convert(Noble.slots[Noble.editor.gender]));
            Engine.play(ev.passage);
        });
    }
    
    // start up editor
    
    function initEditor (target, id, psg, debug) {
        var $editor = buildEditor();
        $(target).append($editor);
        $editor.height($editor.width());
        postdisplay['editor-init'] = function (t) {
            delete postdisplay[t];
            updateEditor();
            createConfirmBtn($editor, id, psg);
            addHandlers(debug);
        };
    }
    
    Noble.editor.start = initEditor;
    Noble.editor.update = updateEditor;
    Noble.editor.content = populateEditor;
    Noble.editor.portrait = updatePt;
    Noble.editor.confirmBtn = createConfirmBtn;
    Noble.editor.build = buildEditor;
    Noble.editor.handlers = addHandlers;
    
}());