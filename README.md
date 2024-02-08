## https://github.com/Existance29/FED-Assignment-2
# JSB Tech
JSB Tech is an innovative ecommerce platform dedicated to providing gamers and tech enthusiasts with the latest in gaming gear and accessories. From high-performance keyboards and mice to immersive gaming headsets and cutting-edge gaming PCs, JSB Tech aims to be the one-stop-shop for all gaming needs. Our platform is designed to offer a seamless shopping experience, allowing users to easily find, compare, and purchase the best products to enhance their gaming experience. This website also focuses on e-commerce with gamification features. The gamification revolves around a lucky draw, where users can earn different items, such as credits and products. To earn the currency spent on the lucky draw, users can play the in-site games, mainly being the 2d aim trainer, typing speed test, as well as the 2d snake game. The better their in-game performance, the more draws they get to earn. When purchasing items, users can also earn additional draws based on how much they spend ($50 = 1 draw)

Our mission is to empower gamers by offering a curated selection of the best gaming gear on the market, ensuring they have access to the tools they need to achieve peak performance. Whether you're a casual gamer looking to enhance your gaming setup or a professional esports athlete seeking competitive edge, JSB Tech has you covered.

##Important note
The API used (restdb) has a API request limit of 500 per day, since we are using the free plan. Once the limit is reached, the API will fail
## Design Process
The design process for JSB Tech focused on understanding the needs and desires of the gaming community. We aimed to create a user-friendly platform that makes it easy for gamers to find the gear that fits their gaming style and preferences.

The target audience are (but not limited to) youths who are interested in gaming, and wants to enhance their gaming experience and setup, or are interested in technology and computer hardware.

As a casual gamer, I want to explore the latest gaming accessories, so that I can enhance my gaming setup.
As an esports professional, I want to find high-performance gaming gear, so that I can improve my competitive play.
As a tech enthusiast, I want to compare different gaming PCs, so that I can make an informed decision before purchasing.
As a gift shopper, I want to find popular gaming gear, so that I can buy the perfect gift for my gamer friends.

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
- [Audio-banner-1](https://assets3.razerzone.com/KVAV6hqVqiVqRhMwj1CaI2ADHIg=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhb8%2Fhcb%2F9510181666846%2F230427-blackshark-v2-pro-black-2023-1500x1000-1.jpg)
- [Games-banner-1](https://resource.logitechg.com/w_1800,h_1800,c_limit,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/plp-cameras-lighting/pdp-litra-beam-lx-led-light/banners/litra-beam-lx-feature-5-alt-desktop.jpg?v=1)
- [Games-banner-2](https://resource.logitechg.com/w_420,h_1024,c_limit,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/plp-cameras-lighting/pdp-litra-beam-lx-led-light/banners/litra-beam-lx-feature-5-alt2-mobile.jpg?v=1)
- [Home-slideshow-1](https://images.secretlab.co/theme/common/gaming-chair-secretlab-home-streamer-setup-bg.jpg)
- [Home-slideshow-2](https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.behance.net%2Fgallery%2F60784401%2FLogitech-Shadows&psig=AOvVaw1HkVAl4zjuP0-7fg_QGMOy&ust=1705986624189000&source=images&cd=vfe&opi=89978449&ved=0CBMQjhxqFwoTCNjBvsmd8IMDFQAAAAAdAAAAABAD)
- [Home-slideshow-3](https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.razer.com%2Feu-en%2Fpc%2Fgaming-laptops&psig=AOvVaw3sFLn6svb4QLEertcaqWbC&ust=1705986678588000&source=images&cd=vfe&opi=89978449&ved=0CBMQjhxqFwoTCOjg0OSd8IMDFQAAAAAdAAAAABAX)
- [Keyboard-banner-1](https://resource.logitechg.com/w_1800,h_1800,c_limit,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/plp-hero/hero-gaming-keyboards-desktop.jpg?v=1)
- [Keyboard-banner-2](https://resource.logitechg.com/w_420,h_1024,c_limit,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/plp-hero/hero-gaming-keyboards-mobile.jpg?v=1)
- [Mouse-banner-1](https://assets3.razerzone.com/ZMxKPXVfVJg38jHQWK2IU4t61_o=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh6d%2Fhee%2F9657631080478%2F230914-viper-v3-hyperspeed-black-1500x1000-1.jpg)
- [PC-banner-1](https://images.prismic.io/aftershock-singapore/e27c88a4-86c9-41f8-8839-dbb1d2110732_Astrocore+SLP+KV.png?auto=compress,format)
- [PC-banner-2](https://cdn.shopify.com/s/files/1/0637/0407/2436/files/ASTROCORE_1000x1000_BG.png?v=1700732267)
- [Product-feature-1](https://www.aftershockpc.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0637%2F0407%2F2436%2Ffiles%2FUltimateSeriesIntelExtremePlus.jpg%3Fv%3D1704687204&w=640&q=75)
- [Product-Feature-2](https://www.aftershockpc.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0637%2F0407%2F2436%2Ffiles%2FCOOLER_c4c3bfa9-a952-4e70-830b-09143e3f8755.jpg%3Fv%3D1706090262&w=640&q=75)
- [Product-feature-3](https://www.aftershockpc.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0637%2F0407%2F2436%2Ffiles%2FGPU_79bc7147-6f83-4fbe-bea3-c9848c20fe06.jpg%3Fv%3D1706090262&w=640&q=75)
- [Product-feature-4](https://www.aftershockpc.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0637%2F0407%2F2436%2Ffiles%2FBLACKTFORCEARES_0622e659-cf05-4f3c-b62d-e1f283f2e0a8.jpg%3Fv%3D1706090262&w=640&q=75)
- [About-banner-1](//assets2.razerzone.com/images/pnx.assets/e518afc039675ca9681752617e6631df/new-year-2024-hero-mobile.webp)
- [Gacha-banner](https://blinkmena.qa/cdn/shop/articles/40e100b7401087d4a18c524f1f94bbe1.jpg?v=1671116997&width=1024)
- [mini-banner-audio](https://www.razer.com/eu-en/thx-spatial-audio)
- [mini-banner-mice]()
- [mini-banner-keyboard]()
- [mini-banner-pc](https://www.aftershockpc.com/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Faftershock-singapore%2F6c087942-5d29-4a96-bf5f-f3293ac0f71b_ASTROCORE%2B01.png%3Fauto%3Dcompress%2Cformat&w=1920&q=75)


- Products:  
https://www.amazon.sg/Logitech-G502-Performance-Gaming-Mouse/dp/B07GBZ4Q68  
https://arcus-www.amazon.sg/Logitech-LIGHTSPEED-Wireless-Gaming-Mouse/dp/B07W6HDB55  
https://www.amazon.sg/SteelSeries-62513-Rival-Gaming-Mouse/dp/B08176SM7C  
https://www.amazon.sg/Glorious-Model-Gaming-Glossy-GD-GWHITE/dp/B0822XGXYG  
https://www.amazon.sg/Redragon-M686-Professional-Customizable-Backlight/dp/B0859TTQRN  
https://www.amazon.sg/Redragon-M808-Lightweight-Ultralight-Honeycomb/dp/B089Q7KX8F  
https://www.amazon.sg/Razer-DeathAdder-Essential-Gaming-Mouse/dp/B094PS5RZQ  
https://www.amazon.sg/Razer-DeathAdder-Essential-Gaming-Mouse/dp/B094PS5RZQ  
https://www.amazon.sg/HyperX-Pulsefire-Core-Customization-Programmable/dp/B07H3GFJJ2  
https://www.amazon.sg/Logitech-G502-Performance-Gaming-Mouse/dp/B07GBZ4Q68  
https://www.amazon.sg/Razer-Basilisk-Ergonomic-HyperScroll-RZ01-04000100-R3M1/dp/B097F8H1MC  
https://www.amazon.sg/Logitech-Wireless-Gaming-Esports-Performance/dp/B07GCKQD77  
https://www.amazon.sg/Razer-Basilisk-Ultimate-HyperSpeed-Wireless/dp/B08564NLZG  
https://www.amazon.sg/Glorious-Gaming-Model-Wireless-Mouse/dp/B098RDFP3J  
https://www.amazon.sg/SteelSeries-Apex-RGB-Gaming-Keyboard/dp/B07ZGDPT4M  
https://www.amazon.sg/Redragon-Mechanical-Keyboard-Computer-Equivalent/dp/B016MAK38U  
https://www.amazon.sg/Redragon-K630-Dragonborn-Keyboard-Mechanical/dp/B08Y8NKX6Z  
https://www.amazon.sg/Logitech-920-009495-Tenkeyless-Lightspeed-Mechanical/dp/B085RLZ1C4  
https://www.amazon.sg/Logitech-Mechanical-Gaming-Keyboard-920-010448/dp/B09RZM9FYK  
https://www.amazon.sg/MageGee-Portable-Mechanical-Keyboard-Backlit/dp/B092CHWH1D  
https://www.amazon.sg/RK-ROYAL-KLUDGE-Mechanical-Bluetooth/dp/B0C4GJV23W  
https://www.amazon.sg/Razer-RZ03-03490100-R3M1-BlackWidow-Tenkeyless-Mechanical/dp/B08CHLZVFP  
https://www.amazon.sg/Predator-PO3-640-i712R321TS37-Desktop-i7-12700F/dp/B09TL7GHV2  
https://www.amazon.sg/Redragon-M808-Lightweight-Ultralight-Honeycomb/dp/B089Q7KX8F  
https://www.amazon.sg/Razer-Huntsman-Tenkeyless-Keyboard-RZ03-03940300-R3M1/dp/B097F2KHX4  
https://www.amazon.sg/Logitech-920-008949-G512-Mechanical-GX/dp/B07BVCSRXL  
https://www.amazon.sg/SteelSeries-Tenkeyless-Factor-8-Zone-Illumination-Anti-Ghosting/dp/B09FTNMT84  
https://www.amazon.sg/STGAubron-Desktop-Computer-Bluetooth-Keyboard/dp/B0BK539D4V  
https://www.amazon.sg/CORSAIR-CS-CH-9119014-NA-Mechanical-Gaming-Keyboard/dp/B08W2DY46Q  
https://www.amazon.com/Logitech-Mechanical-Tenkeyless-Detachable-LIGHTSYNC/dp/B07QQB9VCV  
https://www.amazon.com/DIERYA-Mechanical-DK61se-Ultra-Compact-Typist%EF%BC%88White%EF%BC%89/dp/B0B8HPD2VX  
https://www.amazon.com/WolfLawS-High-Precision-Adjustable-Programmable-Ergonomic/dp/B0BD754SLH  
https://www.amazon.sg/Mad-Catz-Authentic-Gaming-board/dp/B084WPF64N  
https://www.amazon.sg/ASUS-ROG-Gasket-Mount-Three-Layer-Hot-Swappable/dp/B0BSL7WW51  
https://www.amazon.com/Womier-Percent-Keyboard-Mechanical-Hot-Swappable/dp/B0BVVYW6L6  
https://arcus-www.amazon.sg/ASUS-TKL-Mechanical-Precision-Quick-Toggle/dp/B08BTY4C62  
https://www.amazon.sg/Razer-Huntsman-Tenkeyless-Gaming-Keyboard/dp/B09C13WYDX  
https://www.amazon.sg/Redragon-K552-RGB-Mechanical-Keyboard-Construction/dp/B019O9BLVY  
https://www.amazon.sg/MageGee-Ultra-Compact-TS91-Waterproof-Mechanical/dp/B08F7GZDT2  
https://www.amazon.com/Mechanical-Keyboard-MageGee-Backlit-Computer/dp/B097BDWXHM  
https://www.amazon.sg/Acer-Predator-PO3-650-i713R321TS46-i7-13700F/dp/B0CJ2V8MCT  
https://www.amazon.sg/Corsair-Vengeance-a8100-Gaming-Dominator/dp/B0CH1HHXLJ  
https://www.amazon.sg/Skytech-Gaming-Shadow-PC-Desktop/dp/B0BRBPH5VW  
https://www.amazon.com/Skytech-Chronos-Gaming-PC-Desktop/dp/B0BL8MWNKR  
https://arcus-www.amazon.sg/Gaming-11900H-Windows-Desktop-Computer/dp/B0B9S69N1S  
https://www.amazon.sg/GA15DK-Desktop-GeForce-Windows-GA15DK-AS776/dp/B08ZRTRLR9  
https://www.amazon.sg/Skytech-Gaming-Chronos-Desktop-Motherboard/dp/B08BLBGF7L  
https://www.amazon.sg/ASUS-Gaming-Desktop-132gb-Black/dp/B0711KCXFZ  
https://www.amazon.sg/Razer-RC21-01400100-R3M1-Tomahawk-Aluminum-Mini-ITX/dp/B08H1YHB5S  
https://www.amazon.com/Desktop-i5-11400F-GeForce-Windows-G10CE-US564/dp/B0B7R15SZ8  
https://www.amazon.sg/STGAubron-Desktop-Computer-Bluetooth-Keyboard/dp/B0BK539D4V  
https://www.amazon.sg/ASUS-ROG-Delta-Headphones-Detachable/dp/B0842W5QBC  
https://www.amazon.sg/CORSAIR-CA-9011217-AP-Stereo-Gaming-Headset/dp/B07Z8WQZVK  
https://www.amazon.sg/Razer-Kraken-Tournament-Gel-Infused-Cushions/dp/B07L54P9HR  
https://www.amazon.sg/ASUS-ROG-II-Moonlight-Connector/dp/B09DC1DJLY  
https://www.amazon.sg/ASUS-noise-canceling-microphone-immersive-incredible/dp/B08DYD5QMV  
https://www.amazon.sg/Earphone-Universal-Reduction-Headset-Microphone/dp/B0CN6W4QV7  
https://www.amazon.sg/Logitech-Earphones-drivers-compatible-Nintendo/dp/B07W7KT2B1  
https://www.amazon.sg/Redragon-GS550-Speakers-Maneuverable-Headphone/dp/B07X3KFV3F  
https://www.amazon.sg/Redragon-GS510-Speakers-Backlight-Easy-Access/dp/B08V1F3TFB  
https://www.amazon.sg/Razer-Leviathan-PC-soundbar-Power-5-0/dp/B0BCCCNHD8  
https://www.amazon.sg/Computer-Speakers-Smalody-Soundbar-Notebook/dp/B08H4T2YPZ  

