# Generated by Django 5.1.6 on 2025-03-04 12:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_event_student_email_student_phone_no_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='event',
            name='phone_no',
            field=models.CharField(default='1000000', max_length=100),
            preserve_default=False,
        ),
    ]
