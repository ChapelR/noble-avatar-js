(function () {

    window.Noble = window.Noble || {};

    window.Noble.components = /* [target] */;
    
    if (Noble.config && Noble.config.cache) {
        var allImages = (function () {
            var comps = Object.keys(Noble.components),
                ret = [];
            comps.forEach( function (comp) {
                var obj = Noble.compontents[comp].components;
                ret.concat(obj.u, obj.f, obj.m);
            });
            return ret;
        });
        
        var lock = LoadScreen.lock();
        
        Noble.cache(allImages, null, function () {
            LoadScreen.unlock(lock);
        });
    }
    
}());