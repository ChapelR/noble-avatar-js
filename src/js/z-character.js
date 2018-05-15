(function () {
    
    State.setVar(Noble.config.storyVar, []);
    
    Noble.Character = function (id, def) {
        
        if (this instanceof Noble.Character) {
            this.id = id;
            this.def = clone(def);
        } else {
            return new Noble.Character(id, def);
        }
        
    };
    
    Noble.Character.is = function (o) {
        return o instanceof Noble.Character;
    };
    
    Noble.Character.add = function (id, def) {
        if (def.base.hasOwnProperty('has')) {
            // this is a slots API object
            def = Noble.slots.convert(def);
        }
        var ch = new Noble.Character(id, def);
        State.getVar(Noble.config.storyVar).push(ch);
        return ch;
    };
    
    Noble.Character.generateFromPassage = function (psg) {
        try {
            var def = JSON.parse(Story.get(psg).text);
            Noble.Character.add(psg, def);
        } catch (err) {
            console.error(err.message);
        }
    };
    
    Noble.Character.getByID = function (id) {
        return State.getVar(Noble.config.storyVar).find( function (chr) {
            return chr.id === id && Noble.Character.is(chr);
        }); 
    };
    
    Noble.Character.random = function (id, gender) {
        gender = gender || either('male', 'female');
        id = id || 'rnd-' + Math.random().toString(36).substring(7);
        Noble.slots.randomizeAll(gender);
        return Noble.Character.add(id, Noble.slots[gender]);
    };
    
    Noble.Character.test = function (gender) {
        var ch = Noble.Character.random(gender),
            $ch = Noble.Portrait(ch.id, ch.def);
        
        $('#passages').append($ch.$el);    
    };
    
    Noble.Character.prototype = {
        
        // boilerplate 
        constructor : Noble.Character,
        toJSON : function () {
            JSON.reviveWrapper('new Noble.Character(' + JSON.stringify(this.id) + ', ' + JSON.stringify(this.def) + ')');
        },
        clone : function () {
            return new Noble.Character(this.id, this.def);
        },
        
        // methods
        portrait : function () {
            return Noble.Portrait(this.id, this.def);
        },
        
        clickablePt : function (wiki) {
            return Noble.Portrait(this.id, this.def, wiki);
        }
        
    };
    
    if (Noble.config.portraitPassages && Noble.config.portraitPassages.onStartup) {
        var tag = Noble.config.portraitPassages.tag,
            psgs = Story.lookup('tags', tag);
        
        psgs.forEach( function (psg) {
            Noble.Character.generateFromPassage(psg.title);
        });
    }
    
}());