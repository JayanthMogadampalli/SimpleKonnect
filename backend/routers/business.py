from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from models.database import get_db  # Adjust if database.py is inside models/
from models import Business
from schemas import BusinessCreate

router = APIRouter()

@router.post("/businesses/")
def create_business(business: BusinessCreate, db: Session = Depends(get_db)):
    new_business = Business(**business.dict())
    db.add(new_business)
    db.commit()
    return {"message": "Business created successfully"}

@router.get("/businesses/")
def get_businesses(db: Session = Depends(get_db)):
    return db.query(Business).all()
