# Bundles для Quiz проекта

Эта папка содержит конфигурацию для предсборки NPM пакетов в бандлы для MAM.

## Быстрый старт

### Собрать все бандлы

```bash
cd bundles
npm install
npm run build:all
```

### Собрать конкретный бандл

```bash
npm run build:moment
```

## Добавление новой библиотеки

### 1. Добавь зависимость

```bash
npm install library-name
```

### 2. Создай скрипт сборки

**build-library.js:**

```javascript
const esbuild = require('esbuild');
const path = require('path');

console.log('🔨 Собираю library-name бандл для MAM...');

esbuild.build({
  entryPoints: ['node_modules/library-name/dist/index.js'],
  bundle: true,
  format: 'iife',
  globalName: 'LibraryName', // Глобальная переменная
  outfile: path.join(__dirname, '../lib/library.bundle.js'),
  minify: true,
  platform: 'browser',
  target: 'es2020'
}).then(() => {
  const stats = require('fs').statSync(path.join(__dirname, '../lib/library.bundle.js'));
  console.log('✅ Бандл создан: lib/library.bundle.js');
  console.log('📦 Размер:', Math.round(stats.size / 1024), 'KB');
}).catch((error) => {
  console.error('❌ Ошибка сборки:', error);
  process.exit(1);
});
```

### 3. Добавь скрипт в package.json

```json
{
  "scripts": {
    "build:library": "node build-library.js"
  }
}
```

### 4. Создай TypeScript обертку

**../lib/library.ts:**

```typescript
namespace $ {
  export class $bog_quiz_lib_library extends $mol_object2 {
    @$mol_mem
    static lib() {
      $mol_import.script('bog/quiz/lib/library.bundle.js')
      return (globalThis as any).LibraryName as typeof import('library-name')
    }
  }
}
```

### 5. Добавь в meta.tree

**../quiz.meta.tree:**

```tree
require \/bog/quiz/lib/library.bundle.js
```

### 6. Используй в коде

```typescript
const lib = this.$.$bog_quiz_lib_library.lib()
```

## Существующие бандлы

- **moment.js** - работа с датами
  - Скрипт: `build-moment.js`
  - Бандл: `../lib/moment.bundle.js`
  - Обертка: `../lib/moment.ts`
  - Использование: `this.$.$bog_quiz_lib_moment.lib()`

## Полная документация

См. `/Users/cmyser/code/mam/NPM_BUNDLE_GUIDE.md`
