from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from database import get_db
from models import Product
from schemas import ProductCreate

router = APIRouter()

@router.post("/products/")
def create_product(product: ProductCreate, db: Session = Depends(get_db)):
    new_product = Product(**product.dict())
    db.add(new_product)
    db.commit()
    return {"message": "Product added successfully"}

@router.get("/products/")
def get_products(db: Session = Depends(get_db)):
    return db.query(Product).all()
