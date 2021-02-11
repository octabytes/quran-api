# quran-api
NodeJs Quran API

# Run Local
First of all you should have to install the Firebase CLI

`npm install -g firebase-tools`

Clone repository 

`git clone https://github.com/octabytes/quran-api.git`

Install require packages

`npm install`

Move into firebase dir

`cd quran-api/firebase`

Run local Firestore

`firebase emulators:start --only firestore --import=./cache`

Your emulators start running on [http://localhost:4000/firestore](http://localhost:4000/firestore)


Run API

`npm start` or watch `npm run watch`

Open in browser

[http://localhost:5000/v1/welcome](http://localhost:5000/v1/welcome)