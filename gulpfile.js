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
        pDir = './cac/',
        ext = '.png',
        imgs = {
            
            accessories : {
                components : retrieve(imgDir + 'accessories/'),
                required : false,
                dir : {
                    u : pDir + 'accessories/',
                    f : pDir + 'accessories/f/',
                    m : pDir + 'accessories/m/'
                }
            },
            base : {
                components : retrieve(imgDir + 'base/'),
                required : true,
                dir : {
                    u : pDir + 'base/',
                    f : pDir + 'base/f/',
                    m : pDir + 'base/m/'
                }
            },
            beard : {
                components : retrieve(imgDir + 'beard/'),
                required : false,
                dir : {
                    u : pDir + 'beard/',
                    f : pDir + 'beard/f/',
                    m : pDir + 'beard/m/'
                }
            },
            eyes : {
                components : retrieve(imgDir + 'eyes/'),
                required : true,
                dir : {
                    u : pDir + 'eyes/',
                    f : pDir + 'eyes/f/',
                    m : pDir + 'eyes/m/'
                }
            },
            features : {
                components : retrieve(imgDir + 'features/'),
                required : false,
                dir : {
                    u : pDir + 'features/',
                    f : pDir + 'features/f/',
                    m : pDir + 'features/m/'
                }
            },
            glasses : {
                components : retrieve(imgDir + 'glasses/'),
                required : false,
                dir : {
                    u : pDir + 'glasses/',
                    f : pDir + 'glasses/f/',
                    m : pDir + 'glasses/m/'
                }
            },
            hair : {
                components : retrieve(imgDir + 'hair/'),
                required : false,
                dir : {
                    u : pDir + 'hair/',
                    f : pDir + 'hair/f/',
                    m : pDir + 'hair/m/'
                }
            },
            mouths : {
                components : retrieve(imgDir + 'mouths/'),
                required : true,
                dir : {
                    u : pDir + 'mouths/',
                    f : pDir + 'mouths/f/',
                    m : pDir + 'mouths/m/'
                }
            },
            neck : {
                components : retrieve(imgDir + 'neck/'),
                required : false,
                dir : {
                    u : pDir + 'neck/',
                    f : pDir + 'neck/f/',
                    m : pDir + 'neck/m/'
                }
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

// build source

var jsFiles = 'src/js/**/*.js',
    jsDest = 'dist',
    cssFiles = 'src/css/**/*.css',
    cssDest = 'dist';

function scripts () {
    return gulp.src(jsFiles)
        .pipe(concat('noble.min.js'))
        .pipe(gulp.dest(jsDest))
        .pipe(rename('noble.min.js'))
        .pipe(uglify().on('error', function(e){
            console.log(e);
         }))
        .pipe(gulp.dest(jsDest));
}
function styles () {
    return gulp.src(cssFiles)
        .pipe(concat('noble.min.css'))
        .pipe(gulp.dest(cssDest))
        .pipe(rename('noble.min.css'))
        .pipe(autopre())
        .pipe(minify())
        .pipe(gulp.dest(cssDest));
}

gulp.task('build', function () {
    scripts();
    styles();
});

// lint task

function lint () {
    return gulp.src('src/js/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default', { beep : true }));
}

gulp.task('lint', lint);