# Burger Shop
The power of handlebars and an ORM brings delicious burgers right to the monitor, just waiting to be eaten. A user can open this webpage to input their own name for a burger, which is stored with mysql. A button can be used to devour these burgers after they are added and listed, which changes the burger's mysql properties and updates the webpage. 

## Purpose and Function
This website has little true function, but serves as a guideline for server/client interactions within a database. A user accessing the website will see all the burgers within a mysql database listed using handlebars and AJAX get, and has the opportunity to add their own using AJAX post. If a user clicks the button to devour each burger, an AJAX put will update the Boolean value in mysql of 0 (not devoured) to 1 (devoured).

## File Infrastructure
### Config
* connection.js: requires mysql and creates and exports connection. To install your own version of this app, you will need to edit some of the connection object properties. This file has the most direct connection to the database, and its connection export is used by the orm.js file.
* orm.js: This file creates functions to fill in mysql variables and then creates a orm constructor. This is exported to burger.js to create CRUD (no delete in this case) functions and connection queries with dynamic inputs. 

### Controllers
* burger_controller.js: This requires express and the Router within the express package, as well as the burger.js folder within models. This is used to run get, post, and put methods from the burger.js model and orm.js constructor. 

### Database
* schema.sql: While this file has no functioning code, the text within can be directly copied over to a mysql database to quickly setup burgers_db
* seeds.sql: This file is similar to schema and only needs to be copied over to a mysql database. This holds the example data used for the testing and creation of this program.

### Models
* burger.js: Requires orm.js to fit CRUD functions to the specific table data used for this database. These functions take info from the client side to run copy, post, and put within the mysql database. 

### Public/Assets
* css: burger_style.css contains a few client side visual effects for the uneaten and eaten burgers.
* images: contains image used for home page.
* js: Contains front-end code called by the main.handlebars. This holds the on click events for the devourIt buttons and the new burger button. 

### Views
* layouts/main.handlebars: Holds all outside script links and usual HTML formatting, like the head block. 
* index.handlebars: holds dynamically loaded info from database using handlebars. 

### BURGER
* server.js: Connects to PORT 8080, and requires express and express-handlebars. Running this file in Node will begin entire program, marked by a console.log listener. 



