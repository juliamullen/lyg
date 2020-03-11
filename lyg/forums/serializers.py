from rest_framework import serializers
from forums.models import Post, Thread, Comment

class CommentSerializer(serializers.ModelSerializer):
  class Meta:
    model = Comment
    fields = ('id', 'created_at', 'message')

class PostSerializer(serializers.ModelSerializer):
  comment_set = CommentSerializer(many=True)
  class Meta:
    model = Post
    fields = ('id', 'author', 'message', 'comment_set')

class ThreadSerializer(serializers.ModelSerializer):
  post_set = PostSerializer(many=True)
  class Meta:
    model = Thread
    fields = ('id', 'created_at', 'post_set')
