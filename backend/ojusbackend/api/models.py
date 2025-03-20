from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
import random

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
    password = models.CharField(max_length=64)  
    dept = models.CharField(max_length=50)
    year = models.CharField(max_length=10)
    email = models.EmailField(null=True, blank=True)
    phone_no = models.CharField(max_length=15, null=True, blank=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    g_reg = models.BooleanField(default=False)
    g_att = models.BooleanField(default=False)
    USERNAME_FIELD = 'moodle_id'
    REQUIRED_FIELDS = ['name', 'dept', 'year']

    objects = StudentManager()

    def __str__(self):
        return self.name
    
class Event(models.Model):
    name = models.CharField(max_length=100)
    date = models.DateTimeField()
    venue = models.CharField(max_length =100)
    time = models.CharField(max_length=25)
    heads = models.CharField(max_length= 100)
    phone_no = models.CharField(max_length=100)
    category = models.CharField(max_length=25)
    description = models.TextField()


class EventRegistration(models.Model):
    student = models.ForeignKey(Student, on_delete=models.CASCADE)
    event = models.ForeignKey(Event, on_delete=models.CASCADE)
    registration_date = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ('student', 'event') 


def generate_team_id():
    return random.randint(10000, 99999)

class Team(models.Model):
    team_name = models.CharField(max_length=255)
    team_id = models.PositiveIntegerField(unique=True, default=generate_team_id, editable=False, primary_key=True)
    leader = models.ForeignKey(Student, on_delete=models.CASCADE, related_name='led_teams')
    event = models.ForeignKey(Event, on_delete=models.CASCADE, related_name='teams')

    def __str__(self):
        return f"{self.team_name} ({self.team_id})"

class Member(models.Model):
    student = models.ForeignKey(Student, on_delete=models.CASCADE, related_name='teams')
    team = models.ForeignKey(Team, on_delete=models.CASCADE, related_name='members')

    def __str__(self):
        return f"{self.moodle_id} - {self.team.team_name}"


