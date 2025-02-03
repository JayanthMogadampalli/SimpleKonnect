from pydantic import BaseModel

class BusinessCreate(BaseModel):
    name: str
    owner_id: int
