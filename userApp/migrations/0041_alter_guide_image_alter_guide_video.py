# Generated by Django 4.2 on 2023-05-15 10:32

import cloudinary.models
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('userApp', '0040_guide_video'),
    ]

    operations = [
        migrations.AlterField(
            model_name='guide',
            name='image',
            field=cloudinary.models.CloudinaryField(max_length=255, null=True, verbose_name='guide'),
        ),
        migrations.AlterField(
            model_name='guide',
            name='video',
            field=cloudinary.models.CloudinaryField(max_length=255, null=True, verbose_name='guide'),
        ),
    ]
