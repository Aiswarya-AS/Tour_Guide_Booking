# Generated by Django 4.2 on 2023-05-18 06:54

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('userApp', '0046_guidewallet'),
    ]

    operations = [
        migrations.RenameField(
            model_name='guidewallet',
            old_name='user_id',
            new_name='guide_id',
        ),
    ]