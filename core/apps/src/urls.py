from django.urls import path
import apps.src.views as view

urlpatterns = [
    path('status/', view.serverStatus.as_view(), name='server-status'),
    path('fetch-faqs/', view.fetchFAQs.as_view(), name='fetch-faqs'),
    path('fetch-sliders/', view.fetchImagesSlider.as_view(), name='fetch-sliders'),
    path('fetch-testimonials/', view.fetchTestimonials.as_view(), name='fetch-testimonials'),
    path('fetch-settings/', view.fetchSettings.as_view(), name='fetch-settings'),
    path('send-message/', view.sendMessage.as_view(), name='send-message'),
]