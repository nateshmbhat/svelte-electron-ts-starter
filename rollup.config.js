import svelte from 'rollup-plugin-svelte';
import json from '@rollup/plugin-json'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'

export default [{
	input: ['src/main.ts', 'src/renderer.ts'],
	output: {
		dir: 'public/build',
		format: 'cjs',
		sourcemap: true
	},
	plugins: [
		resolve(),
		svelte({
			css: css => {
				css.write('index.css')
			},
		}),
		commonjs(),
		json(),
		typescript()
	],
	experimentalCodeSplitting: true,
	experimentalDynamicImport: true,
	external: [
		'electron',
		'child_process',
		'fs',
		'path',
		'url',
		'module',
		'os'
	]
}];