from django.urls import path
from forums import views

urlpatterns = [
    path('api/thread/', views.ThreadListCreate.as_view()),
]
