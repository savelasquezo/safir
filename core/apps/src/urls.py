from django.urls import path
import apps.src.views as view

urlpatterns = [
    path('send-message/', view.sendMessage.as_view(), name='send-message'),
]