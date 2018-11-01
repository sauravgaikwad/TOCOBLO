from . import  Loadmodel
from django.http import HttpResponse, JsonResponse


def show(request):
    a=Loadmodel.predict_string()
    return HttpResponse(a)


