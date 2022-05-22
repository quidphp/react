const mix = require('laravel-mix');
require('laravel-mix-polyfill');

mix.js('react/index.js', 'public/js/app.js');
mix.react({ extractStyles: 'public/css/app.css'});
mix.extract(['quidphp-navigation','quidphp-browser','quidphp-javascript'], 'public/js/app-vendor.js');

if(mix.inProduction())
mix.polyfill({ enabled: true, useBuiltIns: false });

else
{
    mix.sourceMaps();
    const hmrOptions = { host: 'localhost', https: true, port: '8079' };
    mix.options({ hmrOptions });
}