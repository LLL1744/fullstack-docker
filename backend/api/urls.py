from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView
from .views import SecretView

urlpatterns = [
    path("api/token/", TokenObtainPairView.as_view()),
    path("api/secret/", SecretView.as_view()),
]