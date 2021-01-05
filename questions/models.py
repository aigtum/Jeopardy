from django.db import models


class Topic(models.Model):
    text = models.CharField(max_length=200, default="Test")

    def __str__(self):
        return self.text


class Question(models.Model):
    text = models.CharField(max_length=200)
    answer = models.CharField(max_length=200)
    points = models.IntegerField()
    topic = models.ForeignKey(Topic, on_delete=models.CASCADE)
    write = models.BooleanField(default=False)

    def __str__(self):
        return self.text
