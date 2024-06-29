import os, logging
from django.conf import settings

from django.core.mail import send_mail, BadHeaderError
from django.template.loader import render_to_string
from asgiref.sync import sync_to_async
from django.utils import timezone

from rest_framework.views import APIView
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework import status
from rest_framework.response import Response
from rest_framework.pagination import PageNumberPagination

import apps.src.models as model
import apps.src.serializers as serializer

logger = logging.getLogger(__name__)

class serverStatus(APIView):
    def get(self, request):
        return Response({"status": "server available"}, status=status.HTTP_200_OK)

class fetchFAQs(generics.ListAPIView):
    """
    Endpoint to retrieve details of the currently active FAQs.
    Requires no authentication.
    """
    serializer_class = serializer.FAQSerializer
    permission_classes = [AllowAny]

    pagination_class = PageNumberPagination
    page_size = 10

    def get_queryset(self):
        queryset = model.FAQs.objects.filter(is_active=True)
        return queryset

    def list(self, request, *args, **kwargs):
        try:
            queryset = self.get_queryset()
            page = self.paginate_queryset(queryset)
            if page is not None:
                serializer = self.get_serializer(page, many=True)
                return self.get_paginated_response(serializer.data)
            serializer = self.get_serializer(queryset, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Exception as e:
            logger.error("%s", e, exc_info=True)
            return Response({'error': 'Not Found FAQs.'}, status=status.HTTP_404_NOT_FOUND)



class fetchImagesSlider(generics.ListAPIView):
    """
    Endpoint to retrieve details of the currently active ImagesSlider.
    Requires no authentication.
    """
    serializer_class = serializer.ImagenSliderSerializer
    permission_classes = [AllowAny]

    pagination_class = PageNumberPagination
    page_size = 10

    def get_queryset(self):
        queryset = model.ImagenSlider.objects.filter(is_active=True)
        return queryset

    def list(self, request, *args, **kwargs):
        try:
            queryset = self.get_queryset()
            page = self.paginate_queryset(queryset)
            if page is not None:
                serializer = self.get_serializer(page, many=True)
                return self.get_paginated_response(serializer.data)
            serializer = self.get_serializer(queryset, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Exception as e:
            logger.error("%s", e, exc_info=True)
            return Response({'error': 'Not Found ImagesSlider.'}, status=status.HTTP_404_NOT_FOUND)



class sendMessage(generics.GenericAPIView):
    def post(self, request, *args, **kwargs):
        try:
            subject = request.data.get('subject')
            requestEmail = request.data.get('email', None),
            requestMessaje = request.data.get('message', None)

            email_template_name = 'email/message.html'

            c = {
                "send": requestEmail,
                "message": requestMessaje,
            }

            email = render_to_string(email_template_name, c)
            send_mail(subject, message=None, from_email='noreply@asesoriasafir.com',
                        recipient_list=['admin@asesoriasafir.com'], fail_silently=False, html_message=email)
            return Response({'detail': 'Email Enviado.'}, status=status.HTTP_200_OK)
            
        except Exception as e:
            eDate = timezone.now().strftime("%Y-%m-%d %H:%M")
            with open(os.path.join(settings.BASE_DIR, 'logs/core.log'), 'a') as f:
                f.write("GET EmailError {} --> Error: {}\n".format(eDate, str(e)))
            return Response({'error': 'Unexpected error occurred'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
