let express = require('express');
let app = express();
app.use(express.static(__dirname));
app.listen(3002);
console.log('window.domain success b 3002 ')