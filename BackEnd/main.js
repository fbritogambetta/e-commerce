let express = require("express");
let app = express();

app.get("/", ()=>(req, res){res.json(dat);});

app.listen(3000, ()=> console.log("Server loaded on port 3000"))