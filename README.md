# simple_social_nestjs_ApolloGraphql
#
# Avid Challenge

In this challenge we have to make an application like Instagram. The communication between front-end and back-end must be with GraphQL technology and using ApolloGraphQL library. We have to use nestjs as web framework.

The items listed below make your results better :

- Nice UI design
- Connect application to a database
- Use parcel instead of create-react-app
- Create new posts

## **Getting Started**

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### **Prerequisites**

You need to have these items on your local machine to run this application:

- npm
- node
- mongoClient

### **Installing**

We have two separate project and folder for front-end and back-end.

Back-end

First thing you need to do is making a database with name &quot;ch&quot; in your mongodb. Posts will save in this database in a collection named &quot;posts&quot;. By default database doesn&#39;t have a password. If you want to set your connection string you can edit &quot;app.module.ts&quot; in root folder of back-end project.

In back-end folder enter these commands to install node\_modules

Cd back-end/avid

Npm i

After that you can start back-end server. Default port for back-end is 8000.

For starting the back-end server enter this command in &quot;avid&quot; folder:

Npm run start:dev

Now back-end server is up and for testing you can send a Get request to http://localhost:8000 (if you didn&#39;t change the port) you should receive &quot;Hello World&quot; response. In front-end requests are based on 8000 port so if you want to change this port you have to change some files in front-end projects.

Front-end

Default port for front-end is 3000.for starting the project enter these commands in your command line :

Cd front-end/avid

Npm i

Npm start

After these commands the front-end page will be open in your browser and you can access to homepage by entering the http://localhost:3000 in your browser.

After this step you can see posts in &quot;Home&quot; page and add new post in &quot;new post&quot; page. You should be noticed that for creating new post you can&#39;t upload picture and you should enter a url for post&#39;s picture.

## **Built With**

- [nestjs](https://nestjs.com) - The web framework used
- [Reactjs](https://reactjs.org/) – front-end libary
- [ApolloGraphQL ](https://apollographql.com)- Used to create GraphQL endpoint

## **Contributing**

## **Authors**

- **Poorshad Shaddel**
