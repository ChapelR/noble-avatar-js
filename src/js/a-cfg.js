(function () {
    
    window.Noble = window.Noble || {};
    
    Noble.config = {
        
        /*
            cache option (boolean):
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
        
        /**/
        storyVar : '$nobleAvatars'
        
        
    };
    
}());