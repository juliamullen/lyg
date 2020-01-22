from forums.models import Post
from forums.serializers import PostSerializer
from rest_framework import generics

class PostListCreate(generics.ListCreateAPIView):
  queryset = Post.objects.all()
  serializer_class = PostSerializer
