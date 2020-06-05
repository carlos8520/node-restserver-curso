// PORT ////////////////////////////////////////////////////////

process.env.PORT = process.env.PORT || 3000;

// ENVIROMENT ////////////////////////////////////////////////////////

process.env.NODE_ENV = process.env.NODE_ENV || "dev";

// DATABASE ////////////////////////////////////////////////////////
let urlDB;

if (process.env.NODE_ENV === "dev") {
  urlDB = "mongodb://localhost:27017/cafe";
} else {
  urlDB = "mongodb://cafe-user:123456ms@ds249035.mlab.com:49035/cafe";
}

process.env.URLDB = urlDB;
