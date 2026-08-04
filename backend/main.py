from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd

app = FastAPI(title="InsightPilot AI API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {"message": "InsightPilot AI Backend Running"}

@app.post("/upload")
async def upload_csv(file: UploadFile = File(...)):
    df = pd.read_csv(file.file)

    revenue = float(df["Revenue"].sum()) if "Revenue" in df.columns else 0
    sales = int(df["Sales"].sum()) if "Sales" in df.columns else 0
    customers = int(df["Customers"].sum()) if "Customers" in df.columns else 0
    profit = float(df["Profit"].sum()) if "Profit" in df.columns else 0

    return {
        "revenue": revenue,
        "sales": sales,
        "customers": customers,
        "profit": profit,
    }