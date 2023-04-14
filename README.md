# Portfolio Collection
A website where people can upload and manage their portfolios.

## Group Members:
- Batool Ahmed (ba06180)
- Fatima Zehra (fz04316)

## How to run this project:
- Install node
- Run the following command in your terminal after navigating to this app's folder :
    npm run start

## Features of this app:
- Sign in on the app using username and password
    - The two usernames and passwords for this app are:
        1. username = "batool" , password = "hello1"
        2. username = "fatima" , password = "hello2"
- Create Portfolio by adding it's title, content and image
    - You can only create portfolio if you are logged in. If you are not logged in, it will direct you to the login page
- View Portfolios on the Home Page
- Contact page
    - has name, email address, and message fields
    - sends data to a form on https://formspree.io/
    - validates username and email before sending data

## React hooks used in this app
- useState
- useEffect
- useNavigate
- useContext