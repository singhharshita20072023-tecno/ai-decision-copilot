"use client";

import CountUp from "react-countup";
import { motion } from "framer-motion";

type KPICardProps = {
  title: string;
  value: number;
  icon: React.ReactNode;
  color: string;
};

export default function KPICard({
  title,
  value,
  icon,
  color,
}: KPICardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      className="bg-white rounded-2xl shadow-lg p-6"
    >
      <div className="flex justify-between items-center">

        <div>

          <p className="text-gray-500">
            {title}
          </p>

          <h2 className="text-4xl font-bold mt-3">

            <CountUp
              end={value}
              duration={2}
              separator=","
            />

          </h2>

        </div>

        <div
          className={`text-white text-3xl p-4 rounded-xl ${color}`}
        >
          {icon}
        </div>

      </div>
    </motion.div>
  );
}
