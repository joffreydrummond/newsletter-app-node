const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("Hello World!"));
app.post("/form", (req, res) => {
  console.log(req.body.name)
    console.log(req.body.email)
    
    res.end()
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
