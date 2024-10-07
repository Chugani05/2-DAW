from django.db import models


class Post(models.Model):
    title = models.CharField(max_length=100)
    slug = models.SlugField(max_length=120, unique=True)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    # updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title
