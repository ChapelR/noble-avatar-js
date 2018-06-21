// <<pt id [optionList]>>
Macro.add('pt', {
    handler : function () {
        
        if (this.args.length < 1) {
            return this.error('You must provide a character ID as the first argument to this macro.');
        }
        
        var ch, classes;
        
        if (this.args[0] === 'keyword') {
            
            var idx = 1, opts = false, id = false;
            
            if (typeof this.args[1] === 'object') {
                idx = 2;
                opts = this.args[1];
                if (opts.id && typeof opts.id === 'string') {
                    id = opts.id;
                }
            }
            
            ch = Noble.Character.random(id, opts);
            classes = this.args.slice(idx).flatten();
            
        } else {
            
            ch = Noble.Character.getByID(this.args[0]);
            if ((!ch || !Noble.Character.is(ch)) && Story.has(this.args[0])) {
                try {
                    ch = Noble.Character.generateFromPassage(this.args[0]);
                } catch (err) {
                    return this.error(err.message);
                }
            }
            if (!ch || !Noble.Character.is(ch)) {
                return this.error('Could not find character with the ID: "' + this.args[0] + '".');
            }
            
            classes = this.args.slice(1).flatten();
            
        }
        
        var pt = Noble.Portrait(ch.id, ch.def);
        pt.$el.removeClass().addClass('noble-wrapper');
        if (this.args.length > 0) {
            pt.$el.addClass(classes.join(' '));
        }
        
        $(this.output).append(pt.$el);
        
    }
});

// <<ptlink id [optionList]>> [code] <</ptlink>>
Macro.add('ptlink', {
    tags : null,
    handler : function () {
        
        if (this.args.length < 1) {
            return this.error('You must provide a character ID as the first argument to this macro.');
        }
        
        var ch, classes;
        
        if (this.args[0] === 'keyword') {
            
            var idx = 1, opts = false, id = false;
            
            if (typeof this.args[1] === 'object') {
                idx = 2;
                opts = this.args[1];
                if (opts.id && typeof opts.id === 'string') {
                    id = opts.id;
                }
            }
            
            ch = Noble.Character.random(id, opts);
            classes = this.args.slice(idx).flatten();
            
        } else {
            
            ch = Noble.Character.getByID(this.args[0]);
            if ((!ch || !Noble.Character.is(ch)) && Story.has(this.args[0])) {
                try {
                    ch = Noble.Character.generateFromPassage(this.args[0]);
                } catch (err) {
                    return this.error(err.message);
                }
            }
            if (!ch || !Noble.Character.is(ch)) {
                return this.error('Could not find character with the ID: "' + this.args[0] + '".');
            }
            
            classes = this.args.slice(1).flatten();
            
        }
        
        var pt = Noble.Portrait(ch.id, ch.def, this.payload[0].contents);
        pt.$el.removeClass().addClass('noble-wrapper');
        if (this.args.length > 0) {
            pt.$el.addClass(classes.join(' '));
        }
        
        $(this.output).append(pt.$el);
        
    }
});

// <<avatarmaker id passage>>
Macro.add('avatarmaker', {
    handler : function () {
        
        if (this.args.length < 2) {
            return this.error('You must pass two arguments to this macro: the ID of the character being created and the passage to go to when creation is complete.');
        }
        if (!Story.has(this.args[1])) {
            return this.error('No passage name "' + this.args[1] + '" could be found.');
        }
        
        Noble.editor.start(this.output, this.args[0], this.args[1], this.args[2]);
        
    }
});