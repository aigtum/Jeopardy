from django.contrib import admin

import questions
from questions.models import Question, Topic


class QuestionAdmin(admin.ModelAdmin):
    model = Question
    list_display = ('text', 'answer', 'topic', 'points')


class QuestionInline(admin.TabularInline):
    model = Question
    extra = 1


class TopicAdmin(admin.ModelAdmin):
    model = Topic
    inlines = [QuestionInline]


admin.site.register(Question, QuestionAdmin)
admin.site.register(Topic, TopicAdmin)