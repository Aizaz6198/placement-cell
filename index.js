const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const app = express();
const port = 8000;
const db = require("./config/mongoose");

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use(express.static('assets'));
app.set('layout extractStyles', true);
app.set('layout extractScript', true);

// used for sessions
const session = require("express-session");
const passport = require("passport");
const passportLocal = require("./config/passport");
const flash = require('connect-flash');
const MongoStore = require("connect-mongo");
const customMware = require("./config/middleware");

app.use(cookieParser());

// set up view engine
app.set("view engine", "ejs");
app.set("views", "./views");

// mongo-store is used to store session cookies in database
app.use(
  session({
    name: "placement_cell",
    secret: "asewe",
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: 1000 * 60 * 100,
    },
    Store: MongoStore.create(
      {
        mongooseConnection: db,
        autoRemove: 'disabled',
        mongoUrl: 'mongodb://127.0.0.1:27017/project1_development'
      },
      function (err) {
        console.log(err || 'connect-mongodb setup is okay');
      }
    )
  }));



app.use(passport.initialize());
app.use(passport.session());


// sets the authenticated user in the response
app.use(passport.setAuthenticatedUser);
// flash messages
app.use(flash());
app.use(customMware.setFlash);



// using express routers
app.use(require("./routes"));

// using bodyParser
app.use(bodyParser.json());

// listening to the port 8000;
app.listen(port, (err) => {
  if (err) {
    console.log("error in starting the server", err);
    return;
  }
  console.log("server is succesfully running on port 8000");
});
