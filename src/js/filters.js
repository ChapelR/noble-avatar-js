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
    '</svg>';

    $(svg).insertBefore('body');
    
    // filter classes
    var hairFilters = [
        'hair-auburn'
    ];
    
    var skinFilters = [];
    
}());