from django import forms


class AddTodoForm(forms.Form):
    title = forms.CharField(max_length=50, required=True,
                            widget=forms.TextInput(attrs={'placeholder': 'Enter todo title', 'id': 'title', 'name': 'title'}))
