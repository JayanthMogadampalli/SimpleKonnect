from sqlalchemy.orm import Session
from models import Business
from schemas import BusinessCreate

def create_business(business_data: BusinessCreate, db: Session):
    new_business = Business(**business_data.dict())
    db.add(new_business)
    db.commit()
    db.refresh(new_business)
    return new_business

def get_all_businesses(db: Session):
    return db.query(Business).all()
