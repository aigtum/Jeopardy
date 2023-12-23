from django.db import models


class Year(models.Model):
    year = models.IntegerField(default=2020, blank=True, null=True)

    def __str__(self):
        return str(self.year)


# allow setting year in admin


class Topic(models.Model):
    text = models.CharField(max_length=200, default="Test")
    year = models.ForeignKey(Year, on_delete=models.CASCADE, blank=True, null=True)

    def __str__(self):
        return f"{self.text}"


class Question(models.Model):
    text = models.CharField(max_length=200)
    answer = models.CharField(max_length=200)
    points = models.IntegerField()
    topic = models.ForeignKey(Topic, on_delete=models.CASCADE)
    write = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.text} - {self.answer}"
