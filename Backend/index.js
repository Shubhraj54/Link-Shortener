import express from 'express'
const PORT = 4000;
const app = express();
app.get('/',(req,res)=>{
    res.send({message : 'connected'});
})
app.listen(PORT,()=>{
    console.log(`localhost${PORT}`)
})
