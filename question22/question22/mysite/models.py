from django.db import models

# Create your models here.


class TodoItem(models.Model):

    text = models.CharField(max_length=50)
    completed = models.BooleanField(default=False)
    date = models.DateField(auto_now=False, auto_now_add=False)

    class Meta:
        verbose_name = ("TodoItem")
        verbose_name_plural = ("TodoItems")

    def __str__(self):
        return self.text
