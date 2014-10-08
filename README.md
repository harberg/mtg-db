## Magic the Gathering Card Database
#### Updateable database that can be easily searched to check the stock of specific cards.
The intent is to have a quick way to search for cards that are instock without have to dig through tens of thousands of physical cards. The database will be updated on a regular basis from a csv that is created by the shops pos system. The pos system is outdated and will not connect to the app to just do the updating automatically.

#### The App uses
1. MEAN stack
2. SASS
  * Bourbon
  * Neat
  * Bitters
3. Grunt
4. Bower
5. csvconverter
5. MongoDB native drivers

#### Needed
1. You will need to create a db.js file in the api folder.
```
module.exports = {
    url: "mongodb://localhost/ancient"
};
```

#### Current Issues
1. Adding a file upload for the csv that then updates the DB.
From the mongo shell this is a breeze, just use mongoimport. A small example of the formated csv is in the root directory called cardsDB.csv. This matches the monoogse schema. There is an add a card page that can upload on document at a time to the collection.

2. Need to figure out how to take the cardsDB.json file and insert it into the DB.

#### Current Status
1. csvConverter is being used to convert the cardsDB.csv into cardsDB.json using readStream and writeStream. This work is currently all being done in the server.js file. The connection to the DB is being done with the MongoDB native drivers.