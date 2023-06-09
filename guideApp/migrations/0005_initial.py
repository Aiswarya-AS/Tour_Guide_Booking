# Generated by Django 4.2 on 2023-05-10 16:15

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('userApp', '0037_remove_user_username'),
        ('guideApp', '0004_delete_guide'),
    ]

    operations = [
        migrations.CreateModel(
            name='Otp',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('otp', models.IntegerField()),
                ('is_updated', models.DateTimeField(auto_now=True)),
                ('is_created', models.DateTimeField(auto_now_add=True)),
                ('guide', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='userApp.guide')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='userApp.user')),
            ],
        ),
    ]
