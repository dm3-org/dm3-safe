import cors from 'cors';
import express from 'express';
import http from 'http';
import path from 'path';


const app = express();
const server = http.createServer(app);

//TODO remove
app.use(cors());


// TODO Get rid as soon as DO deployment is ready
console.log(__dirname)
app.use(express.static(path.join(__dirname, '../build/')));
const port = process.env.PORT || '8080';

server.listen(port, () => {
    console.log("Safe app started ")
    console.log(process.env)
    console.log(process.env)
}
);
