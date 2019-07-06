var friendData = require("../data/friends");

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friends);
    console.log
  });

  app.post("/api/friends", function(req, res) {
  });
}
 
 

  