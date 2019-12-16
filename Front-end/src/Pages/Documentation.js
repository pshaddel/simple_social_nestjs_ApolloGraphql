import React, { Component } from 'react';

class Documentation extends Component {
    render() {
        return (
            <div style={{width:'60%',marginLeft:'20%'}}>
       <p><strong>Avid Challenge</strong></p>
<p>In this challenge we have to make an application like Instagram. The communication between front-end and back-end must be with GraphQL technology and using ApolloGraphQL library. We have to use nestjs as web framework.</p>
<p>The items listed below make your results better :</p>
<ul>
<li>Nice UI design</li>
<li>Connect application to a database</li>
<li>Use parcel instead of create-react-app</li>
<li>Create new posts</li>
</ul>
<p><strong>Getting Started</strong></p>
<p>These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.</p>
<p><strong>Prerequisites</strong></p>
<p>You need to have these items on your local machine to run this application:</p>
<ul>
<li>npm</li>
<li>node</li>
<li>mongoClient</li>
</ul>
<p><strong>Installing</strong></p>
<p>We have two separate project and folder for front-end and back-end.</p>
<p>Back-end</p>
<p>First thing you need to do is making a database with name &ldquo;ch&rdquo; in your mongodb. Posts will save in this database in a collection named &ldquo;posts&rdquo;. By default database doesn&rsquo;t have a password. If you want to set your connection string you can edit &ldquo;app.module.ts&rdquo; in root folder of back-end project.</p>
<p>In back-end folder enter these commands to install node_modules</p>
<p>Cd back-end/avid</p>
<p>Npm i</p>
<p>After that you can start back-end server. Default port for back-end is 8000.</p>
<p>For starting the back-end server enter this command in &ldquo;avid&rdquo; folder:</p>
<p>Npm run start:dev</p>
<p>Now back-end server is up and for testing you can send a Get request to http://localhost:8000 (if you didn&rsquo;t change the port) you should receive &ldquo;Hello World&rdquo; response. In front-end requests are based on 8000 port so if you want to change this port you have to change some files in front-end projects.</p>
<p>Front-end</p>
<p>Default port for front-end is 3000.for starting the project enter these commands in your command line :</p>
<p>Cd front-end/avid</p>
<p>Npm i</p>
<p>Npm start</p>
<p>After these commands the front-end page will be open in your browser and you can access to homepage by entering the http://localhost:3000 in your browser.</p>
<p>After this step you can see posts in &ldquo;Home&rdquo; page and add new post in &ldquo;new post&rdquo; page. You should be noticed that for creating new post you can&rsquo;t upload picture and you should enter a url for post&rsquo;s picture. &nbsp;</p>
<p><strong>Built With</strong></p>
<ul>
<li><a href="https://nestjs.com/">nestjs</a> - The web framework used</li>
<li><a href="https://reactjs.org/">Reactjs</a>&nbsp;&ndash; front-end libary</li>
<li><a href="https://apollographql.com/">ApolloGraphQL&nbsp;</a>- Used to create GraphQL endpoint</li>
</ul>
<p><strong>Contributing</strong></p>
<p><strong>Authors</strong></p>
<ul>
<li><strong>Poorshad Shaddel</strong></li>
</ul>
            </div>
        );
    }
}

export default Documentation;