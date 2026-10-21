# React Native 学习应用（Expo SDK 52 + TypeScript + expo-router）

这是一个用于入门学习的 React Native 应用，采用 Expo 托管（Managed）工作流、TypeScript 以及 `expo-router` 路由。界面与文档均为中文，包含常用示例：

- 首页：学习清单
- 组件演示：Text、Button、Image、Switch 等
- 状态与 Hooks：`useState` / `useEffect`
- 列表与详情：`FlatList` 列表，点击进入详情
- 导航与路由演示：Tabs、Stack、`Link`、`router.push`
- 本地存储：使用 `@react-native-async-storage/async-storage` 的简易记事本

## 运行环境

- Expo SDK 52（便于使用 Play 商店的 Expo Go 打开）
- React Native 0.76
- TypeScript

## 快速开始

```bash
npm install
npx expo start
```

启动后，按提示使用：
- 在 Android 上用 Expo Go 扫码运行；
- 在 Web 上可直接打开浏览器；
- 在 iOS（需 macOS）可用模拟器运行，或通过 Expo Go 体验。

## 主要技术点

- Expo（Managed Workflow）
- `expo-router` 文件式路由（`app/` 目录）
- TypeScript 类型支持
- 跨平台 UI（Android / iOS / Web）

## 项目结构（节选）

```
app/
  _layout.tsx          # 根路由布局（Stack）
  (tabs)/              # 底部标签页
    _layout.tsx       # Tabs 配置：包含“首页”、“组件”
    index.tsx         # 首页（学习清单）
    two.tsx           # 组件演示
  state.tsx           # 状态与 Hooks 示例
  nav.tsx             # 导航与路由演示
  storage.tsx         # AsyncStorage 本地存储示例
  list/
    index.tsx         # 列表页（FlatList）
    [id].tsx          # 详情页
assets/               # 应用图标、启动图等资源
```

## 常见问题

- 如果安装依赖时出现对齐警告，确保 `package.json` 中 Expo 相关依赖处于 SDK 52 推荐范围，然后重新安装。
- 本示例仅用于学习演示，请勿在生产项目中直接使用。

祝学习顺利！

