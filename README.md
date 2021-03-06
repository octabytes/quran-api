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

`cd quran-api/firebase` This is not upto date

`cd ../hadith-api/firebase`

Run local Firestore

`firebase emulators:start --only firestore --import=./cache`

Your emulators start running on [http://localhost:4000/firestore](http://localhost:4000/firestore)

Run API

`export FIRESTORE_EMULATOR_HOST="localhost:8080"`

`npm start` or watch `npm run watch`

Open in browser

[http://localhost:5000/v1/welcome](http://localhost:5000/v1/welcome)

# Documentation

1. Get `Ayah` by `id`
   Id made with **surah number** and **ayah number** for example `1-2` which means
   first surah and second ayah.

`http://localhost:5000/v1/ayah/:id`

2. Get `Ayah` by Ayah number

`http://localhost:5000/v1/ayah/number/:number`

3. Get list of `Ayah` by surah number

`http://localhost:5000/v1/surah/:number?`

4. Get surah list

`http://localhost:5000/v1/surah/list`

### Paginate data

Using Cursor
`http://localhost:5000/v1/ayah/surah/?cursor=query_cursor`

Using Offset
`http://localhost:5000/v1/ayah/surah/1?offset=30`

### Max result

By default max results are 30

`http://localhost:5000/v1/ayah/surah/1?maxResult=5`

### Direction

Direction is used to get Ayahs from start or from end, for example get surah 2 first 5 ayahs

`http://localhost:5000/v1/ayah/surah/1?direction=start`
