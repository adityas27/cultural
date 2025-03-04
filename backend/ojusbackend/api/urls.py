from django.urls import path
from .views import login, get_user_details, register_event, create_event, get_event

urlpatterns = [
    path('login/', login),
    path('get/', get_user_details),
    path('events/register/', register_event),
    path('create_event/', create_event, name='create_event'),
    path('get_event/<int:event_id>/', get_event, name='get_event'),
]
