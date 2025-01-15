<h1 align="center" style="color: #6DA7D8"> News Application </h1>

## <span style="color: #6DA7D8"> Project Description

This application, written in Python, serves as a beginner-friendly project demonstrating the creation of a News App. It leverages the newsapi.org API for fetching the latest news articles.

## <span style="color: #6DA7D8"> Getting Started

### Backend (Django):
1. **Install Prerequisites**:
    - Ensure you have Python and pip installed.
2. **Setup Backend**:
    - Clone the repository:  
      ```bash
      https://github.com/andrey100f/news-app.git
      cd backend
      ```
    - Create a virtual environment and activate it:  
      ```bash
      python -m venv env
      env\Scripts\activate
      ```
    - Install dependencies:  
      ```bash
      pip install django djangorestframework django-cors-headers
      ```
    - Apply migrations:
      ```bash
      python manage.py makemigrations
      python manage.py migrate
      ```
    - Start the development server:
    ```bash
      python manage.py runserver
      ```

---

### Frontend (React):
1. **Install Node.js**:
    - Ensure you have Node.js and npm installed.
2. **Setup Frontend**:
    - Navigate to the frontend directory:
      ```bash
      cd frontend
      ```
    - Install dependencies:  
      ```bash
      npm install
      ```
    - Start the development server:  
      ```bash
      npm run dev
      ```

---

## <span style="color: #6DA7D8"> Technologies Used

- **<i>Django</i>**: Backend framework for creating robust and scalable REST APIs.
- **<i>Django REST Framework (DRF)</i>**: Used to build and handle the API endpoints for the backend.
- **<i>React</i>**: Frontend library for creating an interactive user interface.
- **<i>Axios</i>**: Used in the frontend to handle HTTP requests.
- **<i>Bootstrap</i>**: For styling and responsive design in the frontend.
- **<i>NewsAPI</i>**: External API used to fetch real-time news data, including articles, authors, descriptions, and publication details, which are processed and visualized in the application.
