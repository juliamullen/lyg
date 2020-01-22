from rest_framework import serializers
from forums.models import Post, Thread, Forum

class PostSerializer(serializers.ModelSerializer):
  class Meta:
    model = Post
    fields = ('id', 'author', 'message')
