var CAC = CAC || {};

(function () {
    
    function $createEl (type, className, id) {
        return $(document.createElement(type))
            .addClass(className)
            .attr('id', id);
    }
    
    function createWrapper () {
        
        return {
            $wrapper : $createEl('div', 'cac-wrapper', 'cac-wrapper'),
            $base : $createEl('div', 'cac-bkg', 'cac-base'),
            $eyes : $createEl('div', 'cac-bkg', 'cac-eyes'),
            $mouth : $createEl('div', 'cac-bkg', 'cac-mouth'),
            $features : $createEl('div', 'cac-bkg', 'cac-features'),
            $beard : $createEl('div', 'cac-bkg', 'cac-beard'),
            $glasses : $createEl('div', 'cac-bkg', 'cac-glasses'),
            $hair : $createEl('div', 'cac-bkg', 'cac-hair'),
            $neck : $createEl('div', 'cac-bkg', 'cac-neck'),
            $accessories : $createEl('div', 'cac-bkg', 'cac-accessories')
        };
        
    }
    
    function getLayer (lay, notJQ) {
        var $el = $('#cac-' + lay),
            el = $el[0];
        if (el) {
            return notJQ ? el : $el;
        }
    }
    
    function rewrap (obj) {
        if (obj instanceof Element) {
            return $(obj);
        }
        return obj; // cannot be wrapped / already JQ
    }
    
    CAC.util = CAC.util || {};
    CAC.util.getLayer = getLayer;
    CAC.util.rewrap = rewrap;
        
    CAC.createElements : createWrapper;
    
}());