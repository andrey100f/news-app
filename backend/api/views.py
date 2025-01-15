from django.shortcuts import render
import requests
from rest_framework.decorators import api_view
from rest_framework.response import Response
from collections import defaultdict

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

@api_view(['POST'])
def get_clean_data(request):
    articles = request.data
    filtered_articles = [article for article in articles if article.get("author") is not None]
    return Response(filtered_articles)

@api_view(['POST'])
def get_data_for_chart(request):
    articles = request.data

    author_counts = defaultdict(int)
    for article in articles:
        author_counts[article["author"]] += 1
   
    data_for_chart = [{"author": author, "number": count} for author, count in author_counts.items()]
    data_for_chart = sorted(data_for_chart, key=lambda x: x["number"], reverse=True)
    top_articles = data_for_chart[:5]
    
    return Response(top_articles)