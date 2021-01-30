# The Hive Capstone

---------------------------------------------------------------------------------

 Live Demo: 

 Server Repo: 
 
 Client Repo: 
 
user_name: 'demouser',
password: 'demopassworD1!'

---------------------------------------------------------------------------------
## About:

The Hive is a service for musicians that are too busy to do it all. There's production, practicing, mixing, and mastering. Hive is here to help the user utilize the services of our Audio Engineers and Producers. This app will allow users to book a session with the Engineer of their choice through an appointment system.

---------------------------------------------------------------------------------

## Technologies Used

### FrontEnd

   * JavaScript
   * React
   * React-Router

### Backend

   * Postgres
   * NodeJs
   * Express
   * Knex
---------------------------------------------------------------------------------

## Routes


### '/' the Landing page route

![Landing]()

This is the first page users will land on. Where they can see a demo of our site, sign up, and log in.

---------------------------------------------------------------------------------

### '/register' sign up page route

![Register](screenshots/Register.png)

This is where users can sign up in order to get an authenticated JWT to access the entire website.  If they try access another route without an authenticated JWT they will be redirected back to the login page.

---------------------------------------------------------------------------------

### '/login' login page route 

![Login]()

This is where users can login with Username and Password to sign into the app.

---------------------------------------------------------------------------------

### '/dashboard' the dashboard route is private route for signed up users (and demo)

![Landing]()

This is where users are directed after sign up and login. Users now have full access to finding dogwalkers, available times, and make an appointment.

---------------------------------------------------------------------------------

### '/service' the service route is private route for signed up users (and demo)

![Service]()

On this page, users view the prices for dog walking for one dog or multiple dogs.

---------------------------------------------------------------------------------

### '/walkers' the Walkers route is private route for signed up users (and demo)

![Walkers]()

 On this page, users view the available dogwalkers in their area. 

 ---------------------------------------------------------------------------------

### '/booking' the Booking route is private route for signed up users (and demo)

![Booking](screenshots/Booking.png)

 On this page, users select the amount of dogs to walk, and the time they need to be walked and book their appointment.

 --------------------------------------------------------------------------------- 

### '/profile' the Profile route is private route for signed up users 

![Profile](screenshots/Profile.png)

 On this page, users view their profile, which is their selected Time, Walker, and Service.  




