# Movie-Search-Application-using-The-Movie-Database-TMDb-API
We will use Flask as the Python server-side technology to build the Movie Search Application using The Movie Database (TMDb) API. Flask is a lightweight web framework that makes it easy to create web applications. I will also use HTML, CSS, and JavaScript for the front end to create an intuitive user interface.

We'll use Flask as the server-side technology for handling API requests and interacting with the TMDb API to implement the movie search application with a Python back end and an intuitive front end.

Front-end:

HTML and CSS:

Create an HTML file with the user interface elements, such as an input field and a search button, where users can enter their movie search queries.
Use CSS to style the user interface and make it visually appealing. Ensure the design is responsive and adapts to different screen sizes.

JavaScript:
1. Use JavaScript to handle user interactions and capture the movie search query when the user clicks the search button.
2. Perform input validation to ensure the user has entered a valid movie search query.
3. Use JavaScript's fetch API to send an HTTP request to the back-end server with the user's query.
4. Process the response from the server and dynamically update the front end to display the search results in an organized manner.

Back-end: Server Setup:

Use a Python web framework like Flask or Django to create a back-end server.
Install the necessary Python packages using pip.
API Integration:

Obtain an API key from TMDb (The Movie Database) API by signing up for an account on their website.
Create a server route or function that will handle the incoming request from the front end and communicate with the TMDb API.
Use the requests library in Python to make HTTP requests to the TMDb API, passing the user's movie search query as a parameter.
Receive the search results from the TMDb API.

To install Flask and Requests using pip, open your command-line interface (e.g., Terminal on macOS or Command Prompt on Windows) and run the following commands:
1. Install Flask:   pip install Flask
2. Install Requests:  pip install requests

project_folder
  - app.py
  - templates
    - index.html
  - static
    - styles.css
    - script.js

  run the Flask server using python app.py
  access the application at http://127.0.0.1:5000 in your web browser.
