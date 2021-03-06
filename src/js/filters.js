(function() {
    
    var svg = '' + 
    '<svg class="defs-only">' +
          '<filter id="normalise">' +
          '<feColorMatrix values="0.21 0.72 0.072 0 0 0.21 0.72 0.072 0 0 0.21 0.72 0.072 0 0 0 0 0 1 0" />' +
          '<feComponentTransfer>' +
            '<feFuncR type="table" tableValues="0.34 0.59 0.75 0.94" />' +
            '<feFuncG type="table" tableValues="0.34 0.59 0.75 0.94" />' +
            '<feFuncB type="table" tableValues="0.40 0.59 0.73 0.91" />' +
          '</feComponentTransfer>' +
        '</filter>' +
        '<filter id="hair-auburn">' +
            '<feColorMatrix type="matrix" values="0.8 0 0 0 0.2 0 0.5 0 0 0 0 0 0.15 0 0 0 0 0 1 0"/>' +
        '</filter>' +
        '<filter id="hair-ashen" color-interpolation-filters="sRGB">' + 
            '<feColorMatrix type="matrix" values="0.7 0 0 0 0.1 0 0.7 0 0 0.1 0 0 0.7 0 0.1 0 0 0 1 0"/>' + 
        '</filter>' + 
        '<filter id="hair-black" color-interpolation-filters="sRGB">' + 
            '<feColorMatrix type="matrix" values="0.2 0 0 0 0 0 0.15 0 0 0 0 0 0.1 0 0 0 0 0 1 0"/>' + 
        '</filter>' + 
        '<filter id="hair-blazing-red" color-interpolation-filters="sRGB">' + 
            '<feComponentTransfer>' + 
                '<feFuncR type="gamma" exponent="0.10" />' + 
                '<feFuncG type="gamma" exponent="3.00" />' + 
                '<feFuncB type="gamma" exponent="7.50" />' + 
            '</feComponentTransfer>' + 
        '</filter>' + 
        '<filter id="hair-blonde" color-interpolation-filters="sRGB">' + 
            '<feColorMatrix type="matrix" values="1.4 0 0 0 0 0 1.3 0 0 0 0 0 0.7 0 0 0 0 0 1 0"/>' + 
        '</filter>' + 
        '<filter id="hair-blue" color-interpolation-filters="sRGB">' + 
            '<feColorMatrix type="matrix" values="0.3 0 0 0 0 0 0.5 0 0 0 0.4 0.2 0.25 0 0.1 0 0 0 1 0"/>' + 
        '</filter>' + 
        '<filter id="hair-bright-red" color-interpolation-filters="sRGB">' + 
            '<feColorMatrix type="matrix" values="1 0 0 0 0.2 0 0.4 0 0 0 0 0 0.1 0 0.1 0 0 0 1 0"/>' + 
        '</filter>' + 
        '<filter id="hair-brown" color-interpolation-filters="sRGB">' + 
            '<feColorMatrix type="matrix" values="0.8 0 0 0 0 0 0.5 0 0 0 0 0 0.15 0 0 0 0 0 1 0"/>' + 
        '</filter>' + 
        '<filter id="hair-brunette" color-interpolation-filters="sRGB">' + 
            '<feColorMatrix type="matrix" values="0.8 0 0 0 0 0 0.5 0 0 0 0 0 0.15 0 0 0 0 0 1 0"/>' + 
        '</filter>' + 
        '<filter id="hair-burgundy" color-interpolation-filters="sRGB">' + 
            '<feColorMatrix type="matrix" values="0.45 0 0 0 0.25 0 0.2 0 0 0.1 0 0 0.3 0 0.2 0 0 0 1 0"/>' + 
        '</filter>' + 
        '<filter id="hair-chestnut" color-interpolation-filters="sRGB">' + 
            '<feColorMatrix type="matrix" values="0.9 0 0 0 0.2 0 0.7 0 0 0 0 0 0.1 0 0.1 0 0 0 1 0"/>' + 
        '</filter>' + 
        '<filter id="hair-chocolate-brown" color-interpolation-filters="sRGB">' + 
            '<feColorMatrix type="matrix" values="0.6 0 0 0 0 0 0.2 0 0 0 0 0 0.1 0 0 0 0 0 1 0"/>' + 
        '</filter>' + 
        '<filter id="hair-copper" color-interpolation-filters="sRGB">' + 
            '<feColorMatrix type="matrix" values="1.5 0 0 0 -0.2 0 0.8 0 0 -0.2 0 0 0.1 0 0 0 0 0 1 0"/>' + 
        '</filter>' + 
        '<filter id="hair-dark" color-interpolation-filters="sRGB">' + 
            '<feColorMatrix type="matrix" values="0.5 0 0 0 0 0 0.2 0 0 0 0 0 0.1 0 0 0 0 0 1 0"/>' + 
        '</filter>' + 
        '<filter id="hair-dark-blonde" color-interpolation-filters="sRGB">' + 
            '<feColorMatrix type="matrix" values="1.1 0 0 0 0 0 0.9 0 0 0 0 0 0.4 0 0 0 0 0 1 0"/>' + 
        '</filter>' + 
        '<filter id="hair-dark-brown" color-interpolation-filters="sRGB">' + 
            '<feColorMatrix type="matrix" values="0.6 0 0 0 0 0 0.35 0 0 0 0 0 0.1 0 0 0 0 0 1 0"/>' + 
        '</filter>' + 
        '<filter id="hair-dark-red" color-interpolation-filters="sRGB">' + 
            '<feColorMatrix type="matrix" values="0.7 0 0 0 0.2 0 0.15 0 0 0.1 0 0 0 0 0 0 0 0 1 0"/>' + 
        '</filter>' + 
        '<filter id="hair-deep-red" color-interpolation-filters="sRGB">' + 
            '<feColorMatrix type="matrix" values="1.5 0 0 0 -0.3 0 0.3 0 0 -0.1 0 0 0 0 0 0 0 0 1 0"/>' + 
        '</filter>' + 
        '<filter id="hair-dirty-blonde" color-interpolation-filters="sRGB">' + 
            '<feColorMatrix type="matrix" values="0.8 0 0 0 0.3 0 0.7 0 0 0.3 0 0 0.2 0 0.5 0 0 0 1 0"/>' + 
        '</filter>' + 
        '<filter id="hair-fair-blonde" color-interpolation-filters="sRGB">' + 
            '<feColorMatrix type="matrix" values="1 0 0 0 0.5 0 0.8 0 0 0.4 0 0 0.6 0 0.2 0 0 0 1 0"/>' + 
        '</filter>' + 
        '<filter id="hair-ginger" color-interpolation-filters="sRGB">' + 
            '<feColorMatrix type="matrix" values="1.2 0 0 0 0.1 0 0.9 0 0 0 0 0 0.1 0 0.3 0 0 0 1 0"/>' + 
        '</filter>' + 
        '<filter id="hair-golden" color-interpolation-filters="sRGB">' + 
            '<feColorMatrix type="matrix" values="1.7 0 0 0 -0.1 0 1.5 0 0 -0.1 0 0 0.1 0 0.3 0 0 0 1 0"/>' + 
        '</filter>' + 
        '<filter id="hair-golden-blonde" color-interpolation-filters="sRGB">' + 
            '<feColorMatrix type="matrix" values="1.8 0 0 0 -0.3 0 1.6 0 0 -0.4 0 0 0.3 0 0.1 0 0 0 1 0"/>' + 
        '</filter>' + 
        '<filter id="hair-green" color-interpolation-filters="sRGB">' + 
            '<feColorMatrix type="matrix" values="0.7 0 0 0 0 0.2 0.65 0.15 0 0 0 0 0.5 0 0 0 0 0 1 0"/>' + 
        '</filter>' + 
        '<filter id="hair-gray" color-interpolation-filters="sRGB">' + 
            '<feColorMatrix type="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"/>' + 
        '</filter>' + 
        '<filter id="hair-grey" color-interpolation-filters="sRGB">' + 
            '<feColorMatrix type="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"/>' + 
        '</filter>' + 
        '<filter id="hair-hazel" color-interpolation-filters="sRGB">' + 
            '<feColorMatrix type="matrix" values="0.8 0 0 0 0.2 0 0.5 0 0 0.2 0 0 0.15 0 0.15 0 0 0 1 0"/>' + 
        '</filter>' + 
        '<filter id="hair-light-brown" color-interpolation-filters="sRGB">' + 
            '<feColorMatrix type="matrix" values="0.8 0 0 0 0 0 0.7 0 0 0 0 0 0.5 0 0 0 0 0 1 0"/>' + 
        '</filter>' + 
        '<filter id="hair-light-purple" color-interpolation-filters="sRGB">' + 
            '<feColorMatrix type="matrix" values="0.7 0 0 0 0.4 0 0.1 0 0 0.2 0 0 0.7 0 0.3 0 0 0 1 0"/>' + 
        '</filter>' + 
        '<filter id="hair-neon-blue" color-interpolation-filters="sRGB">' + 
            '<feComponentTransfer>' + 
                '<feFuncR type="gamma" exponent="3.75" />' + 
                '<feFuncG type="gamma" exponent="0.75" />' + 
                '<feFuncB type="gamma" exponent="0.25" />' + 
            '</feComponentTransfer>' + 
        '</filter>' + 
        '<filter id="hair-neon-green" color-interpolation-filters="sRGB">' + 
            '<feComponentTransfer>' + 
                '<feFuncR type="gamma" exponent="3.00" />' + 
                '<feFuncG type="gamma" exponent="0.25" />' + 
                '<feFuncB type="gamma" exponent="0.98" />' + 
            '</feComponentTransfer>' + 
        '</filter>' + 
        '<filter id="hair-neon-pink" color-interpolation-filters="sRGB">' + 
            '<feComponentTransfer>' + 
                '<feFuncR type="gamma" exponent="0.10" />' + 
                '<feFuncG type="gamma" exponent="1.00" />' + 
                '<feFuncB type="gamma" exponent="0.50" />' + 
            '</feComponentTransfer>' + 
        '</filter>' + 
        '<filter id="hair-olive" color-interpolation-filters="sRGB">' + 
            '<feColorMatrix type="matrix" values="0.7 0 0 0 0 0 0.6 0 0 0 0 0 0.15 0 0 0 0 0 1 0"/>' + 
        '</filter>' + 
        '<filter id="hair-onyx-black" color-interpolation-filters="sRGB">' + 
            '<feComponentTransfer>' + 
                '<feFuncR type="gamma" exponent="5.50" />' + 
                '<feFuncG type="gamma" exponent="6.00" />' + 
                '<feFuncB type="gamma" exponent="7.00" />' + 
            '</feComponentTransfer>' + 
        '</filter>' + 
        '<filter id="hair-pale-blonde" color-interpolation-filters="sRGB">' + 
            '<feColorMatrix type="matrix" values="0.45 0 0 0 0.7 0 0.4 0 0 0.7 0 0 0.6 0 0.4 0 0 0 1 0"/>' + 
        '</filter>' + 
        '<filter id="hair-peachy" color-interpolation-filters="sRGB">' + 
            '<feColorMatrix type="matrix" values="1.45 0 0 0 0 0 1.4 -0.1 0 -0.1 0 0 0.85 0 0 0 0 0 1 0"/>' + 
        '</filter>' + 
        '<filter id="hair-pink" color-interpolation-filters="sRGB">' + 
            '<feColorMatrix type="matrix" values="1.5 0 0 0 0 0 1.5 -0.2 0 -0.2 0 0 1 0 0 0 0 0 1 0"/>' + 
        '</filter>' + 
        '<filter id="hair-platinum-blonde" color-interpolation-filters="sRGB">' + 
            '<feColorMatrix type="matrix" values="0.6 0 0 0 0.4 0 0.6 0 0 0.4 0 0 1 0 0 0 0 0 1 0"/>' + 
        '</filter>' + 
        '<filter id="hair-purple" color-interpolation-filters="sRGB">' + 
            '<feColorMatrix type="matrix" values="0.9 0 0 0 0 0 0.2 0 0 0 0 0 1 0 0 0 0 0 1 0"/>' + 
        '</filter>' + 
        '<filter id="hair-raven-black" color-interpolation-filters="sRGB">' + 
            '<feColorMatrix type="matrix" values="0.2 0 0 0 0 0 0.2 0 0 0 0 0 0.3 0 0 0 0 0 1 0"/>' + 
        '</filter>' + 
        '<filter id="hair-red" color-interpolation-filters="sRGB">' + 
            '<feColorMatrix type="matrix" values="0.6 0 0 0 0.4 0 0.25 0 0 0.2 0 0 0 0 0.3 0 0 0 1 0"/>' + 
        '</filter>' + 
        '<filter id="hair-red-blonde" color-interpolation-filters="sRGB">' + 
            '<feColorMatrix type="matrix" values="1 0 0 0 0.25 0 0.8 0 0 0.1 0 0 0.35 0 0.15 0 0 0 1 0"/>' + 
        '</filter>' + 
        '<filter id="hair-silver" color-interpolation-filters="sRGB">' + 
            '<feColorMatrix type="matrix" values="0.8 0 0 0 0.3 0 0.8 0 0 0.3 0 0 0.8 0 0.3 0 0 0 1 0"/>' + 
        '</filter>' + 
        '<filter id="hair-strawberry-blonde" color-interpolation-filters="sRGB">' + 
            '<feColorMatrix type="matrix" values="1.2 0 0 0 0.2 0 1.2 0 0 0 0 0 0.7 0 0 0 0 0 1 0"/>' + 
        '</filter>' + 
        '<filter id="hair-violet" color-interpolation-filters="sRGB">' + 
            '<feColorMatrix type="matrix" values="2 -1 0 0 0 0 2 -1 0 0 -1 0 2 0 0 0 0 0 1 0"/>' + 
        '</filter>' + 
        '<filter id="hair-white" color-interpolation-filters="sRGB">' + 
            '<feColorMatrix type="matrix" values="0.6 0 0 0 0.5 0 0.6 0 0 0.5 0 0 0.6 0 0.5 0 0 0 1 0"/>' + 
        '</filter>' + 
        '<filter id="hair-white-blonde" color-interpolation-filters="sRGB">' + 
            '<feColorMatrix type="matrix" values="0.7 0 0 0 0.5 0 0.7 0 0 0.5 0 0 0.5 0 0.4 0 0 0 1 0"/>' + 
        '</filter>' + 
    '</svg>';

    $(svg).insertBefore('body');
    
    // filter classes
    var filters = ['hair-ashen', 'hair-auburn', 'hair-black', 'hair-blazing-red', 'hair-blonde', 'hair-blue', 'hair-bright-red', 'hair-brown', 'hair-brunette', 'hair-burgundy', 'hair-chestnut', 'hair-chocolate-brown', 'hair-copper', 'hair-dark', 'hair-dark-blonde', 'hair-dark-brown', 'hair-dark-red', 'hair-deep-red', 'hair-dirty-blonde', 'hair-fair-blonde', 'hair-ginger', 'hair-golden', 'hair-golden-blonde', 'hair-green', 'hair-gray', 'hair-grey', 'hair-hazel', 'hair-light-brown', 'hair-light-purple', 'hair-neon-blue', 'hair-neon-green', 'hair-neon-pink', 'hair-olive', 'hair-onyx-black', 'hair-pale-blonde', 'hair-peachy', 'hair-pink', 'hair-platinum-blonde', 'hair-purple', 'hair-raven-black', 'hair-red', 'hair-red-blonde', 'hair-silver', 'hair-strawberry-blonde', 'hair-violet', 'hair-white', 'hair-white-blonde'];
    
    function testHairFilter (classOrColor) {
        if (typeof classOrColor !== 'string') {
            return;
        }
        if (!classOrColor.includes('hair-')) {
            classOrColor = 'hair-' + classOrColor;
        }
        if (!filters.includes(classOrColor)) {
            console.error('invalid hair color filter');
            return;
        }
        
        $('img.layer[data-group=hair]').addClass(classOrColor);
    }
    
    // filters will be applied for real via the Portrait API
}());