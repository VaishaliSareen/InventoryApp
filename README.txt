Inventory Application

This is the NodeJs Web application made using ExpressJS, MongoDB / Mongoose, and EJS Templating.
This Web application is based on the MVC's framework which is the Model, View and Controler. Which means that the Controller controls the view/ output using the model.
This Application is based on the two models product and account which are controlled by their respective controllers products.js and index.js.

This web site works using the mongoDb database which is a NO Sql database and uses the JSON objects. moongoose is used to connect the mongodb to the nodeJS application.

Inventory Application had the CRUD concept which means Create, Read, Update and Delete the data. If the user is logged into the application which means the user is active in the database,
he/ she can use the CRUD concept to modify the data. If the user is not logged, he/she can only read the data but will not be able to modify the data. These all are the levels of authentication which
are put by using the passport and the passport packages in npm.

This also has the feature of logging into the database by using the facebook id. This is done by usimg the passport-facebook package.
This package lets you authenticate using Facebook in your Node.js applications.