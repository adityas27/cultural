import pandas as pd
import sqlite3
from hashlib import sha256


df = pd.read_csv(".\students.csv", header=None, names=["moodle_id", "name", "password", "dept", "year"])


conn = sqlite3.connect(".\db.sqlite3")
cursor = conn.cursor()


for _, row in df.iterrows():
    moodle_id = str(row["moodle_id"])
    name = row["name"]
    password = row["password"]  
    hashed_password = sha256(password.encode()).hexdigest()  
    dept = row["dept"]
    year = row["year"]

    cursor.execute(
        "INSERT OR IGNORE INTO api_student (moodle_id, name, password, dept, year) VALUES (?, ?, ?, ?, ?)",
        (moodle_id, name, hashed_password, dept, year),
    )

conn.commit()
conn.close()
print("Data imported successfully!")
