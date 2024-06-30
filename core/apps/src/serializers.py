from djoser.serializers import PasswordResetConfirmSerializer
from djoser.serializers import UserCreateSerializer
from rest_framework import serializers
from django.contrib.auth import get_user_model

import apps.src.models as model

User = get_user_model()

class AccountSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        model = User
        fields = '__all__'

class PWSerializer(PasswordResetConfirmSerializer):
    def build_password_reset_confirm_url(self, uid, token):
        url = f"?forgot_password_confirm=True&uid={uid}&token={token}"
        return url


class TestimonialsSerializer(serializers.ModelSerializer):
    class Meta:
        model = model.Testimonials
        fields = '__all__'


class SettingSerializer(serializers.ModelSerializer):
    class Meta:
        model = model.Settings
        fields = '__all__'

class FAQSerializer(serializers.ModelSerializer):
    class Meta:
        model = model.FAQs
        fields = '__all__'

class ImagenSliderSerializer(serializers.ModelSerializer):
    
    file = serializers.SerializerMethodField()
    def get_file(self, obj):
        if obj.file:
            return obj.file.url.lstrip('')
        return None

    class Meta:
        model = model.ImagenSlider
        fields = '__all__'
