from utils.security import hash_password, verify_password, create_access_token
from sqlalchemy.orm import Session
from models import User

def register_user(email: str, password: str, db: Session):
    hashed_password = hash_password(password)
    new_user = User(email=email, password=hashed_password)
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return new_user

def authenticate_user(email: str, password: str, db: Session):
    user = db.query(User).filter(User.email == email).first()
    if user and verify_password(password, user.password):
        return create_access_token({"sub": user.email})
    return None
