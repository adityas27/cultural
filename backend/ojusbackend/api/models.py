from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager

class StudentManager(BaseUserManager):
    def create_user(self, moodle_id, password=None, **extra_fields):
        if not moodle_id:
            raise ValueError('The Moodle ID must be set')
        user = self.model(moodle_id=moodle_id, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, moodle_id, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        return self.create_user(moodle_id, password, **extra_fields)

class Student(AbstractBaseUser):
    moodle_id = models.CharField(max_length=20, unique=True)
    name = models.CharField(max_length=100)
    password = models.CharField(max_length=64)  # Ensure this matches your existing SHA256 hashes
    dept = models.CharField(max_length=50)
    year = models.CharField(max_length=10)

    USERNAME_FIELD = 'moodle_id'
    REQUIRED_FIELDS = ['name', 'dept', 'year']

    objects = StudentManager()

    def __str__(self):
        return self.name