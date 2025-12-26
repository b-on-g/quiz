const esbuild = require('esbuild')
const path = require('path')
const fs = require('fs')

// Конфигурация всех библиотек для сборки
const libraries = [
	{
		name: 'axios',
		entryPoint: 'node_modules/axios/dist/axios.min.js',
		globalName: 'axios',
		description: 'HTTP клиент для запросов',
		skipBuild: true, // Уже минифицирован в UMD формате
	},
	{
		name: 'lodash',
		entryPoint: 'node_modules/lodash/lodash.js',
		globalName: '_',
		description: 'Утилиты для работы с массивами, объектами и строками',
	},
	{
		name: 'moment',
		entryPoint: 'node_modules/moment/min/moment.min.js',
		globalName: 'moment',
		description: 'Работа с датами и временем',
		skipBuild: true, // Уже минифицирован в UMD формате
	},
]

console.log('🔨 Собираю все NPM библиотеки для bog/quiz...\n')

// Функция для сборки одной библиотеки
async function buildLibrary(lib) {
	const outfile = path.join(__dirname, `../lib/${lib.name}.bundle.js`)

	console.log(`📦 ${lib.name}...`)

	try {
		// Если skipBuild=true, просто копируем готовый файл
		if (lib.skipBuild) {
			const source = path.join(__dirname, lib.entryPoint)
			fs.copyFileSync(source, outfile)
			const stats = fs.statSync(outfile)
			const sizeKB = Math.round(stats.size / 1024)
			console.log(`   ✅ ${lib.name}.bundle.js (${sizeKB} KB) [copied]`)
			return { success: true, name: lib.name, size: sizeKB }
		}

		// Иначе собираем через esbuild
		await esbuild.build({
			entryPoints: [lib.entryPoint],
			bundle: true,
			format: 'iife',
			globalName: lib.globalName,
			outfile: outfile,
			minify: true,
			platform: 'browser',
			target: 'es2020',
		})

		const stats = fs.statSync(outfile)
		const sizeKB = Math.round(stats.size / 1024)
		console.log(`   ✅ ${lib.name}.bundle.js (${sizeKB} KB)`)
		return { success: true, name: lib.name, size: sizeKB }
	} catch (error) {
		console.error(`   ❌ Ошибка сборки ${lib.name}:`, error.message)
		return { success: false, name: lib.name, error: error.message }
	}
}

// Собираем все библиотеки
async function buildAll() {
	const results = []

	for (const lib of libraries) {
		const result = await buildLibrary(lib)
		results.push(result)
	}

	console.log('\n' + '='.repeat(50))
	console.log('📊 Результаты сборки:')
	console.log('='.repeat(50))

	const successful = results.filter(r => r.success)
	const failed = results.filter(r => !r.success)

	if (successful.length > 0) {
		console.log(`\n✅ Успешно собрано: ${successful.length}`)
		successful.forEach(r => {
			console.log(`   - ${r.name} (${r.size} KB)`)
		})
	}

	if (failed.length > 0) {
		console.log(`\n❌ Ошибки: ${failed.length}`)
		failed.forEach(r => {
			console.log(`   - ${r.name}: ${r.error}`)
		})
		process.exit(1)
	}

	const totalSize = successful.reduce((sum, r) => sum + r.size, 0)
	console.log(`\n📦 Общий размер: ${totalSize} KB`)
	console.log('✨ Готово!\n')
}

buildAll().catch(error => {
	console.error('❌ Критическая ошибка:', error)
	process.exit(1)
})
