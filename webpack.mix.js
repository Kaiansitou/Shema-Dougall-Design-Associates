let mix = require('laravel-mix');

mix.webpackConfig({
    resolve: {
        modules: [
            path.resolve('./resources/assets'),
            path.resolve('./node_modules')
        ]
    }
});

mix.less('resources/less/index.less', 'public/css/index.css');
mix.less('resources/less/service.less', 'public/css/service.css');
mix.less('resources/less/privacy.less', 'public/css/privacy.css');
mix.less('resources/less/contact.less', 'public/css/contact.css');
mix.less('resources/less/portfoilo.less', 'public/css/portfoilo.css');

mix.copy('resources/images', 'public/images');
