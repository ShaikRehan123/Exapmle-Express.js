const express = require("express");
const app = express();

app.get("*", (req, res) => {
    res.send({
        message : 'Hello World! , Ohoo vercel can deploy expressjs apps',
    })
});

app.listen(4000);
