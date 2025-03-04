from rest_framework import serializers
from .models import Event, EventRegistration

class EventRegistrationSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(required=False, write_only=True)
    phone_no = serializers.CharField(required=False, write_only=True)

    class Meta:
        model = EventRegistration
        fields = ['event', 'email', 'phone_no']

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = '__all__'
