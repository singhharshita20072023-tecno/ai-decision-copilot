"use client";

import { useEffect, useState } from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import KPICard from "@/components/KPICard";

import {
  FaDollarSign,
  FaShoppingCart,
  FaUsers,
  FaChartLine,
} from "react-icons/fa";

export default function Home() {
  const [data, setData] = useState({
    revenue: 1250000,
    sales: 920,
    customers: 480,
    profit: 325000,
  });

  useEffect(() => {
    const saved = localStorage.getItem("dashboardData");

    if (saved) {
      setData(JSON.parse(saved));
    }
  }, []);

  return (
    <div className="flex bg-slate-100 min-h-screen">
      <Sidebar />

      <main className="flex-1 p-8">

        <Header />

        <div className="grid grid-cols-4 gap-6 mt-8">

          <KPICard
            title="Revenue"
            value={data.revenue}
            icon={<FaDollarSign />}
            color="bg-green-600"
          />

          <KPICard
            title="Sales"
            value={data.sales}
            icon={<FaShoppingCart />}
            color="bg-blue-600"
          />

          <KPICard
            title="Customers"
            value={data.customers}
            icon={<FaUsers />}
            color="bg-purple-600"
          />

          <KPICard
            title="Profit"
            value={data.profit}
            icon={<FaChartLine />}
            color="bg-orange-600"
          />

        </div>

        <div className="mt-8 bg-white rounded-2xl shadow-lg p-8">

          <h2 className="text-2xl font-bold">
            AI Business Intelligence Dashboard
          </h2>

          <p className="text-gray-600 mt-3">
            Upload a business dataset from the sidebar. The dashboard
            automatically updates after processing the CSV through the FastAPI
            backend.
          </p>

        </div>

      </main>
    </div>
  );
}