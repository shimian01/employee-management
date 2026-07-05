# Tlias 智能学习辅助系统 — 员工信息管理

一个基于 **Vue 3 + Axios + json-server** 的员工信息增删改查（CRUD）前端小项目。

## 技术栈

- **前端**：Vue 3（CDN ESM）+ Axios
- **后端**：json-server（RESTful API）
- **数据**：`db.json` 本地 JSON 文件持久化

## 项目结构

```
├── 智能学习辅助系统-员工信息界面（异步交互）.html   # 主页面
├── demo.js                       # Vue 3 应用逻辑（CRUD）
├── style.css                     # 样式
├── db.json                       # json-server 数据文件
└── README.md                     # 本文件
```

## 快速启动

### 1. 启动后端（json-server）

确保已安装 `json-server`：

```bash
npm install -g json-server
```

在项目目录下启动：

```bash
npx json-server --watch db.json --port 3000
```

接口位于 `http://localhost:3000/employees`。

### 2. 启动前端

直接用浏览器打开 `智能学习辅助系统-员工信息界面（异步交互）.html` 即可。

> 因存在跨域请求，建议用 **Live Server**（VS Code 插件）或任意静态服务器打开 HTML。

## 功能说明

| 操作 | 方式 | API 调用 |
|------|------|---------|
| **列表查询** | 支持按姓名/性别/职位筛选 | `GET /employees?name=&gender=&job=` |
| **添加员工** | 点击「添加员工信息」，默认填充占位值 | `POST /employees` |
| **修改员工** | 点击「修改」，依次弹出 prompt 输入框 | `PUT /employees/:id` |
| **删除员工** | 点击「删除」，确认后移除 | `DELETE /employees/:id` |

## 注意

该项目为学习 Vue 3 异步交互的练习 demo，所有数据存储在本地的 `db.json` 中，**无登录鉴权**，不适用于生产环境。
