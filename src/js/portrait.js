(function () {
    
    var layerList = [ // the order is important
        'base',
        'eyes',
        'mouths',
        'features',
        'glasses',
        'hair',
        'neck',
        'beard',
        'accessories'
    ];
    
    Noble.Portrait = function (id, def, clickableContent) {
        
        if (this instanceof Noble.Portrait) {
            var $wrapper = $(document.createElement('div'))
                .addClass('noble-wrapper')
                .attr('id', Util.slugify(id));
            
            var $layers = layerList.map( function (group, i, arr) {
                var comp = (def[group]) || '';
                var lay = $(document.createElement('img'))
                    .addClass('layer')
                    .attr('data-group', group)
                    if (comp) {
                        lay.attr('src', comp);
                        lay.show();
                    } else {
                        lay.hide();
                    }
                if (clickableContent && 
                    typeof clickableContent === 'string' && 
                    clickableContent.trim() && 
                    i === arr.length - 1) {
                    
                    $wrapper.ariaClick( function () {
                        $.wiki(clickableContent);
                    }).css('cursor', 'pointer');
                }
                return lay;
            });
            
            $wrapper.append($layers);
            
            this.$el = $wrapper;
            this.wiki = clickableContent;
            this.id = id;
            this.$layers = $layers;
        
        } else {
            
            return new Noble.Portrait(id, def, clickableContent);
            
        }
        
    };
    
    Noble.Portrait.prototype = {
        
        constructor : Noble.Porait,
        
        getLayerIdx : function (group) {
            return this.$layers.findIndex( function (lay) {
                return lay.attr('data-group') === group;
            });
        },
        
        getLayer : function (group) {
            return this.$layers.find( function (lay) {
                return lay.attr('data-group') === group;
            });
        },
        
        changeLayer : function (group, comp) {
            var lay = this.getLayer(group);
            if (lay[0]) {
                lay.attr('src', comp);
            }
        }
        
    };
    
}());