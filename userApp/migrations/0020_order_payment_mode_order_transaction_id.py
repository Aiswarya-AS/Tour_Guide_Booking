# Generated by Django 4.2 on 2023-04-21 08:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('userApp', '0019_alter_request_price'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='payment_mode',
            field=models.CharField(default=0),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='order',
            name='transaction_id',
            field=models.BigIntegerField(default=0),
            preserve_default=False,
        ),
    ]
