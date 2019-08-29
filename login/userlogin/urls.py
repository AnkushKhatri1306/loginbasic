from django.urls import path
from . import views

urlpatterns = [
    path('signup/', views.user_signup_details),
    path('get-detail/', views.get_user_details),
]