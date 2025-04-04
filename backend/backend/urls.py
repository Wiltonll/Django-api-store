from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from django.http import JsonResponse


def root(request):
    return JsonResponse({"message": "Hello, Django API is running"})

urlpatterns = [
    path('', root),
    path('admin/', admin.site.urls),
    path('api/products/',include('api.urls.product_urls')),
    path('api/users/',include('api.urls.user_urls')),
    path('api/orders/',include('api.urls.order_urls')),
]

urlpatterns += static(settings.MEDIA_URL,document_root= settings.MEDIA_ROOT)

