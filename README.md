# 📝 Tasky – Simple Task Management Suite

**Tasky** is a professional-grade task management application built with **Next.js 15 (App Router)**.  
It is designed to deliver a **high-performance, accessible, and fully localized** experience for managing daily tasks.

With a strong focus on **UI/UX excellence**, Tasky supports a complete **bidirectional (RTL / LTR)** layout system and **persistent global state management**.

---

## 🌟 Key Features

### 🌍 Full Internationalization (i18n)
- Seamless language switching between **Persian (RTL)** and **English (LTR)**
- Entire layout adapts dynamically, including:
  - Sidebars
  - Tables
  - Typography direction

### 🌓 Adaptive Theming
- Premium **Dark / Light mode**
- Powered by **next-themes**
- Fully integrated with **Tailwind CSS** color tokens

### 💾 Persistent State
- Built with **Redux Toolkit** + **Redux Persist**
- Automatically preserves:
  - Tasks
  - Language preference
  - Theme selection  
  even after refresh or browser restart

### 🔒 Smart Middleware Protection
- Custom **Next.js Middleware**
- Acts as a security proxy
- Protects private routes like:
  - `/account`
  - `/history`
  - `/`
- Prevents unauthenticated access

### 📊 Interactive Data Tables
Powered by **TanStack Table**, featuring:
- Dynamic column rendering based on active language
- Task status toggling with automatic re-sorting  
  (completed tasks move to the bottom)
- Fully responsive on mobile and desktop

### ⚡ Optimized Performance
- Uses **Next.js 15** optimizations:
  - Automatic font optimization
  - Image optimization
  - Efficient server-side rendering logic

---

## 🚀 Tech Stack

### Core Framework
- **Next.js 16 (App Router)** – Production-grade React framework
- **TypeScript** – Type-safe, scalable architecture

### State Management
- **Redux Toolkit** – Centralized global state
- **Redux Persist** – State synchronization with `localStorage`

### UI & Styling
- **Tailwind CSS** – Utility-first styling
- **shadcn/ui** – Accessible UI components (Radix UI)
- **Lucide React** – Modern icon set
- **Framer Motion** – Smooth animations & transitions

### Tools & Utilities
- **TanStack Table** – Headless table logic
- **next-themes** – Theme management for Next.js
- **js-cookie** – Cookie handling for middleware-based auth

---

## 📸 Screenshots

### 🌐 Language & Theme Preview
<div align="center" width="100%">
  <img alt="App Screenshot" src="https://github.com/AlirezaARBAlpha/Tasky/blob/master/screenshot/account-dark-theme.png" width=25% height=25%>
  <img alt="App Screenshot" src="https://github.com/AlirezaARBAlpha/Tasky/blob/master/screenshot/add-task.png" width=25% height=25%>
  <img alt="App Screenshot" src="https://github.com/AlirezaARBAlpha/Tasky/blob/master/screenshot/dark-theme.png" width=25% height=25%>
  <img alt="App Screenshot" src="https://github.com/AlirezaARBAlpha/Tasky/blob/master/screenshot/fa-accountpage.png" width=25% height=25%>
  <img alt="App Screenshot" src="https://github.com/AlirezaARBAlpha/Tasky/blob/master/screenshot/fa-rtl.png" width=25% height=25%>
  <img alt="App Screenshot" src="https://github.com/AlirezaARBAlpha/Tasky/blob/master/screenshot/lock-task.png" width=25% height=25%>
  <img alt="App Screenshot" src="https://github.com/AlirezaARBAlpha/Tasky/blob/master/screenshot/login.png" width=25% height=25%>
  <img alt="App Screenshot" src="https://github.com/AlirezaARBAlpha/Tasky/blob/master/screenshot/unlock-task.png" width=25% height=25%>
</div>

---

## 🏗 Project Structure

```txt
src/
├── app/              # Next.js App Router (Pages, Layouts, Middleware)
├── components/       # Reusable UI & Business Logic Components
│   ├── auth/         # Login dialogs & route protection
│   ├── ui/           # Base shadcn/ui components
│   └── data-table/   # Table logic, columns & rendering
├── hooks/            # Custom hooks (useTranslation, useAppDispatch, ...)
├── lib/              # Redux store, slices & persist config
├── locales/          # Localization dictionaries (fa.ts, en.ts)
└── types/            # Shared TypeScript types & interfaces
```
## 🛠 Installation & Setup
1.Clone the repository:
```
git clone [https://github.com/your-username/tasky.git](https://github.com/AlirezaARBAlpha/tasky.git)
cd tasky
```
2.Install dependencies:
```
npm install
```

3.Run the development server:
```
npm run dev
```

4.Build for production:
```
npm run build
```

## 👨‍💻 Developer
Developed with passion by Alireza Borzouei.

GitHub: @AlirezaARBAlpha

LinkedIn: [Profile](https://www.linkedin.com/in/alireza-borzouei/)

Tasky - Organize your life, one task at a time.
