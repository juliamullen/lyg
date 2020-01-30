from django.db import models

from django.contrib.auth.models import User

class ForumUser(models.Model):
  user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
  username = models.CharField(max_length=30, unique=True)

class Thread(models.Model):
  created_at = models.DateTimeField(auto_now_add=True)
  op         = models.ForeignKey('Post', related_name="originated", on_delete=models.SET_NULL, null=True)

class Post(models.Model):
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)
  author = models.CharField(max_length=20) # replace with user
  message = models.TextField()
  thread  = models.ForeignKey('Thread', on_delete=models.CASCADE)

  def save(self, *args, **kwargs):
    is_op = False
    if not self.thread:
      thread = Thread(op=None)
      thread.save()
      self.thread_id = thread.pk
      is_op = True

    super().save(*args, **kwargs)

    if is_op:
      thread.op_id = self.pk
      thread.save()

class Comment(models.Model):
  created_at = models.DateTimeField(auto_now_add=True)
  author = models.CharField(max_length=20)
  post = models.ForeignKey('Post', on_delete=models.CASCADE)
  message = models.CharField(max_length=300)

class Forum(models.Model):
  name = models.CharField(max_length=80)
