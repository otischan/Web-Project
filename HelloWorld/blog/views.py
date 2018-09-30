from django.http import JsonResponse
from django.shortcuts import render
from django.utils.timezone import now


def blog(request):
    return render(request, "blog.html")


def response_date_time(request):
    temp = {}
    date = now().date()
    time = now().time()
    if request.method == 'POST':
        print("Post Request")
        if request.body == 'date':
            temp = {'date': date}
        elif request.body == 'time':
            temp = {'time': time}
        elif request.body == 'date_time':
            temp = {'date': date, 'time': time}
        else:
            temp = {'date': date, 'time': time}
    elif request.method == 'GET':
        print("Get Request")
        temp = {'date': date, 'time': time}
    response = JsonResponse(temp)
    # response["Access-Control-Allow-Origin"] = "*"
    # response["Access-Control-Allow-Methods"] = "POST, GET, OPTIONS"
    # response["Access-Control-Max-Age"] = "1000"
    # response["Access-Control-Allow-Headers"] = "*"
    return response
