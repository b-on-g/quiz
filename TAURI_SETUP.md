# Tauri Desktop App для Quiz

## Локальная разработка (однократная настройка)

### 1. Установка prerequisites

#### macOS
```bash
xcode-select --install
# или установите полный Xcode из App Store
```

#### Windows
1. Установите [Microsoft Visual Studio C++ Build Tools](https://visualstudio.microsoft.com/visual-cpp-build-tools/)
   - Выберите "Desktop development with C++"
2. Установите [Edge WebView2](https://developer.microsoft.com/en-us/microsoft-edge/webview2/)

#### Linux (Debian/Ubuntu)
```bash
sudo apt-get update
sudo apt-get install -y \
  libwebkit2gtk-4.1-dev \
  libappindicator3-dev \
  librsvg2-dev \
  patchelf \
  build-essential \
  curl \
  wget \
  file \
  libssl-dev \
  libgtk-3-dev \
  squashfs-tools
```

### 2. Установка Rust

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
source $HOME/.cargo/env
```

### 3. Установка зависимостей проекта (из корня mam)

```bash
cd /Users/cmyser/code/mam
npm install
```

## Разработка

### Запуск dev-сервера $mol (из корня mam)

```bash
cd /Users/cmyser/code/mam
npm start bog/quiz
```

Приложение будет доступно на `http://localhost:9080/bog/quiz/`

### Запуск Tauri в dev-режиме

В отдельном терминале:

```bash
cd /Users/cmyser/code/mam/bog/quiz
npx tauri dev
```

Это откроет нативное окно с hot-reload.

## Сборка production

### 1. Сначала соберите $mol бандл (из корня mam)

```bash
cd /Users/cmyser/code/mam
npm start bog/quiz
# Дождитесь сборки, затем Ctrl+C
```

### 2. Соберите Tauri приложение

```bash
cd /Users/cmyser/code/mam/bog/quiz
npx tauri build
```

Готовые инсталляторы будут в `src-tauri/target/release/bundle/`:
- **macOS**: `.dmg` и `.app`
- **Windows**: `.msi` и `.exe`
- **Linux**: `.deb`, `.AppImage`, `.rpm`

## CI/CD через GitHub Actions

Workflow `.github/workflows/tauri_publish.yml` автоматически:

1. **Собирает веб-бандл** через `hyoo-ru/mam_build@master2`
   - Бандл сохраняется в `bog/quiz/-`
2. **Билдит Tauri** для всех платформ в matrix:
   - Ubuntu 22.04 → Linux (.deb, .AppImage)
   - Windows Latest → Windows (.msi)
   - macOS Latest → macOS ARM64 (.dmg)
   - macOS Latest → macOS x86_64 (.dmg)
3. **Публикует релиз** с артефактами

### Триггеры

- **Push в master** - собирает приложение
- **Push тега `v*`** - создаёт production release
- **Ручной запуск** через GitHub Actions UI

### Создание релиза

```bash
git tag v0.1.0
git push origin v0.1.0
```

GitHub Actions автоматически соберёт и опубликует релиз.

## Структура проекта

```
mam/
├── bog/quiz/              # $mol приложение
│   ├── -/                # Собранный веб-бандл (используется Tauri)
│   ├── src-tauri/        # Tauri конфигурация
│   │   ├── tauri.conf.json
│   │   ├── Cargo.toml
│   │   ├── src/
│   │   └── icons/
│   └── ...
├── .github/
│   └── workflows/
│       └── tauri_publish.yml
└── package.json
```

## Конфигурация Tauri

### tauri.conf.json

```json
{
  "build": {
    "frontendDist": "../-",  // Путь к собранному $mol бандлу (относительно src-tauri)
    "devUrl": "http://localhost:9080/bog/quiz/"
  }
}
```

### Важно для $mol

- `beforeDevCommand` и `beforeBuildCommand` пустые - MAM билдит отдельно
- `frontendDist` указывает на `../-` (bog/quiz/-)
- В dev-режиме Tauri подключается к MAM dev-серверу на порту 9080
- Запускать команды нужно из `bog/quiz`, а не из корня

## Отладка

### Проверка конфигурации

```bash
cd bog/quiz
npx tauri info
```

### Логи сборки

```bash
cd bog/quiz
npx tauri build --verbose
```

### DevTools в Tauri

В dev-режиме нажмите `Cmd+Option+I` (macOS) или `Ctrl+Shift+I` (Windows/Linux)

## Troubleshooting

### macOS: "App can't be opened"

```bash
cd bog/quiz
xattr -cr src-tauri/target/release/bundle/macos/Quiz\ App.app
```

### Linux: Missing dependencies

```bash
sudo apt-get install -y libwebkit2gtk-4.1-dev
```

### Windows: MSVC not found

Установите Visual Studio Build Tools с "Desktop development with C++"

### Ошибка "frontendDist not found"

Убедитесь, что сначала собрали $mol бандл:
```bash
cd /Users/cmyser/code/mam
npm start bog/quiz
```

## Полезные команды

```bash
# Информация о системе (из bog/quiz)
cd bog/quiz
npx tauri info

# Проверка Rust toolchain
rustc --version
cargo --version

# Очистка кеша сборки
cd bog/quiz/src-tauri
cargo clean

# Сборка только для текущей платформы
cd bog/quiz
npx tauri build

# Сборка для конкретной цели (macOS)
npx tauri build --target aarch64-apple-darwin
npx tauri build --target x86_64-apple-darwin
```

## Быстрый старт

```bash
# 1. Установите prerequisites (см. выше)

# 2. Установите зависимости
cd /Users/cmyser/code/mam
npm install

# 3. Запустите dev-сервер в одном терминале
npm start bog/quiz

# 4. В другом терминале запустите Tauri
cd bog/quiz
npx tauri dev
```
