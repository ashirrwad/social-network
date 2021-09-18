
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

    * The rest of the steps to import the data and run the app are the same as in Linux

   
