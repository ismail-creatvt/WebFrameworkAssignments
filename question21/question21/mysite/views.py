from django.http import HttpResponse
from django.template import loader

# Create your views here.


def index(request):
    template = loader.get_template('mysite/index.html')
    return HttpResponse(template.render())


def page1(request):
    template = loader.get_template('mysite/page1.html')
    return HttpResponse(template.render())


def page2(request):
    template = loader.get_template('mysite/page2.html')
    return HttpResponse(template.render())


def page3(request):
    template = loader.get_template('mysite/page3.html')
    return HttpResponse(template.render())
