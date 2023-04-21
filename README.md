# Flower to the People

#### By E. Luckie ☀️

#### This site was created as a tool for a local business to keep track of inventory levels of their products. Users are able to add/restock items, see a list of items available, "sell" items (decrement stock levels), and delete items.

## Technologies Used

* React
* JSX
* JavaScript
* Markdown
* Drawio
* Git

## Description
You are only expected to add CREATE, READ, and UPDATE functionality, though you are welcome to implement DELETE functionality as well. Here are some user stories to get you started. The application should have the following functionality:

* As a user, I want to see a list/menu of all available types of coffee beans.
* For each item, I want to see its name, origin, price, and roast (light, medium, or dark) of the coffee bean. (You are welcome to include anything additional that is relevant to the product your store carries.)
* As a user, I want to submit a form to add a new burlap sack of coffee to the inventory.
* As a user, I want to be able to click on a burlap sack to see its detail page.
* As a user, I want to see how many pounds of coffee beans are left in a burlap sack. A burlap sack has roughly 130 pounds.
* As a user, I want to be able to click a button to sell a pound of coffee beans. This should decrease the number of pounds left by 1. The number of pounds in a sack of coffee beans should not be able to go below 0.


## Site Diagram

![site diagram](src/img/fttp-site-diagram.png)


## Component Diagram

![component diagram](src/img/fttp-components.png)


## Setup/Installation Requirements

1. Clone this repository to your desktop
2. Navigate to the top level of this directory in your computer’s terminal
3. Run the code ```npm install``` in your terminal to install the necessary packages and plug-ins
4. Run the code ```npm run start``` in your terminal to start the application in development mode and open the project in your web browser


## Known Bugs

* No known bugs.


## Stretch Plans

* As a user, I want the option to edit a coffee sack's properties after entering them just in case I make a mistake.
* As a user, I want to be able to delete a coffee sack.
* As a user, I want a coffee sack to update to say "Out of Stock" once it's empty.
* As a user, I want coffee sacks with less than 10 pounds to include a message that says "Almost Empty" so I can buy a pound of it before it's gone!
* As a user, I want to have coffee prices to be color-coded for easy readability. This could be based on their price, their origin or roast, or the amount of pounds left.
* As a user, I want this application to be nicely styled. (Use stylesheets and CSS objects!)


## License

MIT License

Copyright (c) 2023 Luckie


____________________

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).