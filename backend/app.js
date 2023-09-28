import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
//to fix __dirname errors
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express()

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.set('view engine','ejs');

app.get("/",(req,res)=>{
    //console.log("Here");
    //console.log(__dirname);
    res.render(__dirname +"/views/index.ejs");
   
})

app.post("/send",(req,res)=>{
    console.log(req.body.numbers);
})
app.listen(3000)