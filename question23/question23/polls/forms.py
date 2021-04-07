from django import forms
from .models import ProgrammingLanguage


class PollForm(forms.Form):
    LANGUAGES = tuple(set(map(lambda language: (language.id, language.name),
                          ProgrammingLanguage.objects.all())))
    language = forms.ChoiceField(
        label='', choices=LANGUAGES, required=True)
