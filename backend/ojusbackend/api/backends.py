from django.contrib.auth import get_user_model
from hashlib import sha256

Student = get_user_model()

class SHA256Backend:
    def authenticate(self, request, username=None, password=None):
        try:
            student = Student.objects.get(moodle_id=username)
        except Student.DoesNotExist:
            return None
        if student.password == sha256(password.encode()).hexdigest():
            return student
        return None

    def get_user(self, user_id):
        try:
            return Student.objects.get(pk=user_id)
        except Student.DoesNotExist:
            return None