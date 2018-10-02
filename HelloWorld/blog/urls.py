from django.conf.urls import url

from blog.views import blog, response_date_time, response_user_info_submit


urlpatterns = {
    url(r'^date_time/', response_date_time),
    url(r'^user_info_submit/', response_user_info_submit)
}
