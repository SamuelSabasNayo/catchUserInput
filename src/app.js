import express from "express";
import exphbs from "express-handlebars";
import bodyParser from "body-parser";
import path from "path";

const app = express();

app.get('/', (req, res) => res.send('INDEX'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on PORT ${PORT}`));