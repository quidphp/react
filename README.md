# QuidPHP/React
[![Release](https://img.shields.io/github/v/release/quidphp/react)](https://packagist.org/packages/quidphp/react)
[![License](https://img.shields.io/github/license/quidphp/react)](https://github.com/quidphp/react/blob/master/LICENSE)
[![PHP Version](https://img.shields.io/packagist/php-v/quidphp/react)](https://www.php.net)
[![Style CI](https://styleci.io/repos/494941847/shield)](https://styleci.io)
[![Code Size](https://img.shields.io/github/languages/code-size/quidphp/react)](https://github.com/quidphp/react)

## About
**QuidPHP/React** repository contains the necessary structure to create a new project using QuidPHP, LemurCMS and React.

## License
**QuidPHP/React** is available as an open-source software under the [MIT license](LICENSE).

## Documentation
**QuidPHP/React** documentation is available at [QuidPHP/Docs](https://github.com/quidphp/docs).

## Installation
**QuidPHP/React** can be easily installed with [Composer](https://getcomposer.org). It is available on [Packagist](https://packagist.org/packages/quidphp/react).
``` bash
$ composer create-project quidphp/react --prefer-dist
```

## Requirement
**QuidPHP/React** requires the following:
- Apache or Nginx server (running on MacOs or Linux environment). 
    - Works in Windows environment but there are **known issues**.
- PHP 8.1 
    - with these extensions:
        - ctype
        - curl
        - date
        - fileinfo
        - gd
        - iconv
        - json
        - mbstring
        - pcre
        - openssl
        - session
        - SimpleXML
        - zip
        - PDO
        - pdo_mysql
    - and these PHP INI directives
        - *post_max_size* must be at least 1MB
        - *post_max_size* must be larger than *upload_max_filesize*
        - *memory_limit* must be at least 128MB
- Mysql (>= 8.0) or MariaDB (>= 10.4) database
- NodeJs LTS version (>= 16)
- Any modern browser (not Internet Explorer)

## Dependency
**QuidPHP/Assert** has the following dependencies:
- [quidphp/site](https://github.com/quidphp/site) - Quid\Site - Extended platform to build a website using the QuidPHP framework and LemurCMS
- [quidphp/navigation](https://github.com/quidphp/navigation) - Javascript module for navigating a website without reloading
- [facebook/react](https://github.com/facebook/react) - A declarative, efficient, and flexible JavaScript library for building user interfaces.
- [facebook/react-dom](https://www.npmjs.com/package/react-dom) - This package serves as the entry point to the DOM and server renderers for React.
- [laravel-mix/laravel-mix](https://github.com/laravel-mix/laravel-mix) - The power of webpack, distilled for the rest of us
- [scottcharlesworth/laravel-mix-polyfill](https://github.com/scottcharlesworth/laravel-mix-polyfill) - Quid\Main - A Laravel Mix extension to include polyfills by using Babel, core-js, and regenerator-runtime
- [sass/dart-sass](https://github.com/sass/dart-sass) - The reference implementation of Sass, written in Dart.
- [webpack-contrib/sass-loader](https://github.com/webpack-contrib/sass-loader) - Compiles Sass to CSS
- [shakacode/sass-resources-loader](https://github.com/shakacode/sass-resources-loader) - SASS resources (e.g. variables, mixins etc.) loader for Webpack.
- [bholloway/resolve-url-loader](https://github.com/bholloway/resolve-url-loader) - Webpack loader that resolves relative paths in url() statements based on the original source file
- [@babel/preset-react](https://www.npmjs.com/package/@babel/preset-react) - Babel preset for React
- [pmmmwh/react-refresh-webpack-plugin](https://github.com/pmmmwh/react-refresh-webpack-plugin) - A Webpack plugin to enable "Fast Refresh" for React components.

All dependencies will be resolved by using the [Composer](https://getcomposer.org) installation process.

## Setup
Once the installation is complete, simply follow these steps:
1. Make sure the [storage](storage) and [public](public) folders are writable by your web server. For [storage](storage) also make sure all subdirectories are writable.
2. Configure an Apache Virtual Host or Nginx Server Block in order to have a domain pointing to the [public](public) folder document root.
3. Import [db.sql](db.sql) within a new Mysql/MariaDB database.
4. Duplicate the [env-default.php](env-default.php) file and rename it to **env.php**.
5. Update the scheme hosts within the **env.php** file. You will need to set a different host (domain or subdomain) for the application and the CMS.
6. Update the database parameters within the **env.php** file.
7. Not required, but you are encouraged to change the namespace of all PHP classes within the [src](src) folder. The default namespace is Project.

## Booting via Webpack/HTTP
Open the project folder in the Command Line. To start the development server with hot module reload (HMR) write:
``` bash
npm run hot
```
Your application will be reachable at the defined host within your *env.php* file. A second Node server is also started to serve the HMR requests (defaults to localhost on port 8079). You may need to accept the self-signed certificate for that localhost.

## Webpack production build
To generate the production build for the React application, open the project folder in the Command Line and write:
``` bash
npm run prod
```

## QuidPHP CLI routes
Open the project folder in the Command Line. You may now submit a command in the following format: 
``` bash
php quid [path][:envType]
exemple:
php quid /en/my-url
php quid /en/my-url:dev/cms
php quid /:prod/app
```

## LemurCMS credentials
Once you open the CMS within your browser, you will need to login. The default user is:
- Username: **admin** 
- Password: **changeme123**

Once you are logged in, you will be able to change the password for the user and create new users.

## Overview
**QuidPHP/Project** contains 31 files. Here is an overview:
- [.gitignore](.gitignore) - Standard .gitignore file for the project
- [composer.json](composer.json) - File declaring all Composer PHP dependencies
- [db.sql](db.sql) - Minimal database structure required
- [env-default.php](env-default.php) - Declare environment data for the application, copy this file and rename to env.php
- [LICENSE](LICENSE) - MIT License file for the repository
- [package.json](package.json) - File declaring all NPM dependencies
- [quid](quid) - File for booting the application and Cms via CLI
- [README.md](README.md) - This readme file in markdown format
- [webpack.mix.js](webpack.mix.js) - Configuration file for laravel-mix
- [storage/public/favicon.ico](storage/public/favicon.ico) - Generic favicon (16x16), this will be symlinked to *public/favicon.ico*.
- [public/.htaccess](public/.htaccess) - Simple apache directive file, requires mod_rewrite
- [public/index.php](public/index.php) - Index file for booting the application and Cms via an HTTP request
- [src/Boot.php](src/Boot.php) - Class for booting the application and CMS
- [src/Route.php](src/Route.php) - Abstract class for a route, all routes will extend this class
- [src/Row.php](src/Row.php) - Abstract class for a row, all rows will extend this class
- [src/Session.php](src/Session.php) - Class used to represent the active session
- [src/App/_template.php](src/App/_template.php) - Trait used by all routes which generate an interface
- [src/App/Error.php](src/App/Error.php) - Class for the error route of the app
- [src/App/Home.php](src/App/Home.php) - Class for the home route of the app
- [src/Row/User.php](src/Row/User.php) - Class for a row of the user table
- [src/Service/React.php](src/Service/React.php) - Class related to React and the loading of front-end assets
- [app/app.jsx](app/app.jsx) - Root component which loads the correct route
- [app/app.scss](app/app.scss) - Main scss stylesheet for the app
- [app/global.js](app/global.js) - Script which declares some global variables
- [app/index.js](app/index.js) - Entry file for the react application
- [app/component/HelloWorld.jsx](app/component/HelloWorld.jsx) - Component for a hello world in a h1 tag
- [app/component/HelloWorld.module.scss](app/component/HelloWorld.module.scss) - SCSS module file for the hello world component
- [app/interface/Layout.jsx](app/interface/Layout.jsx) - Component for the common page layout
- [app/interface/Layout.scss](app/interface/Layout.scss) - Stylesheet for the common page layout
- [app/route/Error.jsx](app/route/Error.jsx) - Component for the error route
- [app/route/Home.jsx](app/route/Home.jsx) - Component for the home route

## Known issues
- On Windows, there are some problems related to creating symlinks.
- On Windows, you will need to add *lower_case_table_names* = 2 in your database configuration file (my.cnf). The table and column names need to be stored in their natural case.

## Testing
**QuidPHP** testsuite can be run by creating a new [QuidPHP/Assert](https://github.com/quidphp/assert) project.