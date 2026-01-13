from django.urls import path
from .views import hello, secret

urlpatterns = [
    path('hello/', hello),
    path('secret/', secret),
]
