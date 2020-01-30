from rest_framework import serializers
from forums.models import Post, Thread, Comment

class PostSerializer(serializers.ModelSerializer):
  class Meta:
    model = Post
    fields = ('id', 'author', 'message', 'comment_set')
    depth = 1

class ThreadSerializer(serializers.ModelSerializer):
  class Meta:
    model = Thread
    fields = ('id', 'created_at', 'post_set')
    depth = 2

class CommentSerializer(serializers.ModelSerializer):
  class Meta:
    model = Comment
    fields = ('id', 'created_at', 'message')
