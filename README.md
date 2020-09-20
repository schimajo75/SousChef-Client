# souschef-client
A web app providing a cooking dashboard that compiles and centralizes recipes and meal prep resources.

SousMe enables home chefs to search a database of recipes and compile a list of favorites. It was designed for users that enjoy the process of achieving continual improvement of "favorite meals" through trial and error and improvisation.  SousMe is designed to be used as an assistant during the cooking process and provides:

- multiple asynchronous timers to track cook times of items on different burners, ovens, etc
- a Notes section so that individual users can keep a running commentary on specific recipes over multipple cooking attmepts to track improvements and successful improvisations
- a wine pairing search function that uses the Spoonacular API to suggest a selection of wines that match the main protion of the meal being prepared
- a measurement converter that enables a user to detemrine the equivalent of any unit of measurement in any other unit of measurement (e.g grams to ounces)

To use:

// clone backend first
$ git clone https://github.com/schimajo75/SousChefAPI.git

// cd into backend folder
$ cd SousChefAPI

// install dependencies and start the server
$ bundle && rails s

// clone frontend repository
$ git clone https://github.com/schimajo75/souschef-client.git

// cd into the repository
$ cd souschef-client

// install dependencies and run the app
$ npm i && npm s
