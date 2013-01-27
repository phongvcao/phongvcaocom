#!/usr/local/bin/python
import sys, os, user

# sys.path.insert(0, "/usr/lib/python2.7")
sys.path.insert(0, "/home/phongvca/django")
sys.path.insert(0, "/home/phongvca/phongvcaocom")

# Switch to the directory of your project.
os.chdir("/home/phongvca/phongvcaocom")

# Set the DJANGO_SETTINGS_MODULE environment variable
os.environ['DJANGO_SETTINGS_MODULE'] = "phongvcaocom.settings"

from django.core.servers.fastcgi import runfastcgi
runfastcgi(method="threaded", daemonize="false")