# smops

## What it Does
As developers, our worst nightmare is getting a text that says:

> You forgot to run bin webpack after you pushed, and now production is down!

while we are away from our computer. If only there was a way to run terminal commands on the go! 
With SMOPS, developers never have to worry about being away from their keyboard when they realize 
they need to run a command to save production. In short, we just wanted to make a project that would 
make our own lives as developers easier!

SMOPS allows users to send command line instructions to their server over text. If a developer wants 
to use SMOPS, they can simply download SMOPS onto their system, register with their Twillio credentials online, 
and get started sending terminal commands on the go!


## How its Built
[Image of Technologies](file:///Users/theodoremcnulty/Desktop/Screen%20Shot%202021-01-31%20at%2010.35.19%20AM.png)

SMOPS has a React frontend paired with a Flask backend, and uses postgreSQL to store the user's credentials. 
We pair-programmed for most of the hackathon, pooling together our knowledge across the stack to build the final application


## How to Set it up Locally

### Dependencies
The project uses [React](https://reactjs.org/) front-end and [Flask](https://flask.palletsprojects.com/en/1.1.x/) back-end. 
To install the project, your machine must have `python` and `npm` installed.

Now, to install the front-end, nagivate to `/client` folder and run `npm install`; and to install the back-end, navigate to 
`backend/` and run `pip install -r requirements.txt`.

### Database
Once you have installed all the dependencies, let's create the postgres database.

Install postgres on your machine, and then log into postgres via the command line.

Create a new database, connect to it, and then run:
```SQL
CREATE TABLE users (username varchar(50), password varchar(50), email varchar(50), phone_number varchar(20), authentication_sid varchar(50), token varchar(50), PRIMARY KEY(email));
```

### Server
Once you have installed all the dependencies and created your database, let's fire up our servers. To start the React server, run:
```
cd frontend/
npm start
```

To start the Flask server, on a new terminal, run:
```
export FLASK_APP=app.py
flask run
```

Once you have started **both** React and Flask servers, you can use your browser to navigate to `http://localhost:5000/` and start using our app!


## Demo
https://www.youtube.com/watch?v=bR_7K_lLfa0&feature=emb_logo
