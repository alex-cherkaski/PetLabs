# PetLabs

# App Description
Our web app is an online pet care game in similar fashion to the old tamagotchi toys. Users can play with their pets, purchase new pets, and purchase items for their pets. Administrators can add and edit pets and items, as well as edit regular user information.

# Some game terminology:
-	Pet Type: a pet type represents a particular type of pet that the user can own. For example, a blob. Each pet type has a name and a set of attributes that dictate how fast their attributes (such as strength or speed) will grow when a particular item is applied to them.
-	Pet: a pet is an instance of a pet type that is owned by a user. For example, a user owns a pet of type ‘Fireball’ named Lily.
-	Item: an item is something that can be applied to a pet to train, feed, or play with the pet. For example, a book can train the pet’s intelligence.

# Logging into the app
Our web app was deployed online through Heroku.<br />
Use the following link to access the app.<br />
https://evening-beyond-09613.herokuapp.com/login<br />

The login page should now be visible.<br />

# Running the app locally
- Clone the master branch
- Inside `team11/` run `npm i`
- Inside `team11/client` run `npm i`
- Inside `team11/client` run `npm run build`
- Inside `team11/` run `node server.js`
- In your web browser go to `http://localhost:3001/` and test out the app.

# How To Use The App

## Admin Views
- To login as an administrator type in ‘admin’ for username and ‘admin’ for password and click the ‘Log in’ button.
- You should now enter the admin dashboard page. Here the admin can edit user data (including the pets they own such as editing their attributes or deleting them entirely. More about this is in the Editing an Existing User section), edit different pet types, add new pet types, edit exiting pet items, and add new pet items.

## Adding A New Item
- To add a new item, click on the ‘items’ picture.
- Then in the items list page add click on the ‘plus’ icon at the top right corner of the page.
- Type in the name of the new item and edit the item’s attribute in the table below.
- Then click on 'plus' icon to randomly select sprite for the new item.
- Note: if the name of the item or if the sprite is not specified, an item cannot be create.
- When you are happy with your new item click the ‘save’ icon at the top right corner of the page. This will take you back to the admin dashboard page.

## Editing an Existing Item
- To edit an existing item click on the ‘items’ picture. This will take you to the item list page.
- In the search bar, type in the name of the item that you wish to edit. You can even choose the newly created item from above.
- Once the correct name is typed in, press enter key. This will redirect you to the item edit page.
- Note: the search bar is case insensitive, but if an incorrect name is typed in, no redirection will occur. Instead an alert message will appear informing you that no such item exists.
- Another way to select an item to edit is clicking on specific item on the item list. This will redirect you to the item edit page.
- In the item edit page you can change the name, price, and item properties by typing in different values in the textboxes. 
- Once you are happy with your changes you can click the ‘save’ icon at the top right-hand corner of the page. 
- You can always return to the item list page and select the edited item to review the changes you made above. 

## Creating a New Pet Type
- To create a new pet in the user admin dashboard page, click on the ‘Pets’ image. This will take you to the pet list page.
- In the pet list page click on the ‘plus’ icon located at the top of the right-hand corner of the screen. This will take you to the create new pet page.
- In the create new pet page, enter the name of the new pet type, as well as the growth rate of each attribute and the price of the pet.
- Then click on 'plus' icon to randomly select sprite for the new pet type.
- Note: if the name of the item or if the sprite is not specified, an item cannot be create.
- Once you are happy with your choices click the ‘save’ icon located at the top right-hand corner of the screen. This will save your changes and take you back to the admin dashboard page.

## Editing an Existing Pet Type
- In the admin dashboard page go to the pet type list page by clicking on the ‘Pets’ picture. 
- In the search bar, type in the name of the pet type that you wish to edit. You can even choose the newly created pet type from above.
- Once the correct name is typed in, press enter key. This will redirect you to the pet type edit page.
- Note: the search bar is case insensitive, but if an incorrect name is typed in, no redirection will occur. Instead an alert message will appear informing you that no such pet type exists.
- Another way to select a pet type to edit is clicking on specific pet type on the pet type list. This will redirect you to the pet type edit page.
- In the edit pet type view you can rename the pet type, change its associated attributes and the cost of the pet in the store. 
- Once you are happy with your changes you can click the save icon located on top right corner.

## Editing an Existing User
- In the admin dashboard page, go to the user list page by clicking on the ‘Users’ picture.
- In the user list page, type in the name of the user that you wish to edit and press enter key. This will redirect you from the admin view to the edit user view.
- Note: the search bar is case insensitive, but if an incorrect name is typed in, no redirection will occur. Instead an alert message will appear informing you that no such user exists.
- Another way to select an user to edit is clicking on specific user on the user list. This will redirect you to the user edit page.
- In the edit user view, you are provided with selected user's password and gold balance. Values for these fields could be modified.
- You are also provided with the list of pets owned by the selected user along with each individual pet's stats. Stats of user owned pets could be modified.
- You could remove a pet from the user. To do so, click on remove button beside pet's id. This will mark the pet for removal. Then click on the "save" icon located at top right-hand corner of the screen.
- You are also provided with the list of items owned by the selected user, along with bonuses each item gives to user's pets. These bonus values can't be modified in this view. They could only be changed at item list page.
- However, you could remove an item from the user. To do so, click on remove button beside item's id. This will mark the item for removal. Then click on the "save" icon located at top right-hand corner of the screen.
- To save the changes made to selected user's password, gold, and user's individual pets, click on the "save" icon located at top right-hand corner of the screen.

## Admin Side Menu
- Every admin page view also has an admin side menu. Clicking on the logo redirects to the admin dashboard; clicking on the users, pets, and items texts will redirect to their respective admin list views. Clicking the logout button will logout from the admin profile and redirect to the login page. 

## User Views
- To login as an user, type in ‘user’ for username and ‘user’ for password and click the ‘Log in’ button.
- You may also sign up with a new username. Usernames must be unique, so an existing username will not work.
- You should now enter the user dashboard page. Here the user can choose a pet to interact with, and use the side menu to access store to buy items, setting to change personal information, or access help menu to open a manual.
- You can also access the Create Pet view from the user dashboard page with the "Add New" component.

## Creating a Pet
- You can create a pet if you have enough gold. Each pet type costs a different amount of gold in order to acquire it.
- You can see all of the choices for pet types. Click on one to select it.
- To see the selected pet type, it will appear at the top. 
- Enter a name to create the pet.

## Interacting With Pets
- To interact with a specific pet, click on one of the available pets from user dashboard page. You will be redirected to user pet care view.
- Once in user pet care view, selected pet will start to starve. A pet that's been left to starve for a long time will not only grow unhappier, but also die from starvation. 
- To prevent your pet from starving, you need to feed your pet. To do so, you must click on "feed" button.
- To increase your pet's happiness, you need to play with your pet. To do so, you must click on "play" button.
- Playing with your pet will also grant you gold, which you can use to buy items from the store. Your current gold is displayed on the screen for convenience. 
- You could use items you bought from the store on your pet. To do so, you must choose one of the available items from the drop down menu, and click on "Use item" button. 
- Depending on your item, one or more of three stats (intelligence, speed, or strength) will increase. Items could also increase your pet's happiness or fullness.
- Your items will not be consumed. That is, it could be used as much as you would like to.

## Purchasing an Item
- To purchase an item, click on "Store" option from the side menu located at left-hand side of the screen. You will be redirected to store view.
- Once in store, you could select on one of the available items and purchase them by clicking on "Buy This" button.
- Note that you cannot buy an item if you do not have enough gold balance. When you try to buy an item that costs more than your current gold balance, you will be reminded that you do not have enough money.
- Note that you cannot buy same item. When you try to buy an item you already own, you will be reminded about this fact.
-  When an item is bought, the amount will be deducted from your total gold balance.

## Accessing Help When Lost
- To access guidance or manual for this game, click on "help" option from the side menu located at left-hand side of the screen. You will be redirected to help view.
- The help view will provide you very condensed, yet concise version of this manual.

## Settings
- Here you may view your username and a censored version of your password.
- You can change your password on this view. Enter the old password and new password, and confirm it in order to change. An alert will show if you have successfully changed your password.

# Overview of the Routes

All of the routes are defined in server.js

## Item Routes
The following routes allow the app to modify item information in the database.

### POST Route to /items
This route is used to add an item to the database.

An example of valid JSON could be the following (there are more JSON samples in folder ModelTestInputs/Items/).

{<br />
    "name": "Book",<br />
    "strength": 0,<br />
    "speed": 0,<br />
    "intelligence": 5,<br />
    "happiness": 2,<br />
    "fullness": 0,<br />
    "price": 2000,<br />
    "imgURL": "Book"<br />
}<br />

Note that "imgURL" must be either of "Dumbbell", "Book", or "Treadmill".

POST request to /items is mainly used in our app when an admin is creating a new item. For example, during a new item creation process, POST request is sent when admin clicks on the save button. In this case, admin's input on the app determines the data being saved on the database.


### GET Route to /items
This route is used to get all of the items from the database. 

GET request to /items is mainly used in our app when full item data is required. For example, app makes GET request when listing all items for the admin so the admin could choose an item to edit. It is also being called for users when populating user owned items in pet care page.


### GET Route to /items/:id
This route is used to get a specifc item with :id as its id from the database.

GET request to /items/:id is used in our app when getting specific item information. For example, on admin item edit view, this GET request for the selected item will be called to load its current item stats. 

This route also adds the id of the most recent item that was retrieved to the session cookie to keep track of.


### PATCH Route to /items/:id
This route is used to update fields of a specifc item with :id as its id from the database.

PATCH request to /items/:id is used when the app needs to update the information of a specific item. For example, on admin item edit view, this PATCH request for the selected item will be called when admin wishes to save changes made to item's properties.


### DELETE Route to /items/:id
This route is used to delete a specifc item with :id as its id from the database.

DELETE request to /items/:id is used when the app needs to completely remove a specific item. However, because neither the admin nor the user has an ability to delete an item, DELETE on specific item is actually never used in our app.

## Pet Type Route
The following routes allow the app to modify pet type information in the database.

### POST Route to /pettypes
This route is used to add a pet type to the database.

An example of valid JSON could be the following (there are more JSON samples in folder ModelTestInputs/PetTypes/).

{ <br />
    "name": "Blob", <br />
    "neutralImage": "blob_neutral", <br />
    "happyImage": "blob_happy", <br />
    "sadImage": "blob_sad", <br />
    "strengthRate": 1, <br />
    "speedRate": 1, <br />
    "intelligenceRate": 1, <br />
    "happinessRate": 1, <br />
    "fullnessRate": 1, <br />
    "price": 100 <br />
} <br />

Note that "neutralImage" must be either of "blob_neutral", "fireball_neutral", "flower_neutral", or "petrock_neutral".
Note that "happyImage" must be either of "blob_happy", "flower_happy", "flower_happy", or "petrock_happy".
Note that "sadImage" must be either of "blob_sad", "fireball_sad", "flower_sad", or "petrock_sad".

POST request to /pettypes is mainly used in our app when an admin is creating a new pet type. For example, during a new pet type creation process, POST request is sent when admin clicks on the save button. In this case, admin's input on the app determines the data being saved on the database.


### GET Route to /pettypes
This route is used to get all of the pet types from the database. 

GET request to /pettypes is mainly used in our app when full pet type data is required. For example, app makes GET request when listing all pet types for the admin so admin could choose a pet type to edit.


### GET Route to /pettypes/:id
This route is used to get a specifc pet type with :id as its id from the database.

GET request to /pettypes/:id is used in our app when getting specific pet type information. For example, on admin pet type edit view, this GET request for the selected pet type will be called to load the starting properties of pets with aforementioned pet type.

This route also adds the id of the most recent pet type that was retrieved to the session cookie to keep track of.


### PATCH Route to /pettypes/:id
This route is used to update fields of a specifc pet type with :id as its id from the database.

PATCH request to /pettypes/:id is used when the app needs to update the information of a specific pet type. For example, on admin pet type edit view, this PATCH request for the selected pet type will be called when user wishes to save changes made to the starting properties of pets with aforementioned pet type.


### DELETE Route to /pettypes/:id
This route is used to delete a specifc pet type with :id as its id from the database.

DELETE request to /pettypes/:id is used when the app needs to completely remove a specific pet type. However, because neither the admin nor the user has an ability to delete a pet type, DELETE on specific pet type is actually never used in our app.

## Pet Route
The following routes allow the app to modify pet information in the database.

### POST Route to /pets
This route is used to add a pets to the database.

An example of valid JSON could be the following (there are more JSON samples in folder ModelTestInputs/Pet/).

{ <br />
    "ownerName": "user", <br />
    "petName": "Alex", <br />
    "type": "Blob" <br />
} <br />

POST request to /pets is mainly used in our app when an user is creating a new pet. For example, during a new pet creation process, POST request is sent when user clicks on the "Bring Home!" button. In this case, user's input on the app determines the data being saved on the database. Note that data that's being stored has more information than "ownerName", "petName", and "type". Rest of the fields in pet data is determined by the value of "type". 


### GET Route to /pets
This route is used to get all of the pets from the database. 

GET request to /pets is mainly used in our app when full pet list is required. For example, when loading user owned pets on the user dashboard, app calls GET request to /pets in order to get all of the pets. Then it sorts out the pets according to user's petIdList.


### GET Route to /pets/:id
This route is used to get a specifc pet with :id as its id from the database.

GET request to /pets/:id is used in our app when getting specific pet's information. For example, it is being used when getting information of specific pet information on refresh in user pet care page.


### PATCH Route to /pets/:id
This route is used to update fields of a specifc pet with :id as its id from the database.

PATCH request to /pets/:id is used when the app needs to update the information of a specific pet. For example, when users are interacting with the a specific pet (e.g., playing or giving items), the app sends PATCH request to update aforementioned pet's information.


### DELETE Route to /pets/:id
This route is used to delete a specifc pet with :id as its id from the database.

DELETE request to /pets/:id is used when the app needs to completely remove a specific pet. For example, when user lets go of his/her pet, the app sends DELETE request to remove the selected pet from the data.


## User Route
The following routes allow the app to modify user information in the database.

### POST Route to /users
This route is used to add a users to the database.

An example of valid JSON could be the following (there are more JSON samples in folder ModelTestInputs/Users/).

{ <br />
    "username": "user", <br />
    "password": "user", <br />
    "isAdmin": "false" <br />
} <br />

POST request to /users is mainly used in our app when an user is creating a new users. For example, during a sign up process, app sends POST request to add new user to the database with the information user submitted on sign up page.


### GET Route to /users
This route is used to get all of the users from the database. 

GET request to /users is mainly used in our app when full user data is required. For example, app makes GET request when listing all users for the admin so admin could choose an user to edit.


### GET Route to /users/:id
This route is used to get a specifc user with :id as its id from the database.

GET request to /users/:id is used in our app when getting specific user information. For example, on admin user edit view, this GET request for the selected user will be called to load user's current information.

This route also adds the id of the most recent user that was retrieved to the session cookie to keep track of.


### PATCH Route to /users/:id
This route is used to update fields of a specifc user with :id as its id from the database.

PATCH request to /users/:id is used when the app needs to update the information of a specific user. For example, on admin user edit view, this PATCH request for the selected user will be called when admin wishes to save changes made to user information.


### DELETE Route to /users/:id
This route is used to delete a specifc user with :id as its id from the database.

DELETE request to /users/:id is used when the app needs to completely remove a specific user. However, because neither the admin nor the user has an ability to delete an user, DELETE on specific user is actually never used in our app.


## Login and Logout Routes

### GET Route for /users/login/:username
This route is used to login the user and keep track of the information of wether the user is an admin or not.

We query this route in the login page.

### POST Route for /users/logout/
This route is used to log the user out and destroy the session cookie.

We query this route when the logout button is pressed by the user.

## Cookie Routes

### GET Route for /cookie/itemId
This route is used to retrieve a cookie referencing the id of the last item that was retrieved.

This route is quiried in the AdminItemPage to ensure that upon refreshing the page the item does not disappear.

### GET Route for /cookie/petTypeId
This route is used to retrieve a cookie referencing the id of the last pet type that was retrieved.

This route is quiried in the AdminPetPage to ensure that upon refreshing the page the pet type does not disappear.

### GET Route for /cookie/userId
This route is used to retrieve a cookie referencing the id of the last user that was retrieved.

This route is quiried in the AdminPetPage to ensure that upon refreshing the page the user does not disappear.

### GET Route for /cookie/currPet/:petId
This route is used to set a cookie referencing the id of the last pet that was viewed.

This route is quiried in the UserDashboardPage to ensure that upon refreshing the pet care page, the correct pet is retreieved.

### GET Route for /cookie/currPet
This route is used to retrieve a cookie referencing the id of the last pet that was viewed.

This route is quiried in the UserPetCarePage to ensure that upon refreshing the pet care page, the correct pet is retreieved.

### GET Route for /cookie/userId
This route is used to retrieve a cookie referencing the url of the last view that was retrieved.

This route is quiried in all views to ensure that upon refresh, the user is redirected to the last page they were on.

### GET Route for /cookie/checkSession
This route is used to retrieve a lot of cookie information.

This route is quiried in all views to ensure that upon refresh, the correct states are set.
