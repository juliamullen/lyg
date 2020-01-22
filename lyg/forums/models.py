from django.db import models
from django.contrib.auth.models import User

class ForumUser(models.Model):
  user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
  username = models.CharField(max_length=30, unique=True)

class Post(models.Model):
  poster = models.ForeignKey(ForumUser,
      related_name="posts",
      on_delete=models.SET_NULL, null=True)
  created_at = models.DateTimeField(auto_now_add=True)
  author = models.CharField(max_length=20) # replace with user
  message = models.TextField()

class Forum(models.Model):
  name = models.CharField(max_length=80)

class Thread(models.Model):
  original_post = models
