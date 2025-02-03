def format_response(data, message="Success"):
    return {"message": message, "data": data}

def validate_email(email: str):
    import re
    email_regex = r"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$"
    return bool(re.match(email_regex, email))
