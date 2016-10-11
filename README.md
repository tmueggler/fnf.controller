# FastAndFurious Mobile Controller

## Configuration

### backend-server
* `server.js`
  * `const PORT` Port the backend service wil be running on.
  * `const TIMEOUT_MS_TOKEN` Time until token will become invalid if not touched.

### client-webapp
* `app/app.config.ts` `const CONFIGURAITON = { ... }`
  * `serviceendpoint` Must point to `backend-server`.

### server-webapp
* `app/app.config.ts` `const CONFIGURAITON = { ... }`
  * `redirecturl` Must point to `client-app`. (Value of QR-Code)

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
* Lower token timeout once client sends touch.

###  client-webapp
* Touch token every `service.tokentimeout / 2`.
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