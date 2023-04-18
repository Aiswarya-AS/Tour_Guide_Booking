# Generated by Django 4.2 on 2023-04-07 12:13

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('userApp', '0002_alter_user_phone'),
    ]

    operations = [
        migrations.CreateModel(
            name='Destination',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('country', models.CharField(max_length=250)),
                ('state', models.CharField(max_length=250)),
                ('location', models.CharField(max_length=250)),
                ('short_desc', models.TextField(max_length=300)),
                ('description', models.TextField(max_length=700)),
                ('is_updated', models.DateTimeField(auto_now=True)),
                ('is_created', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='DestinationImage',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(upload_to='destination')),
                ('is_updated', models.DateTimeField(auto_now=True)),
                ('is_created', models.DateTimeField(auto_now_add=True)),
                ('destination', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='userApp.destination')),
            ],
        ),
    ]