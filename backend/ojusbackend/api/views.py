from django.contrib.auth.hashers import check_password
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework_simplejwt.tokens import RefreshToken
from api.models import Student
from hashlib import sha256
from django.contrib.auth import get_user_model
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
from django.shortcuts import get_object_or_404
from .models import Event, EventRegistration
from .serializers import EventRegistrationSerializer, EventSerializer
from django.contrib.auth import authenticate
from rest_framework_simplejwt.tokens import RefreshToken

@api_view(['POST'])
def login(request):
    moodle_id = request.data.get('moodle_id')
    password = request.data.get('password')

    # Authenticate using the custom backend
    user = authenticate(request, username=moodle_id, password=password)

    if user is None:
        return Response({'error': 'Invalid credentials'}, status=400)

    # Generate JWT Token
    refresh = RefreshToken.for_user(user)
    return Response({
        'access': str(refresh.access_token),
        'refresh': str(refresh)
    })


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_user_details(request):
    user = request.user
    events =  EventRegistration.objects.filter(student=user).values()
    
    print(list(events))
    return Response({
        "moodle_id": user.moodle_id,
        "name": user.name,
        "dept": user.dept,
        "year": user.year,
        "email": user.email,
        "phone": user.phone_no,
        "event":list(events),
    })



@api_view(['POST'])
@permission_classes([IsAuthenticated])
def register_event(request):
    student = request.user
    serializer = EventRegistrationSerializer(data=request.data)
    

    if not serializer.is_valid():
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    # Use the validated Event instance directly
    event = serializer.validated_data['event']
    
    if EventRegistration.objects.filter(student=student, event=event).exists():
        return Response({'error': 'Already registered for this event'}, status=status.HTTP_400_BAD_REQUEST)
    
    # Check if first-time registration needs contact info
    if not student.email or not student.phone_no:
        email = serializer.validated_data.get('email')
        phone_no = serializer.validated_data.get('phone_no')
        
        if not email or not phone_no:
            return Response(
                {'error': 'Email and phone number are required for first registration'},
                status=status.HTTP_400_BAD_REQUEST
            )
            
        # Update student contact info
        student.email = email
        student.phone_no = phone_no
        student.save()
    
    # Create registration
    EventRegistration.objects.create(student=student, event=event)
    
    return Response({'message': 'Registration successful'}, status=status.HTTP_201_CREATED)


@api_view(['POST'])
def create_event(request):
    serializer = EventSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def get_event(request, event_id):
    event = get_object_or_404(Event, id=event_id)
    serializer = EventSerializer(event)
    return Response(serializer.data)
