# Space REST API

This project was created to be a REST API for my [Space Frontend Repository](https://github.com/juliannehalversen/Space-Frontend). Follow steps 1-3 to start the server for the front end to access. There is also more documentation below to test each endpoint via Postman.

## How to use

### 1. Clone project to desired location

```
git clone https://github.com/juliannehalversen/Space-REST-Server.git
```

### 2. Install project dependencies and start server

```
cd Space-Frontend
npm install
npm start
```

### 3. Open Frontend OR test in Postman

#### [Click here for the frontend repository](https://github.com/juliannehalversen/Space-Frontend). 


### Testing in Postman

#### GET Requests
ALL ITEMS: hit this endpoint in Postman: http://localhost:3000/admin/getAllGalaxies

ONE ITEM: hit this endpoint in Postman http://localhost:3000/admin/single-galaxy/5e9e3380474cbc605dd1af8f
Note: the "5e9e3380474cbc605dd1af8f" is the ID of the item, you can replace it with a different ID, it's just there for testing purposes.

#### POST Requests

CREATE ITEM: hit this endpoint in Postman http://localhost:3000/admin/add-galaxy. In the body of the POST request under x-www-form-urlencode enter desired values for the category, name, constellation, name origin, and distance.

UPDATE ITEM: hit this endpoint in Postman http://localhost:3000/admin/edit-galaxy. Just like creating an item add the values in the body of the POST request. In addition to the above fields, also add the ID of the item you wish to edit.

DELETE ITEM: hit this endpoing in Postman http://localhost:3000/admin/delete-galaxy. Enter the item ID of the item you want to delete in the body of the POST request under the x-www-form-urlencoded option. 






