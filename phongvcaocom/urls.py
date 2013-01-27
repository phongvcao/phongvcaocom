from django.conf.urls import patterns, include, url
from phongvcaocom.views import *

# Uncomment the next two lines to enable the admin:
# from django.contrib import admin
# admin.autodiscover()

handler404 = 'phongvcaocom.views.handler404'
# No need for handler500. Just use the default then.
# handler500 = 'phongvcaocom.views.handler500'

urlpatterns = patterns('',
    (r'^$', home_page_view),
    (r'^about/$', about_page_view),
    (r'^resume/$', resume_page_view),
    (r'^design/$', design_portfolio_page_view),
    (r'^software/$', software_portfolio_page_view),
    (r'^(?P<social_site_name>.*)/$', social_sites_redirect_view),
    # Examples:
    # url(r'^$', 'phongvcaocom.views.home', name='home'),
    # url(r'^phongvcaocom/', include('phongvcaocom.foo.urls')),

    # Uncomment the admin/doc line below to enable admin documentation:
    # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    # url(r'^admin/', include(admin.site.urls)),
)
