from django.urls import path
import apps.src.views as view

urlpatterns = [
    path('status/', view.serverStatus.as_view(), name='server-status'),
    path('send-message/', view.sendMessage.as_view(), name='send-message'),
]