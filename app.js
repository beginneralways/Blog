const express = require('express');
const app = express();
app.use(express.json());



app.get('/', function (req,res){
    res.status(200).json({
        status:200,
        message:"Up and running"

    })
})
const port=3000;

app.listen(port,()=>{
console.log(`app is running on port${port}`)
})