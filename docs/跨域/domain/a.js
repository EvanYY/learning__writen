let express = require('express');
let app = express();
app.use(express.static(__dirname));
app.listen(3001);
console.log('window.domain success a 3001 ')