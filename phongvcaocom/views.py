from django.http import Http404, HttpResponse
from django.shortcuts import render_to_response
from django.views.defaults import page_not_found, server_error

# Error #
def handler404(request):
    return page_not_found(request, "404.html")

def handler500(request):
    return server_error(request, "505.html")

# Home #
def home_page_view(request):
    return render_to_response("home.html")

# About #
def about_page_view(request):
    return render_to_response("about.html")

# Resume #
def resume_page_view(request):
    return render_to_response("resume.html")

# Design Portfolio #
def design_portfolio_page_view(request):
    return render_to_response("design_portfolio.html")

# Software Portfolio #
def software_portfolio_page_view(request):
    return render_to_response("software_portfolio.html")
