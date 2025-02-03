from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from database.database import Base
from models.user import User

class Business(Base):
    __tablename__ = "businesses"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    description = Column(String, nullable=True)
    category = Column(String, nullable=True)
    owner_id = Column(Integer, ForeignKey("users.id"))

    # Relationship with User (Owner)
    owner = relationship("User", back_populates="businesses")

    # Relationship with Products
    products = relationship("Product", back_populates="business")
