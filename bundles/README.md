# NPM Bundles для bog/quiz

Универсальная система предсборки NPM библиотек для использования в MAM проектах.

## Установленные библиотеки

- **axios** (54 KB) - HTTP клиент для запросов к API
- **lodash** (71 KB) - Утилиты для работы с массивами, объектами и строками
- **moment** (58 KB) - Работа с датами и временем

**Общий размер:** 183 KB

## Использование

В любом компоненте bog/quiz:

```typescript
@$mol_mem
my_method() {
    // Lodash
    const _ = this.$.$bog_quiz_lib.lodash()
    const shuffled = _.shuffle([1, 2, 3, 4, 5])
    const unique = _.uniq([1, 2, 2, 3, 3])

    // Moment.js
    const moment = this.$.$bog_quiz_lib.moment()
    const now = moment().format('DD.MM.YYYY HH:mm:ss')
    const relative = moment().subtract(1, 'day').fromNow()
}
```

## Добавление новой библиотеки

### 1. Добавить зависимость

```bash
cd bog/quiz/bundles
npm install library-name
```

### 2. Обновить package.json

```json
{
	"dependencies": {
		"library-name": "^1.0.0"
	}
}
```

### 3. Добавить в build-all.js

```javascript
const libraries = [
	// ... существующие
	{
		name: 'library-name',
		entryPoint: 'node_modules/library-name/dist/index.js',
		globalName: 'LibraryName',
		description: 'Описание библиотеки',
	},
]
```

### 4. Собрать бандл

```bash
npm run build
```

### 5. Добавить метод в lib.ts

```typescript
export class $bog_quiz_lib extends $mol_object2 {
	@$mol_mem
	static library_name() {
		$mol_import.script('bog/quiz/lib/library-name.bundle.js')
		return (globalThis as any).LibraryName as typeof import('library-name')
	}
}
```

### 6. Использовать

```typescript
const lib = this.$.$bog_quiz_lib.library_name()
```

## Команды

```bash
# Собрать все бандлы
npm run build

# Собрать конкретную библиотеку
npm run build:lodash
npm run build:moment

# Установить зависимости
npm install
```

## Структура

```
bog/quiz/
  bundles/          # Конфигурация сборки
    package.json    # Зависимости
    build-all.js    # Универсальный скрипт сборки
    build-*.js      # Скрипты для отдельных библиотек
    node_modules/   # NPM пакеты
  lib/              # Готовые бандлы
    lib.ts          # Универсальный модуль доступа
    *.bundle.js     # Собранные бандлы
```

## Особенности

- ✅ Полная типизация через TypeScript
- ✅ Единая точка доступа через `$bog_quiz_lib`
- ✅ Минификация и оптимизация
- ✅ Автоматическая сборка всех библиотек
- ✅ Работает оффлайн
- ✅ Не нужно создавать отдельные файлы для каждой библиотеки
