from django.urls import path
from . import views
from . import fuctioncall
urlpatterns = [
    path('', views.index, name='index'),
    path('<str:com>', views.com, name='com'),
]