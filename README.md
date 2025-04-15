# Movieflix GPT

- Create React App
- Configured Tailwind
- Header
- Routing of App
- Login Form
- Signup Form
- Form Validation
- useRef Hook
- Firebase setup
- Deploying app to production using firebase
- Create Signup functionality
- Implement Sign in User API
- Created Redux store with userSlice
- Implemented Sign out
- Update Profile
- Fixed the below bugs
  - Display name and profile picture update
  - If the user is not logged in redirect /browse to login page and vice versa
- Unsubscribed to the onAuthStateChanged callback

# Features

- Login/Signup
  - Sign In/Sign up Form
  - redirect to Browse page after login
- Browse (After authentication)
  - Header
  - Main Movie
    - Trailer in background
    - Movie title and description
    - Movie suggestions
      - Movie lists \* N
- MovieFlix GPT
  - Search Bar
  - Movie suggestions

# Deploying App to Firebase and setting up authentication

- Go to https://console.firebase.google.com/
  - Select Create a Firebase project and give your project name.
  - Once the project setup is finished do below steps
    - Install firebase into your project `npm install firebase`
    - Create a new file under utils(firebase.js which i've created) and paste the config from firebase.
    - Go to the project overview in firebase console and search for Authentication
      - Select the sign-in method you need and enable it
    - Run `npm install -g firebase-tools`
    - Run `firebase login`
    - Run `firebase init`
      - Select the option: for Firebase Hosting and (Optionally) setup GitHub Action deploys
      - I chose Use an existing project option and selected my project from the list.
      - Give public directory as "build"
      - Choose "No" for Configure as single-page app(rewrite all urls to /index.html)
      - Choose "No" for Setup automatic builds and deploys with GitHub
- Run `npm run build` for creating a production build which needs to be deployed
- Run `firebase deploy` to deploy the code (My project live URL: https://movieflixgpt-7b791.web.app)
