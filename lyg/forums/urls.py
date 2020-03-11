from django.urls import path
from forums import views

urlpatterns = [
    path('api/post/', views.PostList.as_view()),
    path('api/thread/', views.ThreadListCreate.as_view()),
]
