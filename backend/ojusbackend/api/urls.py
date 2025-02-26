from django.urls import path
from .views import login, get_user_details

urlpatterns = [
    path('login/', login),
    path('get/', get_user_details), 
]
