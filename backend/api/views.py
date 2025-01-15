from django.shortcuts import render
import requests
from rest_framework.decorators import api_view
from rest_framework.response import Response

# Create your views here.
@api_view(['GET'])
def get_news(request):
    topic = request.GET.get("topic")
    url = f"https://newsapi.org/v2/everything?q={topic}&apiKey=d2108377a612431dbcce0157617c494f";

    news = requests.get(url).json()
    list_of_news = news["articles"]

    authors = []
    descriptions = []
    titles = []
    urls = []
    
    for i in range(len(list_of_news)):
        article = list_of_news[i]
        authors.append(article["author"])
        titles.append(article["title"])
        descriptions.append(article["description"])
        urls.append(article["url"])

    result = zip(authors, titles, descriptions, urls)
    result_list = [{"author": a, "title": t, "description": d, "url": u} for a, t, d, u in result]
    response = Response(result_list)
    return response