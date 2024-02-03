## https://github.com/Existance29/FED-Assignment-2
# JSB Tech
This website focuses on e-commerce with gamification features. This website sells gaming-related gear, such as gaming mice, keyboards, audio devices and PCs. The gamification revolves around a lucky draw, where users can earn different items, such as credits and products. To earn the currency spent on the lucky draw, users can play the in-site games. The better they do on the games, the more draws they earn. When purchasing items, users can also earn additional draws based on how much they spend ($50 = 1 draw)

##Important note
The API used (restdb) has a API request limit of 500 per day, since we are using the free plan. Once the limit is reached, the API will fail
## Design Process
The target audience are youths who are interested in gaming-related technology.

Instructions:
the user audience intent and purpose.
● Who the website is catering for? Value that it is providing to users
● What is the website catering for?
Provide us insights about your design process, focusing on who this website is for, what it is that they want to achieve and how your project is the best way to help them achieve these things.

In particular, as part of this section we recommend that you provide a list of User Stories, with the following general structure:

As a user type, I want to perform an action, so that I can achieve a goal.
This section is also where you would share links to any wireframes, mockups, diagrams etc. that you created as part of the design process. These files should themselves either be included as a pdf file in the project itself (in an separate directory) Include the Adobe XD wireframe as a folder. You can include the XD share url.

## Features
### Existing features
 - Account creation (logging in, signing in, database)
 - Account settings (change details, view inventory)
 - Product view (view different products in each category and view products' details)
 - Cart (add items to cart, view amount payable)
 - In-site games (2d aim trainer, type trainer, snake)
 - Lucky draw (spend draws, get rewards)

### Features to implement
 - Checkout (prompt for credit card details, order confirmation)
 - 

## Testing
 ### Navigation
 - From any page, clicking on the top navigation bar should redirect the user to the associated page. (From left to right: home, products, about, games, profile, cart)
 - From the products page, clicking on a product category should redirect to the associated product category
 - From the product category page, clicking on a product should redirect to the product-details page with the information of the product
 - The back button on the products category and products details page should bring the user back to the previous page
 - Clicking the play icon on any of the games in the games page should redirect to the associated game
 - Clicking the exit button after playing a game should redirect back to the games page
 - After clicking the check out button on the carts page, the user should be sent to the home page
### Log-in/Regristration
 - When clicking on any page that use an account, the website should redirect the user to the login page
 - When logging in, only allow the user to log in if the username and password is correct and the account exists
 - When registering, accept only valid entries (no blank inputs, no already registered emails)
### Database
 - After playing a game/checking out, the number of pulls the user earns should be reflected in the game and profile pages
 - After drawing on the lucky draws, the credit and shipping coupouns earned should be saved and reflected in the profile page
 - The number of draws a user has done should be saved. This can be tested by tracking the guarantee system (every 20 draws gurantees a rare or above, every 120 is a ultra rare)
 - Draws spent should be saved and reflected in the game profile pages
 - Any details changed in the profile page should be saved and reflected
 - In the product category page, only the products for their respective category will be displayed. There be at least one product per category
 - Clicking the "log out" button on the profile page logs the user out, they will be redirected to the login page when nessecary
 - When registering, a new account should be saved. The account should be accessible on subsequent log in attempts

### Draws
 - When doing a lucky draw, the items obtained should be displayed
### Game
 - Every game should have an end overlay screen, with an exit button

## Technologies Used
 - [Animation on scroll](https://michalsnik.github.io/aos/)
 - [Jquery](https://jquery.com/)
 - [Bootstrap](https://getbootstrap.com/)
 - [Boxicons](https://boxicons.com/)
 - [Font Awesome](https://fontawesome.com/)
 - [RestDB](https://restdb.io/)

## Credits: 
### Tutorials/External code
#### The code has been modified to fit personal programming and design preferences
 - [Snake game](https://www.youtube.com/watch?v=wM7eMJ26kc8)
 - [Typing test game](https://www.youtube.com/watch?v=Hg80AjDNnJk)
 - [Product zoom](https://stackoverflow.com/questions/40314220/hover-an-image-and-show-a-zoomed-version-of-an-area-around-the-cursor-in-a-canva)

### Media
- https://resource.logitechg.com/w_1800,h_1800,c_limit,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/plp-hero/hero-gaming-keyboards-desktop.jpg?v=1


- [Home-slideshow-2](https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.behance.net%2Fgallery%2F60784401%2FLogitech-Shadows&psig=AOvVaw1HkVAl4zjuP0-7fg_QGMOy&ust=1705986624189000&source=images&cd=vfe&opi=89978449&ved=0CBMQjhxqFwoTCNjBvsmd8IMDFQAAAAAdAAAAABAD)

- [Home-slideshow-3](https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.razer.com%2Feu-en%2Fpc%2Fgaming-laptops&psig=AOvVaw3sFLn6svb4QLEertcaqWbC&ust=1705986678588000&source=images&cd=vfe&opi=89978449&ved=0CBMQjhxqFwoTCOjg0OSd8IMDFQAAAAAdAAAAABAX)

- Products:

