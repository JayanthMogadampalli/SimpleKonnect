from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import auth, product  # Import the authentication and product APIs
from database import init_db

# Initialize the database
init_db()

app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routes
app.include_router(auth.router, prefix="/auth")
app.include_router(product.router)

@app.get("/")
def home():
    return {"message": "Welcome to SimpleKonnect Backend"}
