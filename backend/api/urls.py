from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView
from .views import SecretView

urlpatterns = [
    path("token/", TokenObtainPairView.as_view()),
    path("secret/", SecretView.as_view()),
]