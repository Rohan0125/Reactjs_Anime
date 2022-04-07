# Simple React JS Project

## What is the use of this Repo

This Project is a Simple ReactJS Project which demonstrates the following
1. Creating a Component in React
2. Making HTTP calls
3. Communicating between parent and child component
4. Using material ui along with React
5. Using Basic Routing in React

The project Template can be used to build bigger projects

## Prerequisites

### Install Node JS
Refer to https://nodejs.org/en/ to install nodejs

### Install create-react-app
Install create-react-app npm package globally. This will help to easily run the project and also build the source files easily. Use the following command to install create-react-app

```bash
npm install -g create-react-app
```
<!-- ## Live Application URL

The Application is deployed in urlgoeshere

Click on the link to see the application -->

## Cloning and Running the Application in local

Clone the project into local

Install all the npm packages. Go into the project folder and type the following command to install all npm packages

```bash
npm install
```

In order to run the application Type the following command

```bash
npm start
```

The Application Runs on **localhost:3000**

## Application design

#### Components

1. **Home** Component : This Component displays a list of anime. This Component gets the data from a API using axios.

2. **Details** Component : This Component Displays the details of the selected anime.

3. **Header** Component : This is a simple navbar used in webpage.

4. **Cards** Component : This Component is used to display the image and title of the anime on Home page. 

#### HTTP client

**axios** library is used to fetch data from API.

#### URL

The application has just Two url / and /details which ties to *Home* Component and *Details* Component

## Resources

**create-react-app** : The following link has all the commands that can be used with create-react-app
https://github.com/facebook/create-react-app

**ReactJS** : Refer to https://reactjs.org/ to understand the concepts of ReactJS

**Material ui** : Refer to https://mui.com/ to understand how to use Material ui

**Axios** : Refer to https://axios-http.com/docs/intro to understand about Axios

**react-router-dom** : Refer to https://v5.reactrouter.com/web/guides/quick-start
