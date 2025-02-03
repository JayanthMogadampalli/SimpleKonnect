from fastapi import FastAPI
from database.database import engine, Base
from routers import auth, business, product

app = FastAPI()

# Create database tables
Base.metadata.create_all(bind=engine)

# Include routers
app.include_router(auth.router, prefix="/auth", tags=["Authentication"])
app.include_router(business.router, prefix="/businesses", tags=["Businesses"])
app.include_router(product.router, prefix="/products", tags=["Products"])

@app.get("/")
def home():
    return {"message": "Welcome to SimpleKonnect API"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)

