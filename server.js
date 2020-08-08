const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname+'/dist/tic-tac-toe'));
app.get('/*', function(req, res) {
    req.sendFile(path.join(__dirname+'/dist/tic-tac-toe/index.html'));
});
app.listen(process.env.PORT || 8080);
