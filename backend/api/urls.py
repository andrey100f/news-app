from django.urls import path

from .views import get_news, get_clean_data, get_data_for_chart

urlpatterns = [
    path('news/', get_news, name='get_news'),
    path('cleanup/', get_clean_data, name='get_clean_data'),
    path('chart/', get_data_for_chart, name='get_data_for_chart'),
]