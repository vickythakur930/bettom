# Betrix Sportsbook — Production Decoupled Architecture

Professional, decoupled web application architecture separating the **Frontend** client (Next.js) and **Backend** API server (Express + TypeScript + Prisma).

---

## 🏗️ Architecture Overview

```
project-root/
│
├── frontend/                 # Decoupled Client Application (Port 3000)
│   ├── src/
│   │   ├── api/             # Centralized API Service Layer
│   │   ├── app/             # Next.js Pages & UI Routing (No API routes)
│   │   ├── components/      # UI Components (Presets, Tailwind CSS)
│   │   ├── hooks/           # Custom React Hooks
│   │   ├── store/           # Zustand State Management
│   │   ├── types/           # TypeScript Types & Interfaces
│   │   └── utils/
│   ├── package.json
│   ├── .env                 # NEXT_PUBLIC_API_URL=http://localhost:5000/api
│   └── .env.example
│
├── backend/                  # Decoupled API Server (Port 5000)
│   ├── src/
│   │   ├── config/          # CORS & Prisma DB Client Instance
│   │   ├── controllers/     # Auth, User, Wallet, Bets Controllers
│   │   ├── middleware/      # Authentication & Error Middleware
│   │   ├── routes/          # Express Routers
│   │   ├── utils/           # JWT & Password Security Utilities
│   │   └── server.ts        # Express Application Entry Point
│   ├── prisma/
│   │   ├── schema.prisma    # Database Schema Definitions
│   │   └── dev.db           # SQLite Database Storage
│   ├── package.json
│   ├── .env                 # PORT=5000, DATABASE_URL, JWT_SECRET, FRONTEND_URL
│   └── .env.example
│
├── README.md
└── .gitignore
```

---

## 🚀 Quick Start Guide

### 1. Backend Setup & Startup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Generate Prisma client
npm run prisma:generate

# Start backend server in development mode
npm run dev
```

> **Backend API URL**: `http://localhost:5000`

---

### 2. Frontend Setup & Startup

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start Next.js frontend development server
npm run dev
```

> **Frontend Application URL**: `http://localhost:3000`

---

## 🔑 Environment Configuration

### Frontend (`frontend/.env`)
```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

### Backend (`backend/.env`)
```env
PORT=5000
DATABASE_URL="file:./dev.db"
JWT_SECRET="betrix-super-secret-jwt-key-2026-production-ready"
FRONTEND_URL="http://localhost:3000"
NODE_ENV="development"
```

---

## 📡 Backend API Reference Specification

### 🔐 Authentication Endpoints (`/api/auth`)

| Method | Endpoint | Auth Required | Description |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/auth/me` | No (Cookie/Bearer) | Resolves currently authenticated user & session transactions. |
| `POST` | `/api/auth/register` | No | Creates a new user record in DB, issues HTTP-only JWT cookie. |
| `POST` | `/api/auth/login` | No | Verifies user credentials from DB, issues HTTP-only JWT cookie. |
| `POST` | `/api/auth/logout` | No | Clears authentication cookie. |

### 👤 User Profile Endpoints (`/api/user`)

| Method | Endpoint | Auth Required | Description |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/user/profile` | Yes | Retrieves authenticated user profile details. |
| `PUT` | `/api/user/profile` | Yes | Updates profile fields (firstName, lastName, avatar). |

### 💳 Wallet & Transactions Endpoints (`/api/wallet`)

| Method | Endpoint | Auth Required | Description |
| :--- | :--- | :--- | :--- |
| `POST` | `/api/wallet/deposit` | Yes | Deposits funds, creates deposit transaction. |
| `POST` | `/api/wallet/withdraw` | Yes | Withdraws funds, creates withdrawal transaction. |
| `GET` | `/api/wallet/transactions` | Yes | Retrieves user transaction history. |

### 🎲 Sportsbook & Betting Endpoints (`/api/bets`)

| Method | Endpoint | Auth Required | Description |
| :--- | :--- | :--- | :--- |
| `POST` | `/api/bets/place` | Yes | Places single/accumulator bet tickets atomically in DB. |
| `GET` | `/api/bets/my-bets` | No | Fetches user's placed sports bets. |
| `POST` | `/api/bets/cashout` | Yes | Processes early cashout ticket payout. |

---

## 🔒 Security Principles

- **No Shared Code or Database Access in Frontend**: Frontend operates purely as an API client.
- **HTTP-Only Cookies**: Authentication token `betrix_token` is stored as an HTTP-only, SameSite-Lax cookie.
- **CORS Protection**: Restricted strictly to `FRONTEND_URL` (`http://localhost:3000`).
- **Secrets Management**: All secrets (`JWT_SECRET`, `DATABASE_URL`) reside exclusively in `backend/.env`.
