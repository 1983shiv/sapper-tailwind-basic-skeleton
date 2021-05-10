import path from 'path';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import commonjs from '@rollup/plugin-commonjs';
import url from '@rollup/plugin-url';
import svelte from 'rollup-plugin-svelte';
import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import config from 'sapper/config/rollup.js';
import pkg from './package.json';
import markdown from '@jackfranklin/rollup-plugin-markdown'
import glob from 'rollup-plugin-glob'
import image from "svelte-image";

// import alias from '@rollup/plugin-alias'

const mode = process.env.NODE_ENV;
const dev = mode === 'development';
const legacy = !!process.env.SAPPER_LEGACY_BUILD;

// const production = !process.env.ROLLUP_WATCH;
// const aliases = {
//   '@': path.resolve(__dirname, 'src')
// }

const onwarn = (warning, onwarn) =>
	(warning.code === 'MISSING_EXPORT' && /'preload'/.test(warning.message)) ||
	(warning.code === 'CIRCULAR_DEPENDENCY' && /[/\\]@sapper[/\\]/.test(warning.message)) ||
	onwarn(warning);

export default {
	client: {
		input: config.client.input(),
		output: config.client.output(),
		plugins: [
			glob(),
      markdown(),
			replace({
				preventAssignment: true,
				values:{
					'process.browser': true,
					'process.env.NODE_ENV': JSON.stringify(mode)
				},
			}),
			svelte({
				compilerOptions: {
					dev,
					hydratable: true
				},
				preprocess: {
					...image({
						optimizeAll: true, 
						imgTagExtensions: ["jpg", "jpeg", "png", "gif","svg"],
						componentExtensions: [],
						inlineBelow: 20000, // inline all images in img tags below 10kb
						compressionLevel: 8, // png quality level
						quality: 90, // jpeg/webp quality level
						tagName: "Image", // default component name
						sizes: [400, 800, 1200], // array of sizes for srcset in pixels
						// array of screen size breakpoints at which sizes above will be applied
						breakpoints: [375, 768, 1024],
						outputDir: "g/",
						// should be ./static for Sapper and ./public for plain Svelte projects
						publicDir: "./static/",
						placeholder: "blur", // or "blur",
						// WebP options [sharp docs](https://sharp.pixelplumbing.com/en/stable/api-output/#webp)
						webpOptions: {
							quality: 95,
							lossless: false,
							force: true
						},
						webp: true,
						// Potrace options for SVG placeholder
						trace: {
							background: "#fff",
							color: "#002fa7",
							threshold: 120
						},
						// Wheter to download and optimize remote images loaded from a url
						optimizeRemote: true,
						processFolders: [],
						processFoldersRecursively: false,
						processFoldersExtensions: ["jpg", "jpeg", "png", "gif","svg"],
						processFoldersSizes: false
					}),
				}
			}),
			url({
				sourceDir: path.resolve(__dirname, 'src/node_modules/images'),
				publicPath: '/client/'
			}),
			resolve({
				browser: true,
				dedupe: ['svelte']
			}),
			commonjs(),

			legacy && babel({
				extensions: ['.js', '.mjs', '.html', '.svelte'],
				babelHelpers: 'runtime',
				exclude: ['node_modules/@babel/**'],
				presets: [
					['@babel/preset-env', {
						targets: '> 0.25%, not dead'
					}]
				],
				plugins: [
					'@babel/plugin-syntax-dynamic-import',
					['@babel/plugin-transform-runtime', {
						useESModules: true
					}]
				]
			}),

			!dev && terser({
				module: true
			}),
			// production && ghPages.publish('public', (err) => { 
			// 	console.log('published to github pages', err);
			// }),
		],

		preserveEntrySignatures: false,
		onwarn,
	},

	server: {
		input: config.server.input(),
		output: config.server.output(),
		plugins: [
			glob(),
      markdown(),
			replace({
				preventAssignment: true,
				values:{
					'process.browser': false,
					'process.env.NODE_ENV': JSON.stringify(mode)
				},
			}),
			svelte({
				compilerOptions: {
					dev,
					generate: 'ssr',
					hydratable: true
				},
				emitCss: false
			}),
			url({
				sourceDir: path.resolve(__dirname, 'src/node_modules/images'),
				publicPath: '/client/',
				emitFiles: false // already emitted by client build
			}),
			resolve({
				dedupe: ['svelte']
			}),
			commonjs()
		],
		external: Object.keys(pkg.dependencies).concat(require('module').builtinModules),
		preserveEntrySignatures: 'strict',
		onwarn,
	},

	serviceworker: {
		input: config.serviceworker.input(),
		output: config.serviceworker.output(),
		plugins: [
			resolve(),
			replace({
				preventAssignment: true,
				values:{
					'process.browser': true,
					'process.env.NODE_ENV': JSON.stringify(mode)
				},
			}),
			commonjs(),
			!dev && terser()
		],
		preserveEntrySignatures: false,
		onwarn,
	}
};
