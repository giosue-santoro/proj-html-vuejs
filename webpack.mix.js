let mix = require('laravel-mix');

mix.sass('src/app.scss', 'dist/app.css').options({ processCssUrls: false });