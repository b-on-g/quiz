# BOG Quiz - Desktop App

Quiz application built with $mol and Giper Baza, wrapped in Tauri for desktop deployment.

## Development

```bash
# Install dependencies (first time only)
npm install

# Run in development mode
cd bog/quiz
npx tauri dev
```

## Building

```bash
# Build desktop app for current platform
cd bog/quiz
npx tauri build
```

The built application will be in `src-tauri/target/release/bundle/`.

## CI/CD

For automated builds on Windows/macOS/Linux, use GitHub Actions with `tauri-apps/tauri-action`:

```yaml
- uses: tauri-apps/tauri-action@v0
  with:
    projectPath: bog/quiz
```

## Architecture

- **Frontend**: $mol framework with Giper Baza CRDT database
- **Desktop**: Tauri v2 (Rust + WebView)
- **Build**: MAM build system

## Sync Server

Default sync server: `https://crus.hd4.ru/`

Configure in `quiz.view.ts` → `yard_masters()` method.
