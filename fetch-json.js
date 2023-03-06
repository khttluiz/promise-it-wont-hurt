var qhttp = require('q-io/http');

qhttp.read("http://localhost:1337")
  .then(function (json) {
    console.log(JSON.parse(json));
  })
  .catch(function (error) {
    console.error(error);
  })
  .done();
