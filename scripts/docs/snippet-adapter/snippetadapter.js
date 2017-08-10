/**
 * @license Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

/* eslint-env node */

const path = require( 'path' );
const fs = require( 'fs' );
const webpack = require( 'webpack' );
const { bundler } = require( '@ckeditor/ckeditor5-dev-utils' );

// const BabiliPlugin = require( 'babili-webpack-plugin' );

module.exports = function snippetAdapter( data ) {
	const webpackConfig = getWebpackConfig( {
		entry: data.snippetSource.js,
		outputPath: path.join( data.outputPath, data.snippetPath )
	} );

	return runWebpack( webpackConfig )
		.then( () => {
			return {
				html: fs.readFileSync( data.snippetSource.html ),
				assets: {
					js: [
						path.join( data.relativeOutputPath, data.snippetPath, 'snippet.js' )
					],
					css: [
						path.join( data.basePath, 'assets', 'snippet-styles.css' )
					]
				}
			};
		} );
};

function getWebpackConfig( config ) {
	return {

		devtool: 'source-map',

		entry: config.entry,

		output: {
			path: config.outputPath,
			filename: 'snippet.js'
		},

		plugins: [
			// new BabiliPlugin( null, {
			// 	comments: false
			// } ),
			new webpack.BannerPlugin( {
				banner: bundler.getLicenseBanner(),
				raw: true
			} )
		],

		// Configure the paths so building CKEditor 5 snippets work even if the script
		// is triggered from a directory outside ckeditor5 (e.g. multi-project case).
		resolve: {
			modules: getModuleResolvePaths()
		},

		resolveLoader: {
			modules: getModuleResolvePaths()
		},

		module: {
			rules: [
				{
					test: /\.svg$/,
					use: [ 'raw-loader' ]
				},
				{
					test: /\.scss$/,
					use: [
						'style-loader',
						{
							loader: 'css-loader',
							options: {
								minimize: true
							}
						},
						'sass-loader'
					]
				}
			]
		}
	};
}

function runWebpack( webpackConfig ) {
	return new Promise( ( resolve, reject ) => {
		webpack( webpackConfig, ( err, stats ) => {
			if ( err ) {
				reject( err );
			} else if ( stats.hasErrors() ) {
				reject( new Error( stats.toString() ) );
			} else {
				resolve();
			}
		} );
	} );
}

function getModuleResolvePaths() {
	return [
		path.resolve( __dirname, '..', '..', '..', 'node_modules' ),
		'node_modules'
	];
}
