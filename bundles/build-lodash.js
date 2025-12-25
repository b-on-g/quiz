const esbuild = require('esbuild')
const path = require('path')

console.log('🔨 Собираю lodash бандл для MAM...')

esbuild
	.build({
		// Входной файл из node_modules
		entryPoints: ['node_modules/lodash/lodash.js'],

		// Собрать все зависимости в один файл
		bundle: true,

		// IIFE формат - создает глобальную переменную window._
		format: 'iife',
		globalName: '_',

		// Выходной файл в ../lib/
		outfile: path.join(__dirname, '../lib/lodash.bundle.js'),

		// Минификация для уменьшения размера
		minify: true,

		// Целевая платформа - браузер
		platform: 'browser',
		target: 'es2020',
	})
	.then(() => {
		const stats = require('fs').statSync(path.join(__dirname, '../lib/lodash.bundle.js'))
		console.log('✅ Бандл создан: lib/lodash.bundle.js')
		console.log('📦 Размер:', Math.round(stats.size / 1024), 'KB')
	})
	.catch(error => {
		console.error('❌ Ошибка сборки:', error)
		process.exit(1)
	})
