from django.conf.urls import url

from blog.views import blog, response_date_time


urlpatterns = {
    url(r'^date_time/', response_date_time)
}
