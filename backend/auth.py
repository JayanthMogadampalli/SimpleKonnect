from fastapi import APIRouter, Depends, HTTPException, status
from pydantic import BaseModel
from passlib.context import CryptContext
from jose import jwt, JWTError
from datetime import datetime, timedelta

# Secret Key for JWT
SECRET_KEY = "mysecretkey"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30

# Password Hashing
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

# Router
router = APIRouter()

# User Database (Temporary)
fake_users_db = {}

# User Model
class User(BaseModel):
    email: str
    password: str

# Hash Password
def hash_password(password: str):
    return pwd_context.hash(password)

# Verify Password
def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)

# Create JWT Token
def create_access_token(data: dict):
    to_encode = data.copy()
    expire = datetime.utcnow() + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    to_encode.update({"exp": expire})
    return jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)

# Signup Route
@router.post("/signup")
def signup(user: User):
    if user.email in fake_users_db:
        raise HTTPException(status_code=400, detail="Email already registered")
    
    hashed_password = hash_password(user.password)
    fake_users_db[user.email] = {"password": hashed_password}
    
    return {"message": "User registered successfully"}

# Login Route
@router.post("/login")
def login(user: User):
    if user.email not in fake_users_db:
        raise HTTPException(status_code=400, detail="Invalid credentials")
    
    stored_password = fake_users_db[user.email]["password"]
    if not verify_password(user.password, stored_password):
        raise HTTPException(status_code=400, detail="Invalid credentials")
    
    access_token = create_access_token({"sub": user.email})
    
    return {"access_token": access_token, "token_type": "bearer"}
