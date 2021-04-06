from django.shortcuts import render, redirect
from django.http import HttpResponse, HttpResponseRedirect
from django.template import loader
from . import models
from . import forms
from django.utils import timezone


# Create your views here.


def index(request):
    todoItemsQuerySet = models.TodoItem.objects.all()
    template = loader.get_template('mysite/index.html')
    todoItems = list(todoItemsQuerySet)
    context = {
        'todoItems': todoItems
    }
    return HttpResponse(template.render(context))


def add(request):
    if(request.method == "POST"):
        form = forms.AddTodoForm(request.POST)
        if form.is_valid():
            todoItem = models.TodoItem(
                text=form.cleaned_data['title'], date=timezone.now(), completed=False)
            todoItem.save()
            return redirect('index')
    else:
        form = forms.AddTodoForm()

    return render(request, 'mysite/add.html', {'form': form})
