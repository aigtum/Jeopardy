from django.shortcuts import render
from rest_framework import generics

from questions.models import Topic, Question
from questions.serializers import TopicSerializer, QuestionSerializer


class TopicListCreate(generics.ListCreateAPIView):
    queryset = Topic.objects.all()
    serializer_class = TopicSerializer


class QuestionListCreate(generics.ListCreateAPIView):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer
