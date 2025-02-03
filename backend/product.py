from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from pydantic import BaseModel
from database import SessionLocal, Product

router = APIRouter()

# Dependency to get DB session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# Define a Pydantic Model for Product Creation
class ProductCreate(BaseModel):
    name: str
    description: str
    price: float
    category: str

# Define a Pydantic Model for Product Update (Optional Fields)
class ProductUpdate(BaseModel):
    name: str | None = None
    description: str | None = None
    price: float | None = None
    category: str | None = None

# ✅ 1. Create a Product
@router.post("/products", response_model=ProductCreate)
def create_product(product: ProductCreate, db: Session = Depends(get_db)):
    new_product = Product(
        name=product.name,
        description=product.description,
        price=product.price,
        category=product.category
    )
    db.add(new_product)
    db.commit()
    db.refresh(new_product)
    return new_product

# ✅ 2. Get All Products
@router.get("/products")
def get_products(db: Session = Depends(get_db)):
    return db.query(Product).all()

# ✅ 3. Get a Single Product by ID
@router.get("/products/{product_id}")
def get_product(product_id: int, db: Session = Depends(get_db)):
    product = db.query(Product).filter(Product.id == product_id).first()
    if not product:
        raise HTTPException(status_code=404, detail="Product not found")
    return product

# ✅ 4. Update a Product
@router.put("/products/{product_id}")
def update_product(product_id: int, product_data: ProductUpdate, db: Session = Depends(get_db)):
    product = db.query(Product).filter(Product.id == product_id).first()
    if not product:
        raise HTTPException(status_code=404, detail="Product not found")

    if product_data.name:
        product.name = product_data.name
    if product_data.description:
        product.description = product_data.description
    if product_data.price:
        product.price = product_data.price
    if product_data.category:
        product.category = product_data.category

    db.commit()
    return {"message": "Product updated successfully"}

# ✅ 5. Delete a Product
@router.delete("/products/{product_id}")
def delete_product(product_id: int, db: Session = Depends(get_db)):
    product = db.query(Product).filter(Product.id == product_id).first()
    if not product:
        raise HTTPException(status_code=404, detail="Product not found")

    db.delete(product)
    db.commit()
    return {"message": "Product deleted successfully"}
