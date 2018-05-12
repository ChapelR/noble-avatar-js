var gulp = require('gulp'),
    fs = require('fs'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    minify = require('gulp-clean-css'),
    autopre = require('gulp-autoprefixer'),
    replace = require('gulp-replace'),
    jshint = require('gulp-jshint');

function retrieve (dir, type, obj) {
    var files = fs.readdirSync(dir);
    type = type || 'u';
    obj = obj || { u : [], f : [], m : [] };
    files.forEach( function (file) {
        if (fs.statSync(dir + file).isDirectory()) {
            if (file.includes('f')) {
                retrieve(dir + file + '/', 'f', obj);
            } else if (file.includes('m')) {
                retrieve(dir + file + '/', 'm', obj);
            }
        } else {
            obj[type].push(file);
        }
    });
    return obj;
};

function getImageAssets () {
    var imgDir = './dist/cac/',
        ext = '.png',
        imgs = {
            
            accessories : {
                components : retrieve(imgDir + 'accessories/'),
                required : false,
                masterDir : imgDir + 'accessories/',
                uni : imgDir + 'accessories/',
                fem : imgDir + 'accessories/' + 'f/',
                mal : imgDir + 'accessories/' + 'm/'
            },
            base : {
                components : retrieve(imgDir + 'base/'),
                required : true,
                masterDir : imgDir + 'base/',
                uni : imgDir + 'base/',
                fem : imgDir + 'base/' + 'f/',
                mal : imgDir + 'base/' + 'm/'
            },
            beard : {
                components : retrieve(imgDir + 'beard/'),
                required : false,
                masterDir : imgDir + 'beard/',
                uni : imgDir + 'beard/',
                fem : imgDir + 'beard/' + 'f/',
                mal : imgDir + 'beard/' + 'm/'
            },
            eyes : {
                components : retrieve(imgDir + 'eyes/'),
                required : true,
                masterDir : imgDir + 'eyes/',
                uni : imgDir + 'eyes/',
                fem : imgDir + 'eyes/' + 'f/',
                mal : imgDir + 'eyes/' + 'm/'
            },
            features : {
                components : retrieve(imgDir + 'features/'),
                required : false,
                masterDir : imgDir + 'features/',
                uni : imgDir + 'features/',
                fem : imgDir + 'features/' + 'f/',
                mal : imgDir + 'features/' + 'm/'
            },
            glasses : {
                components : retrieve(imgDir + 'glasses/'),
                required : false,
                masterDir : imgDir + 'glasses/',
                uni : imgDir + 'glasses/',
                fem : imgDir + 'glasses/' + 'f/',
                mal : imgDir + 'glasses/' + 'm/'
            },
            hair : {
                components : retrieve(imgDir + 'hair/'),
                required : false,
                masterDir : imgDir + 'hair/',
                uni : imgDir + 'hair/',
                fem : imgDir + 'hair/' + 'f/',
                mal : imgDir + 'hair/' + 'm/'
            },
            mouths : {
                components : retrieve(imgDir + 'mouths/'),
                required : true,
                masterDir : imgDir + 'mouths/',
                uni : imgDir + 'mouths/',
                fem : imgDir + 'mouths/' + 'f/',
                mal : imgDir + 'mouths/' + 'm/'
            },
            neck : {
                components : retrieve(imgDir + 'neck/'),
                required : false,
                masterDir : imgDir + 'neck/',
                uni : imgDir + 'neck/',
                fem : imgDir + 'neck/' + 'f/',
                mal : imgDir + 'neck/' + 'm/'
            }
        };
        
    console.log(imgs);
    return imgs;
}

function getImages () {
    var imgs = JSON.stringify(getImageAssets(), null, 4);
    
    return gulp.src('./src/component-loader.js')
        .pipe(replace('/* [target] */', imgs))
        .pipe(rename('components.js'))
        .pipe(gulp.dest('./src/js/'));
}

gulp.task('img', getImages);