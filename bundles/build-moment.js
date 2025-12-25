const esbuild = require('esbuild');
const path = require('path');

console.log('🔨 Собираю moment.js бандл для MAM...');

esbuild.build({
  entryPoints: ['node_modules/moment/moment.js'],
  bundle: true,
  format: 'iife', // Самовыполняющаяся функция для браузера
  globalName: 'moment', // Доступен как window.moment
  outfile: path.join(__dirname, '../lib/moment.bundle.js'),
  minify: true,
  platform: 'browser',
  target: 'es2020'
}).then(() => {
  console.log('✅ Бандл создан: bog/quiz/lib/moment.bundle.js');
  console.log('📦 Размер:', require('fs').statSync(path.join(__dirname, '../lib/moment.bundle.js')).size, 'байт');
}).catch((error) => {
  console.error('❌ Ошибка сборки:', error);
  process.exit(1);
});
