from django.db import models
from django.contrib.auth.models import User

# Modèle pour représenter les dessins des utilisateurs
class Drawing(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    image = models.ImageField(upload_to='drawings/')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'Drawing by {self.user.username}'
