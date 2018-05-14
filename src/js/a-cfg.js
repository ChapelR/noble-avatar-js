(function () {
    
    window.Noble = window.Noble || {};
    
    Noble.config = {
        
        /*
            cache (boolean):
                If true, image assets will be cached at startup.  this will slow down initial load times 
                the first time your game is run by a user and any time after a long period (months) passes
                between plays, but will not effect initial load times otherwise.  The benefit is that all
                images will be ready to go immediately, so there won't be any load times during play.
            
                Default: true
        */
        cache : true,
        
        /*
            portraitPassages (object):
                These settings alter how the system treats portrait passages.
                
                tag (string):
                    The tag that denotes a passage as portrait data.  You can alter this tag if you're already
                    using the default one for something else. If not, it's probably best left alone.
                    
                    Default: 'portrait'
                    
                onStartup (boolean):
                    If true, all portrait passages are loaded into memory on startup.  This may slowdown initial
                    load times, so you can shut it off if needed, though doing so may introduce lag in passages
                    with lots of portraits.
                    
                    Default: true
                    
        */
        portraitPassages : {
            tag : 'portrait',
            onStartup : true
        },
        
        /*
            storyVar (string):
                Character information is stored in a story variable array.  If you are already using this story variable, 
                or if you prefer to call it something else, you can change this option.
                
                Default: '$nobleAvatars'
        */
        storyVar : '$nobleAvatars',
        
        /*
            defaultStrings (object):
                You can change certain system text.  While most of the things added in this system are visual, there are 
                a few labels and strings you may wish to rename.
                
                swapGender (object):
                    
                    both (string):
                        If you put a string in here, the button to change genders in the avatar creator will be labeled with 
                        this string. Not that this will overwrite the `male` and `female` options (see below).
                        
                        Default: ''
                        
                    female (string):
                        When the character is a female currently, this text will show in the avatar creator.  If `both` has a 
                        non-falsy value, that option will override this one.
                        
                        Default: 'Change to Male'
                        
                    male (string):
                        When the character is a male currently, this text will show in the avatar creator.  If `both` has a 
                        non-falsy value, that option will override this one.
                        
                        Default: 'Change to Female'
                        
                confirmBtn (string):
                    The button at the bottom of the avatar creator that finalizes the user's choices and forwards them to a new 
                    passage can be labeled using this option.
                    
                    Default: 'Confirm'
                
                groupNames (object):
                    Each group is a component in the editor.  You can change the names used by the avatar creator's drop down 
                    menu by changing these options.  Each is a (string).
                    
                    Default: {
                        base : 'Skin',
                        eyes : 'Eyes',
                        mouths : 'Mouth',
                        hair : 'Hair',
                        beard : 'Beard',
                        features : 'Features',
                        glasses : 'Glasses',
                        neck : 'Neck',
                        accessories : 'Hat'
                    }
        */
        defaultStrings : {
            swapGender : {
                both : '',
                female : 'Change to Male',
                male : 'Change to Female'
            },
            confirmBtn : 'Confirm',
            groupNames : {
                base : 'Skin',
                eyes : 'Eyes',
                mouths : 'Mouth',
                hair : 'Hair',
                beard : 'Beard',
                features : 'Features',
                glasses : 'Glasses',
                neck : 'Neck',
                accessories : 'Hat'
            }
        }
    };
    
}());