var express = require('express');
var router = express.Router();
var fs = require('fs');

var netHelpers = require('netHelpers');


router.post('/', function (req, res) {

    // We are able to access req.files.file thanks to
    // the multiparty middleware
    var file = req.files.file;
/*    console.log(file.name);
    console.log(file.type);
    console.log(file.path);*/

    var domainFile = fs.readFileSync(file.path.toString(),'utf8')

    netHelpers.performAjaxRequest('localhost', 5500, '/api/DatawakeDomains' + req.url, 'PUT', domainFile ,function (resultObject) {
        if (resultObject.error) {
            res.status(resultObject.error.status).send(resultObject.error.message);
            return;
        }
        res.status(200).send("OK");
    })
});

module.exports = router;