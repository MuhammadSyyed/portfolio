from fastapi import FastAPI, UploadFile, File, Form
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse, JSONResponse,HTMLResponse
import uvicorn
import os

app = FastAPI()
app.mount("/static", StaticFiles(directory="static"), name="static")

@app.get("/",response_class=HTMLResponse)
async def get_portfolio():
    return HTMLResponse(content=open('./static/portfolio.html').read())

@app.post("/contact")
async def contact(name: str = Form(...), email: str = Form(...), message: str = Form(...)):
    return {"status": "success", "message": "Contact form submitted."}

@app.get("/download")
async def download_cv():
    cv_path = "static/CV - Imran Abbas.pdf"
    return FileResponse(cv_path, media_type='application/pdf', filename="cv_imran.pdf")


if __name__ == "__main__":
    port = int(os.environ.get("PORT", 8000))
    uvicorn.run("app:app", host="0.0.0.0", port=port)