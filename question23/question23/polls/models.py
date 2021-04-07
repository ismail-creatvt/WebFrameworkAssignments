from django.db import models

# Create your models here.


class ProgrammingLanguage(models.Model):
    name = models.CharField(max_length=30)
    rating = models.IntegerField()

    def __str__(self):
        return self.name
