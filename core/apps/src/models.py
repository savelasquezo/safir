import uuid

from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.db import models
from django.utils import timezone
from django.utils.translation import gettext_lazy as _

def ImageUploadTo(instance, id):
    return f"uploads/files/{id}"

def VideoUploadTo(instance, id):
    return f"uploads/media/{id}"

class AccountManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError('¡Email Obligatorio!')
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_active', True)
        extra_fields.setdefault('is_superuser', True)

        return self.create_user(email, password, **extra_fields)


class Accounts(AbstractBaseUser, PermissionsMixin):
    id = models.UUIDField(_("ID"),default=uuid.uuid4, unique=True, primary_key=True)
    email = models.EmailField(_("Email"),unique=True)
    username = models.CharField(_("Usuario"),max_length=64, unique=True)
    date_joined = models.DateField(_("Fecha"),default=timezone.now)
    last_joined = models.DateField(_("Ultimo Ingreso"),default=timezone.now)
    is_active = models.BooleanField(default=False, verbose_name='')
    is_staff = models.BooleanField(_("¿Staff?"),default=False)
    
    objects = AccountManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    def __str__(self):
        return f"{self.email}"

    class Meta:
        indexes = [models.Index(fields=['email']),]
        verbose_name = _("Account")
        verbose_name_plural = _("Accounts")


class Settings(models.Model):
    default = models.CharField(_("XConfigSafir"), max_length=32, unique=True, blank=True, null=True, default="XConfigSafir")

    nit = models.CharField(_("NIT"), max_length=64, blank=True, null=True)
    phone = models.CharField(_("Telefono"), max_length=64, blank=True, null=True)
    email = models.EmailField(_("Correo"), max_length=254, blank=True, null=True)
    address = models.CharField(_("Address"), max_length=64, blank=True, null=True)
    attention = models.CharField(_("Horario"), max_length=64, blank=True, null=True)

    tiktok = models.URLField(_("Tiktok"), max_length=128, blank=True, null=True, default="https://tiktok.com")
    facebook = models.URLField(_("Facebook"), max_length=128, blank=True, null=True, default="https://facebook.com")
    instagram = models.URLField(_("Instagram"), max_length=128, blank=True, null=True, default="https://instagram.com")

    video = models.FileField(_("Video"), upload_to=VideoUploadTo, max_length=32, null=True, blank=True)
    
    nequi = models.CharField(_("Nequi"), max_length=64, blank=True, null=True)
    bancolombia = models.CharField(_("Bancolombia"), max_length=64, blank=True, null=True)

    def __str__(self):
        return f"{self.default}"

    class Meta:
        verbose_name = _("Setting")
        verbose_name_plural = _("Settings")

class ImagenSlider(models.Model):

    settings = models.ForeignKey(Settings, on_delete=models.CASCADE)
    file = models.ImageField(_("Imagen"), upload_to=ImageUploadTo, max_length=32, null=True, blank=True, help_text="Width-(1340px) - Height-(500px)")
    is_active = models.BooleanField(default=True, verbose_name='')
    
    def __str__(self):
        return f"{self.id}"

    class Meta:
        verbose_name = _("Imagen")
        verbose_name_plural = _("Images")

class FAQs(models.Model):

    settings = models.ForeignKey(Settings, on_delete=models.CASCADE)
    question = models.CharField(_("Titulo"),max_length=64, null=False, blank=False)
    answer = models.TextField(_("Descripcion"),max_length=1024, null=False, blank=False)
    is_active = models.BooleanField(default=True, verbose_name='')

    def __str__(self):
        return f"{self.id}"

    class Meta:
        verbose_name = _("FAQ")
        verbose_name_plural = _("FAQs")

class Testimonials(models.Model):

    settings = models.ForeignKey(Settings, on_delete=models.CASCADE)
    file = models.ImageField(_("Imagen"), upload_to=ImageUploadTo, max_length=32, null=True, blank=True, help_text="Width-(1340px) - Height-(500px)")
    full_name = models.CharField(_("Nombre/Apellido"), max_length=128, null=False, blank=False)
    job = models.CharField(_("Actividad"), max_length=128, null=False, blank=False)
    date = models.DateField(_("Fecha"), default=timezone.now)

    testimonial = models.TextField(_("Testimonial"),max_length=256,blank=True,null=True)

    class Meta:
        verbose_name = _("Testimonial")
        verbose_name_plural = _("Testimonials")

    def __str__(self):
        return "%s" % (self.id)


class Messages(models.Model):

    TYPES = (
        ('ticket', 'Solicitud de Servicio'),
        ('billing', 'Facturacion'),
        ('bugs', 'Fallo/Error'),
    )
    
    id = models.AutoField(primary_key=True, verbose_name="ID")
    account = models.ForeignKey(Accounts, on_delete=models.CASCADE)
    first_name = models.CharField(_("Nombre"), max_length=64, blank=True)
    last_name = models.CharField(_("Apellido"), max_length=64, blank=True)
    email = models.EmailField(_("Email"), unique=True, null=False, blank=False)
    date = models.DateField(_("Fecha"), default=timezone.now)
    type = models.CharField(max_length=100, choices=TYPES)
    messages = models.TextField(_("Mensaje"),max_length=256,blank=True,null=True)
    is_view = models.BooleanField(default=False, verbose_name='')

    class Meta:
        verbose_name = _("Message")
        verbose_name_plural = _("Messages")

    def __str__(self):
        return "%s" % (self.id)
