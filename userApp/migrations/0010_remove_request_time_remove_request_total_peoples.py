# Generated by Django 4.2 on 2023-04-14 11:34

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('userApp', '0009_guide_description_guide_image'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='request',
            name='time',
        ),
        migrations.RemoveField(
            model_name='request',
            name='total_peoples',
        ),
    ]
