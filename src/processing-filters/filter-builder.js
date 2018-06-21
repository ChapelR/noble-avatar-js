var fs = require('fs');

var idRegex = /id=\"(.+?)"/gi,
    replacerStart = /[\s]</gi,
    stringStart = " '<",
    replacerEnd = />[\n\r]/gi,
    stringEnd = ">' + ",
    wrap = "'";

function getMatches(string, regex, index) {
  index || (index = 1); // default to the first capturing group
  var matches = [];
  var match;
  while (match = regex.exec(string)) {
    matches.push(match[index]);
  }
  return matches;
}

function createStuff () {
    var svgCode = fs.readFileSync('./filters.svg', 'utf8');
    
    var str = (function () {
        var ret = svgCode.replace(replacerStart, stringStart);
        ret = ret.replace(replacerEnd, stringEnd);
        ret = wrap + ret + wrap;
        console.log(ret);
        return ret;
    }());
    
    var list = (function () {
        var ret = getMatches(svgCode, idRegex);
        return ret;
    }());
    
    var arr = '[' + list.map( function (item) {
        return wrap + item + wrap;
    }).join(', ') + ']';
    console.log(arr);
    
    var css = (function () {
        var ret = list.map( function (id) {
            return 'img.layer[data-group=hair].' + id + ' {\n' +
                '    filter: url(#normalize) url(#' + id + ');\n' + 
                '}';
        }).join('\n\n');
        console.log(ret);
        return ret;
    }());
    
    fs.writeFileSync('./out/string.txt', str);
    fs.writeFileSync('./out/array.txt', arr);
    fs.writeFileSync('./out/css.txt', css);
    
}

createStuff();