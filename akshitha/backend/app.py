from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from scraping.event_scraper import scrape_events

app = FastAPI()

# CORS middleware for frontend access
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

class EmailData(BaseModel):
    email: str

@app.get("/events")
def get_events():
    events = scrape_events()
    return events

emails = []

@app.post("/save-email")
def save_email(email_data: EmailData):
    emails.append(email_data.email)
    print(f"Collected email: {email_data.email}")
    return {"message": "Email saved"}
