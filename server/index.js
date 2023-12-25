import express from 'express';
import cors from 'cors';
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import https from 'https';
const app = express();
const port = 9000;


app.use(cors());


app.get('/', (req,res)=> { 
    res.send("Hello World");
});

app.listen(port, ()=>{ 
    console.log("Server is listening now on port " + port);
});