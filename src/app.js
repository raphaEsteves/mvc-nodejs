import express from 'express';

const app = express();
const port = 5500;

app.get('/', (req, res)=>{
    res.send("Hello world!");
})

app.listen(port, ()=> {console.log(`Server ON.\nPort:${port}`)});
