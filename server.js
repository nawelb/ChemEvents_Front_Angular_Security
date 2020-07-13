
var express = require('express');
var app = express();
app.use(express.static('./dist/myChemApp'));

app.get('/*', function(req, res) {
    res.sendFile('index.html', {root: 'dist/myChemApp/'}
  );
  });
const port=process.env.PORT || 8090;

app.listen(port, function () {
    console.log("http://localhost: "+ port);
});