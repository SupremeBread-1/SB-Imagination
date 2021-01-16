const express = require("express");
const morgan = require("morgan");
// const port = 3000;
const port = process.env.PORT || 3000;

const session = require("express-session");

// const grabbing = require('./utils/fetching');
const authorization = require("./utils/authorization");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");

const app = express();

require("./config/database");
require("dotenv").config();

app.set("view engine", "ejs");

app.use(morgan("dev"));
app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.use(
  session({
    secret: `${process.env.SESSION_SECRET}`,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(authorization.addUserToRequest);

app.use("/", indexRouter);
app.use("/users", usersRouter);

app.listen(port, function () {
  console.log(`Express is listening on port: ${port} but not really...`);
});

// console.log(grabbing);
