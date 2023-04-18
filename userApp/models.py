from django.db import models

# Create your models here.


class User(models.Model):
    firstname = models.CharField(max_length=250)
    lastname = models.CharField(max_length=250)
    username = models.CharField(max_length=250)
    email = models.EmailField()
    password = models.CharField(max_length=250)
    phone = models.BigIntegerField()
    is_superuser = models.BooleanField(default=False)
    is_updated = models.DateTimeField(auto_now=True)
    is_created = models.DateTimeField(auto_now_add=True)


class Destination(models.Model):
    country = models.CharField(max_length=250)
    state = models.CharField(max_length=250)
    location = models.CharField(max_length=250)
    short_desc = models.TextField(max_length=300)
    description = models.TextField(max_length=700)
    thumbnail = models.ImageField(upload_to='destination')
    is_updated = models.DateTimeField(auto_now=True)
    is_created = models.DateTimeField(auto_now_add=True)


class DestinationImage(models.Model):
    destination = models.ForeignKey(Destination, on_delete=models.CASCADE)
    image = models.ImageField(upload_to='destination')
    is_updated = models.DateTimeField(auto_now=True)
    is_created = models.DateTimeField(auto_now_add=True)


class Guide(models.Model):
    firstname = models.CharField(max_length=250)
    lastname = models.CharField(max_length=250)
    username = models.CharField(max_length=250)
    email = models.EmailField()
    country = models.CharField(max_length=250)
    state = models.CharField(max_length=250)
    password = models.CharField(max_length=250)
    phone = models.BigIntegerField()
    place = models.CharField(max_length=250)
    pincode = models.IntegerField()
    password = models.CharField(max_length=250)
    pricing = models.IntegerField(null=True)
    languages_known = models.CharField(max_length=500)
    is_updated = models.DateTimeField(auto_now=True)
    is_created = models.DateTimeField(auto_now_add=True)
    image = models.ImageField(upload_to='guide', null=True)
    description = models.CharField(max_length=1000, null=True)


class Request(models.Model):
    guide = models.ForeignKey(Guide, on_delete=models.CASCADE)
    guide_name = models.CharField(max_length=200)
    guide_place = models.CharField(max_length=200)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    date = models.DateField()
    time = models.TimeField()
    total_peoples = models.IntegerField()
    status = models.CharField(max_length=200, default='Requested')
    is_updated = models.DateTimeField(auto_now=True)
    is_created = models.DateTimeField(auto_now_add=True)
