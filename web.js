var express = require('express');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
   car fs = require("fs");
   var buffer = new buffer();

   response.send(buffer.toString("utf-8", fs.readFileSync("index.html")));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
