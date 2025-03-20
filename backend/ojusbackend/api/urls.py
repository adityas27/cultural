from django.urls import path
from .views import login, get_user_details, register_event, create_event, get_event, create_team, join_team, booking_update, mark_attendance

urlpatterns = [
    path('login/', login),
    path('get/', get_user_details),
    path('events/register/', register_event),
    path('create_event/', create_event, name='create_event'),
    path('get_event/<int:event_id>/', get_event, name='get_event'),
    path('create_team/', create_team, name='create_team'),
    path('join_team/', join_team, name='join_team'),
    path('booking/', booking_update, name='ghanekar_book'),
    path('mark/<str:moodle_id>/', mark_attendance, name='mark_att'),
]
