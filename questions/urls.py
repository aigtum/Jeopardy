from django.urls import path
from . import views

urlpatterns = [
    path('api/topics/', views.TopicListCreate.as_view()),
    path('api/questions/', views.QuestionListCreate.as_view()),
]