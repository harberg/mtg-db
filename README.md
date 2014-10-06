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

#### Current Issues
1. Adding a file upload for the csv that then updates the DB.
From the mongo shell this is a breeze, just use mongoimport. A small example of the formated csv is in the root directory called cardsDB.csv. This matches the monoogse schema. There is an add a card page that can upload on document at a time to the collection.