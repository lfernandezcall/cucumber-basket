##INSTRUCTIONS
To install the project in oyur computer is very simple. Only entering _npm install_ the scripts makes everything for you.
You need to create an _.env_ archive with the **PORT=3000** and the **DB_URL=mongodb://admin:admin100@ds151631.mlab.com:51631/test_skylab**
To have acces to the remote database.


To start with the project in development mode you must "start" the server whit _mongod --dbpath ~/data/db_, after "run" the aplication (_nodemon server/app_).
After that we need to _build_ the _app.js_, you must enter by console: _build:js_ (it is make the app) and _build:js:watch_ (to "listen the changes in the code").
Also you must "start" the server whit _mongod --dbpath ~/data/db_