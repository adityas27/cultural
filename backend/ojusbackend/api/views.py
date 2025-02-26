from django.contrib.auth.hashers import check_password
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework_simplejwt.tokens import RefreshToken
from api.models import Student
from hashlib import sha256
from django.contrib.auth import get_user_model
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated

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
    user = request.user  # Now a Student instance
    return Response({
        "moodle_id": user.moodle_id,
        "name": user.name,
        "dept": user.dept,
        "year": user.year
    })