# 🚀 InsightPilot AI

### AI-Powered Business Intelligence & Decision Intelligence Platform

InsightPilot AI is a modern business intelligence platform that helps users transform business datasets into meaningful insights through interactive dashboards, analytics, forecasting, and AI-assisted decision support.

The platform allows users to upload a CSV dataset and visualize important business metrics such as revenue, sales, customers, and profit.

## ✨ Features

* 📊 **Interactive Dashboard** — View key business performance indicators in a clean dashboard.
* 📁 **CSV Dataset Upload** — Upload business data directly through the application.
* 📈 **Business Analytics** — Analyze important business metrics and trends.
* 🔮 **Forecasting** — Support future-oriented business analysis and forecasting.
* 🤖 **AI Copilot** — AI-assisted decision intelligence and business insights.
* 📑 **Reports** — Generate and organize business insights for decision-making.
* 🎨 **Premium UI** — Responsive dashboard interface with animated components and modern styling.
* 🔗 **Frontend + Backend Integration** — Next.js frontend connected with a FastAPI backend.

## 🛠️ Technology Stack

### Frontend

* Next.js
* React
* TypeScript
* Tailwind CSS
* Framer Motion
* Recharts
* Axios
* React Icons

### Backend

* Python
* FastAPI
* Uvicorn

### Development & Deployment

* Git & GitHub
* Vercel
* REST API
* CSV-based data processing

## 📂 Project Structure

```text
ai-decision-copilot/
│
├── backend/
│   ├── main.py
│   ├── analytics.py
│   ├── forecast.py
│   ├── ai_service.py
│   └── report.py
│
├── frontend/
│   ├── app/
│   │   ├── page.tsx
│   │   ├── upload/
│   │   ├── analytics/
│   │   ├── forecast/
│   │   ├── copilot/
│   │   ├── reports/
│   │   └── settings/
│   │
│   ├── components/
│   │   ├── Sidebar.tsx
│   │   ├── Header.tsx
│   │   └── KPICard.tsx
│   │
│   ├── services/
│   ├── types/
│   ├── public/
│   ├── package.json
│   └── next.config.ts
│
└── README.md
```

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/singhharshita20072023-tecno/ai-decision-copilot.git
cd ai-decision-copilot
```

## 🎨 Start the Frontend

```bash
cd frontend
npm install
npm run dev
```

Open:

```text
http://localhost:3000
```

If port 3000 is already being used, Next.js may automatically provide another port such as:

```text
http://localhost:3001
```

## 🐍 Start the Backend

Open another terminal:

```bash
cd ai-decision-copilot/backend
```

Activate the virtual environment on Windows:

```powershell
.\venv\Scripts\activate
```

Then start FastAPI:

```bash
uvicorn main:app --reload
```

The backend will normally run at:

```text
http://127.0.0.1:8000
```

## 📁 Uploading Data

1. Open the InsightPilot dashboard.
2. Select **Upload Dataset**.
3. Choose a CSV file containing business data.
4. The application sends the dataset to the FastAPI backend.
5. Processed information is stored for dashboard use.
6. Return to the dashboard to view the resulting business metrics.

Example business fields can include:

```text
Revenue
Sales
Customers
Profit
Date
```

## 📊 Dashboard

The dashboard provides a centralized view of important business KPIs, including:

* Revenue
* Sales
* Customers
* Profit

The goal is to make business performance easier to understand without manually analyzing raw datasets.

## 🤖 AI Decision Intelligence

InsightPilot AI is designed around the idea of combining traditional business intelligence with AI-assisted decision support.

Instead of only displaying raw numbers, the platform can be extended to provide:

* Business insights
* Trend analysis
* Forecasts
* Recommendations
* Natural-language questions
* AI-generated reports

## 🎯 Project Objective

The main objective of InsightPilot AI is to create an accessible decision-intelligence platform where businesses can upload their data and quickly move from **raw data → analytics → insights → decisions**.

## 🔮 Future Improvements

Possible future improvements include:

* Real-time database integration
* Advanced machine-learning forecasting
* More AI models
* Natural-language data querying
* Automated anomaly detection
* Automated report generation
* User authentication
* Cloud data storage
* Role-based dashboards
* Advanced business recommendations

## 💡 Development Approach

This project was developed using a **vibe-coding approach**, where AI tools were used to assist with code generation, UI development, debugging, feature implementation, and iteration while the project requirements and product direction were defined by the developer.

## 👩‍💻 Author

**Harshita Singh**

AI Decision Intelligence / Business Intelligence Project

---

### ⭐ Project Summary

**InsightPilot AI is an AI-powered business intelligence platform that converts uploaded business data into interactive dashboards, analytics, forecasts, and AI-assisted decision insights.**
