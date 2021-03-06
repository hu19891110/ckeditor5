---
# Scope:
# - Guidance on all possible installation options.

title: Installation
category: builds-integration
order: 10
---

## Download options

The goal of installing any of the CKEditor 5 builds is to enable you to use its API when integrating it inside your application. For that purpose, several options are available:

* [Zip download](#Zip-download)
* [CDN](#CDN)
* [npm](#npm)

Each of the builds has independent release packages. Before starting, you must define which one you are interested in. Check the {@link TODO Overview} page for the list of available builds.

### Zip download

Go to http://ckeditor.com/ckeditor5-builds/download and download your preferred build. For example, you may download the `ckeditor5-build.classic-1.0.0.zip` file for the Classic Editor build.

Extract the above `.zip` file into a dedicated directory inside your website or application.

The main entry point script will then be available at `<your-path>/ckeditor/build/ckeditor.js`.

### CDN

Builds can be loaded inside pages directly from our CDN, which is optimized for worldwide super fast download.

Check out the {@link TODO CKEditor 5 Builds CDN website} for a list of URL entry points for the builds API.

### npm

All builds are released on npm. The following search shows all build packages available there: https://www.npmjs.com/search?q=%40ckeditor%2Fckeditor5-build

Installing a build with npm is as simple as calling the following inside your website or application:

```
npm install --save @ckeditor/ckeditor5-build-classic
```

The script entry point for the build class will then be found at `node_modules/ckeditor5-build-classic/build/ckeditor.js`.

## Included files

The following are the main files available in all build distributions:

* `build/ckeditor.js` &ndash; The main UMD distribution script, containing the editor core and all plugins. Compatible with ECMAScript 6 enabled browsers. A smaller download.
* `build/ckeditor.compat.js` &ndash; The same as the above, for browsers not compatible with ES6.
* `ckeditor.js`: &ndash; The source entry point of the build. It can be used for complex bundling and development.

## Loading the API

Once downloaded and installed in your application, it is time to make the API available in your pages. For that purpose, it is enough to load the API entry point script:

```
<script src="/ckeditor/build/ckeditor.js"></script>
```

For a more advanced setup, you may wish to bundle the CKEditor script with other scripts used by your application. See {@link TODO Bundling} for more information about it.

Once the CKEditor script is loaded, you can {@link TODO use the API} to create editors in your page.

