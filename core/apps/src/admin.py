from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin

from apps.src.models import Account

class MyAdminSite(admin.AdminSite):
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

admin_site = MyAdminSite()
admin.site = admin_site
admin_site.site_header = "Safir"


class AccountAdmin(BaseUserAdmin):
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


admin.site.register(Account, AccountAdmin)
