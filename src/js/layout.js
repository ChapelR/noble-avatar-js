(function () {
    
    Noble.editor = { gender : 'female' };
    
    // editor pain
    
    function tabButton (name, id) {
        
        return $(document.createElement('button'))
            .addClass('editor-tabs tab-buttons')
            .attr('id', id)
            .wiki(name)
            .ariaClick( function () {
                
                $(document).trigger({
                    type : ':switch-editor-tab',
                    id : id,
                    name : name
                });
                
            });
        
    }
    
    function createBlocks (id, src) {
        
        return $(document.createElement('img'))
            .addClass('editor-options grid-img')
            .attr({
                id : id,
                src : src
            }).ariaClick( function () {
                $(document).trigger({
                    type : ':editor-option',
                    opt : src,
                    id : id
                });
            });
        
    }
    
    function tabContent (id, els) {
        
        return $(document.createElement('div'))
            .addClass('editor-tabs tab-content')
            .attr('id', id)
            .append(els);
        
    }
    
    function tabs () {
        
        return $(document.createElement('div'))
            .addClass('editor-tabs tab-container')
            .attr('id', 'tab-wrapper');
        
    }
    
    function generateEditorOptions () {
        
        var slots = Noble.slots[Noble.editor.gender],
            gender = Noble.editor.gender[0];
            groups = Object.keys(slots);
        
        var $buttons = (function () {
            var ret = [];
            groups.forEach( function (group) {
                if (Noble.slots.check.possible(group, gender)) {
                    ret.push(tabButton(group.toUpperFirst(), 'tab-' + group));
                }
            });
            return ret;
        }());
        
        var $tabContents = (function () {
            var ret = [];
            groups.forEach( function (group) {
                if (Noble.slots.check.possible(group, gender)) {
                    var $imgs = slots[group].options.map( function (opt, i) {
                        return createBlock('edit-' + group + '-opt-' + i, opt);
                    });
                    ret.push(tabContent('tab-group-' + group, $imgs));
                }
            });
            return ret;
        }());
        
        var $tab = tabs(),
            $editor = $(document.createElement)
                .addClass('editor-right-side')
                .attr('id', 'edit-options');
        
        $tabs.append($buttons);
        $editor.append($tabs, $tabContents);
        
        return $editor;
        
    }
    
    // viewer
    
    
    
}());