# BT-App

KDP Project

## 建置與測試 / Build and test

使用 Node.js 22.22.3 或更新版本及 npm 10 或更新版本。本版本使用 Electron 42，請在支援的作業系統上測試。

Use Node.js 22.22.3+ and npm 10+. This version uses Electron 42; test on a supported operating system.

```bash
npm ci
npm run typecheck
npm run build
npm test -- --runInBand
npm start
```

依賴版本由 npm lockfile 固定。測試使用模擬 Firebase 邊界；開發應用程式仍會使用本機配置的 Firebase 專案。開發伺服器只監聽本機。

The npm lockfile pins dependencies. Tests mock Firebase access; the development app still uses its configured Firebase project. The development server listens only on loopback.

```bash
npm audit --audit-level=low
```

macOS 公證使用 `@electron/notarize`，CI 需要 `APPLE_ID`、`APPLE_ID_PASS` 及 `APPLE_TEAM_ID`。請透過 CI secrets 配置，不要提交憑證。發佈前應核對發佈者、目標版本庫及簽署設定。

macOS notarization uses `@electron/notarize` and requires `APPLE_ID`, `APPLE_ID_PASS`, and `APPLE_TEAM_ID` in CI secrets. Verify publisher, repository and signing settings before a release.

## Contribution Guide

Git Workflow: [here](READ_Git.md)
