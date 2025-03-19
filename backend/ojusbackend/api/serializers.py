from rest_framework import serializers
from .models import Event, EventRegistration, Team, Member, Student

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = ['moodle_id', 'name', 'dept', 'year', 'email', 'phone_no']

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

class TeamSerializer(serializers.ModelSerializer):
    leader = StudentSerializer(read_only=True)
    event = EventSerializer(read_only=True)
    leader_id = serializers.PrimaryKeyRelatedField(queryset=Student.objects.all(), source='leader', write_only=True)
    event_id = serializers.PrimaryKeyRelatedField(queryset=Event.objects.all(), source='event', write_only=True)

    class Meta:
        model = Team
        fields = '__all__'

class MemberSerializer(serializers.ModelSerializer):
    student = StudentSerializer(read_only=True)
    team = TeamSerializer(read_only=True)
    student_id = serializers.PrimaryKeyRelatedField(queryset=Student.objects.all(), source='student', write_only=True)
    team_id = serializers.PrimaryKeyRelatedField(queryset=Team.objects.all(), source='team', write_only=True)

    class Meta:
        model = Member
        fields = '__all__'