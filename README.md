# ColdPackPro - Official B2B Cold Chain Packaging Website

Official export website for **ColdPackPro (广州朗得冷链科技有限公司)**.
Specialized in rigid PCM ice bricks, gel ice packs, water-activated cooling sheets, and VIP insulated cooler boxes for cold chain pharmaceutical, seafood, and food transport.

---

## 🚀 Quick Deployment Guide / 快速上线部署指南

本项目采用标准 Node.js + Express 架构，同时兼具纯静态托管兼容性。以下为您推荐最佳部署方式：

### 方式一：部署到 Render.com 或 Railway（推荐，全功能支持）
> **优势**：免费或低成本，原生支持 Node.js，自动处理表单发送、动态 Excel 下载及静态文件分发。

1. **推送到 GitHub**：
   - 在 GitHub 创建新仓库（如 `coldpackpro-website`）。
   - 在项目根目录执行：
     ```bash
     git remote add origin https://github.com/<你的用户名>/coldpackpro-website.git
     git branch -M main
     git push -u origin main
     ```
2. **连接 Render (render.com)**：
   - 登录 Render，点击 **New +** → **Web Service**。
   - 选择刚刚连接的 GitHub 仓库。
   - 配置项：
     - **Runtime**: `Node`
     - **Build Command**: `npm install`
     - **Start Command**: `node server.js`
   - 点击 **Create Web Service**，几分钟内即可自动生成上线网站，并支持绑定您的独立域名 `coldpackpro.com`！

---

### 方式二：部署到 Netlify（极简，免费全球 CDN）
> 本仓库已内置 `netlify.toml`，自动配置了路由重定向与产品手册下载路径。

1. 登录 [Netlify](https://www.netlify.com/)，选择 **Add new site** → **Import an existing project** → **GitHub**。
2. 选择您的仓库，配置如下：
   - **Publish directory**: `.` （填英文点号，表示网站根目录，切勿填 `dist`）
   - **Build command**: 留空或输入 `npm run build`
3. 点击 **Deploy**，Netlify 将自动识别 `netlify.toml` 完成全站发布与 HTTPS 配置。

---

### 方式三：部署到 Vercel (vercel.com)
> 本仓库已内置 `vercel.json`，自动配置了 Clean URLs。

1. 登录 [Vercel](https://vercel.com/)，点击 **Add New...** → **Project**。
2. 导入 GitHub 仓库，Framework 选 **Other**。
3. 点击 **Deploy** 即可瞬间上线。

---

## 🛠 本地开发与测试

```bash
# 1. 安装依赖
npm install

# 2. 启动本地服务
npm run dev
# 或
node server.js

# 3. 访问网站
# 浏览器打开 http://localhost:3000
```

---

## 📁 核心文件结构

- `index.html`：网站官方首页（含产品矩阵、公司实力、常见问答、在线询盘表单等）
- `catalog.html`：数字产品手册（87+ 款冷排/冰袋型号库、即时检索、规格筛选与下载）
- `assets/`：官方中英文 Excel 规格总表与产品技术白皮书
- `images/`：高清产品图与资质认证原图
- `server.js`：Express 后端服务，处理安全询盘路由与跨域静态托管
- `netlify.toml` & `vercel.json`：云平台自动化部署配置文件
- `.gitignore`：已排除 `node_modules`，防止大文件阻塞 GitHub 上传
