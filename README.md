# MEAN-Angular2
Steps- 
1. npm init
2.npm install express --save
3. roboMongo user interface for mongo db
4. provide path to folder and type mongod to run db
5. npm install mongoose --save
5. to use mongo db in node.js mongoose package

1. install Angular CLI-
2. ng new client && cd client && ng serve
3. sets up a localhost server -localhost:4200
4. go to client > package.json 

BOTH server is running at end when app complete , make in a single server

once app ready so use -> 
1. ng serve is for developmemnt
2. ng build - compile everything , minify , create nice folder for production
3. go tio angularcli.json we can check from which folder compiling and in which folder minified  and bundled code goes on


now connect app with node server
so rather than in res.send ('hello world' ) ->

Now run on npm start and open in http://localhost:8080/