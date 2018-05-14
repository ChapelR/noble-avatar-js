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
            
            var $layers = layerList.map( function (group) {
                var bg = (def[group]) ? ('url("' + def[group] + '")') : '';
                console.log(bg, def[group], def);
                return $(document.createElement('div'))
                    .addClass('layer')
                    .attr('data-group', group)
                    .css('background-image', bg);
            });
            
            if (clickableContent) {
                $wrapper.ariaClick( function () {
                    $.wiki(clickableContent);
                });
            }
            
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
                lay.css('background-image', comp);
            }
        }
        
    };
    
}());