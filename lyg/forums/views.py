from forums.models import Post, Thread
from forums.serializers import PostSerializer, ThreadSerializer
from rest_framework import generics

class ThreadListCreate(generics.ListCreateAPIView):
  queryset = Thread.objects.all()
  serializer_class = ThreadSerializer

class PostList(generics.ListAPIView):
  queryset = Post.objects.all()
  serializer_class = PostSerializer
