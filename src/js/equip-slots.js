(function () {
    
    function getUnisexComponents (group) {
        return Noble.components[group].u;
    }
    function getFemaleComponents (group) {
        return Noble.components[group].f;
    }
    function getMaleComponents (group) {
        return Noble.components[group].m;
    }
    function isRequired (group) {
        return Noble.components[group].required;
    }
    
    function getComponents (group, gender) {
        switch (gender) {
            case 'f':
                return getUnisexComponents(group).concat(getFemaleComponents(group));
                break;
            case 'm':
                return getUnisexComponents(group).concat(getMaleComponents(group));
                break;
            case 'u':
            default:
                return getUnisexComponents(group);
        }
    }
    
    function canHave (group, gender) {
        return slots[gender][group].has;
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
                options : getComponents('hair', 'f')
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
    
    function unsetSlot (group, gender) {
        var cached = slots[gender][group].component;
        slots[gender][group].component = '';
        return cached;
    }
    
    function setSlot (group, gender, component) {
        if (canHave(gender, group) && 
            slots[gender][group].options.includes(component)) {
            
            slots[gender][group].component = component;
            return component;
        }
        return false;
    }
    
    function setRandomSlot (group, gender) {
        if (!canHave(gender, group)) {
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
    
    // send to global scope
    window.Noble.slots = {
        
        get : {
            female : getFemaleComponents,
            male : getMaleComponents,
            unisex : getUnisexComponents
        }
        
        female : slots.female,
        
        male : slots.male,
        
        check : {
            required : isRequired,
            possible : canHave
        },
        
        set : setSlot,
        
        unset : unsetSlot,
        
        randomize : setRandomSlot,
        
        randomizeAll : setAllRandom
        
    };
    
}();