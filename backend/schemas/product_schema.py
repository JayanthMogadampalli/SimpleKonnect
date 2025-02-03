from pydantic import BaseModel

class ProductBase(BaseModel):
    name: str
    description: str
    price: float

class ProductCreate(ProductBase):
    business_id: int

class ProductResponse(ProductBase):
    id: int
