from django.urls import path
from . import views
urlpatterns = [
    path('register/', views.user_register, name='user_register'),
    path('user_login/', views.user_login, name='user_login'),
    path('destinations/', views.destination, name='destinations'),
    path('destination_details/<int:id>/',
         views.destination_details, name='destinations_details'),
    path('guides/<str:place>', views.guides, name='guides'),
    path('guide/<int:id>/', views.guide_details, name='guide_details'),
    # path('guide_request/',views.guide_request,name='guide_request'),
    path('request', views.request, name='request'),

    path('user_profile/<int:id>/', views.user_profile, name='user_profile'),
    path('user_requests/<int:id>/', views.user_requests, name='request')
]
