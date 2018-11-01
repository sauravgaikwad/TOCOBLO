from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from . import  Loadmodel
import json
def index(request):
    return HttpResponse("Hello, world. You're Requesting from chrome extension.")

def com(request, com):

    print(len(com.split(",")))

    a=Loadmodel.predict_string(com)
    #print(a)
    return HttpResponse(a)
