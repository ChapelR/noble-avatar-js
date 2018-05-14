(function () {
    
    window.Noble = window.Noble || {};
    
    function imgCache (array, cb, finalcb) {
        
        var imgs = array || null, list = [];
        
        if (imgs) {
            var i, lt = imgs.length;
            for (i = 0; i < lt; i++) {
                var img = new Image();
                img.onload = function () {
                    var idx = list.indexOf(this);
                    if (idx !== -1) {
                        list.deleteAt(idx);
                    }
                };
                list.push(img);
                img.src = imgs[i];
            }
        }
        
    }
    
    function fetchUrls (group) {
        console.log(group);
        var u = group.components.u.map(function (file) {
            return group.dir.u + file;
        });
        var f = group.components.f.map(function (file) {
            return group.dir.f + file;
        });
        var m = group.components.m.map(function (file) {
            return group.dir.m + file;
        });
        return u.concat(f, m);
    }
    
    function fetchAllCompUrls (obj) {
        console.log(obj);
        obj = obj || Noble.components || null;
        if (obj) {
            var groups = Object.keys(obj);
            return groups.map( function (group) {
                return fetchUrls(obj[group]);
            }).flatten();
        }
    }
    
    function cacheAll (urls, cb) {
        urls = urls || fetchAllCompUrls(Noble.components) || null;
        console.log(urls);
        if (urls) {
            imgCache(urls);
        }
        if (cb && typeof cb === 'function') {
            cb();
        }
    }
    
    window.Noble.cache = {
        cacheAll : cacheAll,
        fetchUrls : fetchAllCompUrls,
        cacher : imgCache
    };
}());