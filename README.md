# Server-Doctor-Appointment-Booking

<hr/>

### To run the project on your local machine

<ol>
<li>Download the project from the git repository</li>
<li>Add .env file in root directory for the backend which contains</li>

```
PORT=4000
MONGO_URI=YOUR_OWN_MONGODB_URL
JWT_SECRET=YOUR_JWT_SECRET
```

<li>To run the backend, go to root directory in the terminal and execute: npm start</li>

### To access the admin dashboard

<ol>
<li>Download the project from the git repository</li>
<li>You need to create your own MongoDB instance and add the MongoDB url to the .env file</li>
<li>Register on the website and go to your MongoDB and manually change the 'isAdmin' field of the account you want to make admin in the DB to 'true' and then log in back on the site</li>
<li>Now you will be able to access the admin dashboard</li>
</ol>
