from django.urls import path
import apps.src.views as view

urlpatterns = [
    path('status/', view.serverStatus.as_view(), name='server-status'),
    path('fetch-faqs/', view.fetchFAQs.as_view(), name='fetch-faqs'),
    path('fetch-sliders/', view.fetchImagesSlider.as_view(), name='fetch-sliders'),
    path('send-message/', view.sendMessage.as_view(), name='send-message'),
]