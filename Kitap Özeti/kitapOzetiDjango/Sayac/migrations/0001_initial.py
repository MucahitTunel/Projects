# Generated by Django 2.2.10 on 2020-02-19 17:38

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('Kullanicilar', '0001_initial'),
        ('Kitaplar', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Sayac',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Sayac', models.IntegerField()),
                ('Kitap_Id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Kitaplar.Kitaplar')),
                ('Kullanici_Id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Kullanicilar.Kullanicilar')),
            ],
        ),
    ]
