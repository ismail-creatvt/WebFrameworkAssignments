from django.shortcuts import render, redirect
from django.http import HttpResponse
from .models import ProgrammingLanguage
from .forms import PollForm

# Create your views here.


def poll(request):
    if request.method == "POST":
        form = PollForm(request.POST)
        if form.is_valid():
            language = ProgrammingLanguage.objects.get(
                id=form.cleaned_data['language'])
            language.rating = language.rating+1
            language.save()
            return redirect('index')
    else:
        form = PollForm()
    return render(request, 'polls/poll.html', {'form': form})


def index(request):
    languages = ProgrammingLanguage.objects.all()
    return render(request, 'polls/index.html', {'languages': languages, })
