# Haikyu - Chat Application 
Haikyu is chat application build with the power of MERN Stack.

## Installation Guide

### Requirements
- [Nodejs](https://nodejs.org/en/download)
- [Mongodb](https://www.mongodb.com/docs/manual/administration/install-community/)


It is importent to change the name of environment variable file
Now rename env files from .env.example to .env


Now install the dependencies
```shell
cd server
yarn
cd ..
cd public
yarn

cd main
node
```
We are almost done, Now just start the development server.

For Frontend.
```shell
cd public
yarn start
```
For Frontend main page.
```shell
cd main
npm run run
```
For Backend.

Open another terminal in folder, Also make sure mongodb is running in background.
```shell
cd server
yarn start
```

Once all the setup done open http://localhost:9000
you will see the home page where will see the chatbot by botpress for basic querry and on the shop details page you can chat with the admin.
