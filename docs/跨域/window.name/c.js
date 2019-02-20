let express = require('express');
let app = express();
app.use(express.static(__dirname));
app.listen(3003);
console.log('window.name success c 3003 ')