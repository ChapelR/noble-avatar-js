(function () {
    
    function setCompEv (action, group, gender, component, old) {
        // this event is used to change the image dynamically
        $(document).trigger({
            type : ':set-slot',
            action : action,
            group : group,
            gender : gender,
            component : component,
            previous : old
        });
    }
    
    function mapComponents (group, gender) {
        var comps = Noble.components[group].components[gender],
            dir = Noble.components[group].dir[gender];
        return comps.map( function (comp) {
            return dir + comp;
        });
    }
    function getUnisexComponents (group) {
        return mapComponents(group, 'u');
    }
    function getFemaleComponents (group) {
        return mapComponents(group, 'f');
    }
    function getMaleComponents (group) {
        return mapComponents(group, 'm');
    }
    function isRequired (group) {
        return Noble.components[group].required;
    }
    
    function getComponents (group, gender) {
        switch (gender) {
            case 'f':
                return getUnisexComponents(group).concat(getFemaleComponents(group));
            case 'm':
                return getUnisexComponents(group).concat(getMaleComponents(group));
            default:
                return getUnisexComponents(group);
        }
    }
    
    var slots = {
        
        female : {
            accessories : {
                has : true,
                component : '',
                options : getComponents('accessories', 'f')
            },
            base : {
                has : true,
                component : '',
                options : getComponents('base', 'f'),
                required : isRequired('base')
            },
            beard : {
                has : false,
                component : '',
                options : []
            },
            eyes : {
                has : true,
                component : '',
                options : getComponents('eyes', 'f')
            },
            features : {
                has : true,
                component : '',
                options : getComponents('features', 'f')
            },
            glasses : {
                has : true,
                component : '',
                options : getComponents('glasses', 'f')
            },
            hair : {
                has : true,
                component : '',
                options : getComponents('hair', 'f')
            },
            mouths : {
                has : true,
                component : '',
                options : getComponents('mouths', 'f')
            },
            neck : {
                has : true,
                component : '',
                options : getComponents('neck', 'f')
            }
        }, male : {
            accessories : {
                has : true,
                component : '',
                options : getComponents('accessories', 'm')
            },
            base : {
                has : true,
                component : '',
                options : getComponents('base', 'm')
            },
            beard : {
                has : true,
                component : '',
                options : getComponents('beard', 'm')
            },
            eyes : {
                has : true,
                component : '',
                options : getComponents('eyes', 'm')
            },
            features : {
                has : true,
                component : '',
                options : getComponents('features', 'm')
            },
            glasses : {
                has : true,
                component : '',
                options : getComponents('glasses', 'm')
            },
            hair : {
                has : true,
                component : '',
                options : getComponents('hair', 'm')
            },
            mouths : {
                has : true,
                component : '',
                options : getComponents('mouths', 'm')
            },
            neck : {
                has : true,
                component : '',
                options : getComponents('neck', 'm')
            }
        }
        
    };
    
    function canHave (group, gender) {
        return slots[gender][group].has;
    }
    
    function unsetSlot (group, gender) {
        var cached = slots[gender][group].component;
        setCompEv('unset', group, gender, '', cached);
        slots[gender][group].component = '';
        return cached;
    }
    
    function setSlot (group, gender, component) {
        if (canHave(group, gender) && 
            slots[gender][group].options.includes(component)) {
            
            setCompEv('set', group, gender, component, slots[gender][group].component);
            slots[gender][group].component = component;
            return component;
        }
        return false;
    }
    
    function setRandomSlot (group, gender) {
        if (!canHave(group, gender)) {
            return unsetSlot(group, gender);
        }
        
        var opts = clone(slots[gender][group].options),
            reqd = isRequired(group);
        
        if (!reqd) {
            if (group === 'hair') {
                opts.push('');
            } else {
                opts.concat(['', '', '']);
            }
        }
        
        return setSlot(group, gender, opts.random());
    }
    
    function setAllRandom (gender) {
        var groups = Object.keys(slots[gender]),
            lt = groups.length, i;
        
        for (i = 0; i < lt; i++) {
            setRandomSlot(groups[i], gender);
        }
    }
    
    function convertToDefObj (slots) {
        var ret = {};
        Object.keys(slots).forEach( function (key) {
            ret[key] = slots[key].component;
        });
        return ret;
    }
    
    // send to global scope
    window.Noble.slots = {
        
        get : {
            female : getFemaleComponents,
            male : getMaleComponents,
            unisex : getUnisexComponents
        },
        
        female : slots.female,
        
        male : slots.male,
        
        check : {
            required : isRequired,
            possible : canHave
        },
        
        set : setSlot,
        
        unset : unsetSlot,
        
        randomize : setRandomSlot,
        
        randomizeAll : setAllRandom,
        
        convert : convertToDefObj
        
    };
    
}());