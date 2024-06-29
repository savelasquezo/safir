from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin

import apps.src.models as model

class AdminSafir(admin.AdminSite):
    index_title = 'Consola Administrativa'
    verbose_name = "Safir"

    def get_app_list(self, request, app_label=None):
        """
        Return a sorted list of all the installed apps that have been
        registered in this site. NewMetod for ordering Models
        """
        ordering = {"Accounts": 1,"Groups": 2,}
        app_dict = self._build_app_dict(request, app_label)
        app_list = sorted(app_dict.values(), key=lambda x: x["name"].lower())

        for app in app_list:
            app['models'].sort(key=lambda x: ordering.get(x['name'], 0))

        return app_list

admin_site = AdminSafir()
admin.site = admin_site
admin_site.site_header = "Safir"

class AccountsAdmin(BaseUserAdmin):
    list_display = ('username', 'email')
    search_fields = ('username', 'email')

    fieldsets = (
        (None, {'fields': (('email','username','date_joined','last_joined'), ('password','is_active'))}),
            ('', {'fields': ((),
        )}),
    )

    add_fieldsets = (
        (None, {
            'classes': ('wide',),'fields': ('username', 'email', 'password1', 'password2'),
        }),
    )

    list_filter=['is_active']

    def get_fieldsets(self, request, obj=None):
        fieldsets = super().get_fieldsets(request, obj)
        return fieldsets

    def get_readonly_fields(self, request, obj=None):
        return ['username','email']



class ImagenSliderInline(admin.StackedInline):
    
    model = model.ImagenSlider
    extra = 0
    fieldsets = ((" ", {"fields": (("file","is_active"),)}),)
    
class FAQsInline(admin.StackedInline):
    
    model = model.FAQs
    extra = 0
    fieldsets = ((" ", {"fields": (("question","is_active"),"answer")}),)

class SettingsAdmin(admin.ModelAdmin):

    inlines = [ImagenSliderInline, FAQsInline]
    
    list_display = (
        "default",
        "email",
        "phone",
        "address",
        )

    fConfig = {"fields": (
        ("nit","phone"),
        ("email","address"),
        )}

    fSocial = {"fields": (
        "twitter",
        "facebook",
        "instagram",
        )}

    fieldsets = (
        ("", fConfig),
        ("Social/Media", fSocial),
        )

    def has_delete_permission(self, request, obj=None):
        return False
    
    def has_add_permission(self, request):
        return False if model.Settings.objects.exists() else True

    readonly_fields=['default',]



admin.site.register(model.Accounts, AccountsAdmin)
admin.site.register(model.Settings, SettingsAdmin)