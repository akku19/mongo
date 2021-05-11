var express = require('express');

const app = express();

var db = require('./db/connection');

const port = process.env.port || 8080;
const Userinfo = require('./Schema/model');

app.use(express.json());


app.post('/create', async (req,res)=>{
 console.log(req.body);
try {
     const users = new Userinfo(req.body);     
    const created = await  users.save();
    res.send(created);
} catch (error) {
    res.send(error);
}
})

app.get('/getalldata', async (req,res)=>{
    try {
        const allData = await Userinfo.find({});
        res.send(allData);
    } catch (error) {
        res.send(error);
    }
})

app.put('/updatedata/:id',async (req,res)=>{        
    try {
        var id = req.params.id;
        const data = req.body;
        console.log(data);
        const updatedata = await Userinfo.updateOne({_id:id},data);
        res.send(updatedata);
    } catch (error) {
        res.send(error);
    }
})

app.delete('/delete/:id', async (req,res)=>{
    var id = req.params.id;
    try {
        const deleteData = await Userinfo.deleteOne({_id:id});
        res.send(deleteData);
    } catch (error) {
        res.send(error);
    }
})

app.listen(port,()=>{
console.log(`server connected in ${port} port`)
})