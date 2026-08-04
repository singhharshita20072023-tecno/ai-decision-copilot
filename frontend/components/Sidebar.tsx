"use client";

import Link from "next/link";
import {
  FaChartPie,
  FaUpload,
  FaRobot,
  FaChartLine,
  FaFileAlt,
  FaCog,
} from "react-icons/fa";

const menus = [
  {
    name: "Dashboard",
    href: "/",
    icon: <FaChartPie />,
  },
  {
    name: "Upload Dataset",
    href: "/upload",
    icon: <FaUpload />,
  },
  {
    name: "Analytics",
    href: "/analytics",
    icon: <FaChartLine />,
  },
  {
    name: "AI Copilot",
    href: "/copilot",
    icon: <FaRobot />,
  },
  {
    name: "Forecast",
    href: "/forecast",
    icon: <FaChartLine />,
  },
  {
    name: "Reports",
    href: "/reports",
    icon: <FaFileAlt />,
  },
  {
    name: "Settings",
    href: "/settings",
    icon: <FaCog />,
  },
];

export default function Sidebar() {
  return (
    <aside className="w-72 min-h-screen bg-slate-950 text-white">

      <div className="p-8">

        <h1 className="text-4xl font-bold">
          🚀 InsightPilot
        </h1>

        <p className="text-gray-400 mt-2">
          AI Decision Intelligence
        </p>

      </div>

      <nav className="mt-8">

        {menus.map((menu) => (
          <Link
            key={menu.name}
            href={menu.href}
            className="flex items-center gap-4 px-8 py-5 hover:bg-slate-800 transition"
          >
            <span className="text-xl">{menu.icon}</span>

            <span className="text-lg">
              {menu.name}
            </span>
          </Link>
        ))}

      </nav>

    </aside>
  );
}