
## Detailed steps on how to run the application locally in Windows


* MongoDB/Nodejs Configuration
  
    * Download and install NodeJS and mongoDB

    * Create this directory structure **C:\data\db**

    * Add **bin** folder from MongoDB installation directory, add it to the *PATH* env variable .
   
    * Download The MongoDB Database Tools from https://www.mongodb.com/try/download/database-tools?tck=docs_databasetools and download the zip file 
    
    * Extract the zip in  C:\ drive 

    * under this zip, add **bin** folder, to the *PATH* env variable    

* Running MongoDB server and importing database
    * Open cmd and run the MongoDB deamon using this command:
       
        ```bash
        .\mongod.exe
        ```

    * Now we need to create the database and its collections, open cmd run the MongoDB client
        ```bash
        .\mongo.exe
        ```

    * From the mongo shell that appears, run the following commands one after another

        ```bash
        use social_network_db
        db.createCollection('users')
        db.createCollection('questions')
        db.createCollection('answers')
        db.createCollection('topics')
        ```

   Download the project into the filesystem 

* Unzip it

* Now we need to import the data into the mongodb database collections

* Open a terminal & go to the downloaded project's directory & run the following commands one after another
    ```bash
    mongoimport --db social_network_db --collection users --drop --file ./mongodb-database/users.json --jsonArray
    ```

    ```bash
    mongoimport --db social_network_db --collection questions --drop --file ./mongodb-database/questions.json --jsonArray
    ```

    ```bash
    mongoimport --db social_network_db --collection answers --drop --file ./mongodb-database/answers.json --jsonArray
    ```
    
    ```bash
    mongoimport --db social_network_db --collection topics --drop --file ./mongodb-database/topics.json --jsonArray
    ```
* Always from the project's directory, run 
    ```bash
    npm install
    ```
    to install npm dependencies

* ALways from the project's directory, run:
    ```bash
    npm run startdev
    ```
    To run the app

* go to http://locahost:3000

   
