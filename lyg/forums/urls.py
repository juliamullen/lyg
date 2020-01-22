from django.urls import path
from forums import views

urlpatterns = [
    path('api/post/', views.PostListCreate.as_view()),
]
