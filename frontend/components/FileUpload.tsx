"use client";

import { useState } from "react";
import api from "@/services/api";

export default function FileUpload() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any>(null);

  async function uploadFile(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.files?.length) return;

    const formData = new FormData();
    formData.append("file", e.target.files[0]);

    setLoading(true);

    try {
      const res = await api.post("/upload", formData);

      setData(res.data);

    } catch (err) {
      alert("Upload Failed");
      console.error(err);
    }

    setLoading(false);
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">

      <h2 className="text-2xl font-bold">
        Upload Business Dataset
      </h2>

      <input
        type="file"
        accept=".csv,.xlsx"
        onChange={uploadFile}
        className="mt-6"
      />

      {loading && (
        <p className="mt-5">
          Uploading...
        </p>
      )}

      {data && (

        <div className="mt-8">

          <h3 className="font-bold text-xl">
            Dataset Summary
          </h3>

          <p className="mt-2">
            Rows : {data.rows}
          </p>

          <p>
            Columns : {data.columns.join(", ")}
          </p>

        </div>

      )}

    </div>
  );
}