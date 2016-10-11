# FastAndFurious Mobile Controller

## How to Run

### backend-server
* `> cd backend-server`
* `> npm install` (Only the first time)
* `> npm start`

### client-webapp
* `> cd client-webapp`
* `> npm install` (Only the first time)
* `> npm start`

### server-webapp
* `> cd server-webapp`
* `> npm install` (Only the first time)
* `> npm start`

## TODO

### backend-server
* (Done) Run `typings` when `npm install` is run.
* (Done) Run `tsc` before `npm start` is run.

###  client-webapp
* Use token generated in the backend.
* Display reason if registration fails.
* Add 'How To' to welcome screen.
* Add 'Name' input on welcome screen.
* Enlarge buttons.
* Add configuration for backend endpoint and so forth.
* Package with `webpack`.

### server-webapp
* Generate token in the backend.
* Finish and test token single client access.
* Show drivers name.
* (Show drivers current stats.)
* Integrate with [fnf.clients/node](https://github.com/FastAndFurious/fnf.clients) node api.
* Add configuration for backend endpoint and so forth.
* Package with `webpack`.