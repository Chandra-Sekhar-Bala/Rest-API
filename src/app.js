const express = require("express")
const Employee = require('./DB/models/DataBase')
require("./DB/connection");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/',(req,res)=>{
    res.send('Hello world Devil');   
});

//?/ Let's Give Back to YOU LOL:
app.get('/employee',async(req,res)=>{
    try{
        const data = await Employee.find();
        console.log(data);
        res.send(data).status(201);
    }catch(err){
        res.send(err).status(400);
    }
})
//?/ Get The data and Save it:
app.post('/employee', async(req,res)=>{
    console.log(req.body)
    let data = new Employee(req.body);
    try{
        let responce = await data.save();
    res.send(responce).status(200);
}catch(err){
    res.send(err).status(400);
    }
});

//?/ Updating that part only:
app.patch('/employee/:id', async(req,res)=>{
    // console.log(req.body._id);
    try{
        // const _id = req.params.id;
        let data = await Employee.findByIdAndUpdate(req.params.id, req.body,{new:true});
        console.log(data);
        res.send(data).status(2006);
    }catch(err){
        res.send(err).status(404);
    }
});

//?/ Delete request handeling:
app.delete('/employee/:id',async(req,res)=>{
    try {
        const data = await Employee.findByIdAndDelete(req.params.id);
        console.log(data)
        res.send(data).status(202);
    } catch (error) {
        res.send(err).status(404);
    }

})

app.listen(port,()=>{
    console.log(`Listinig on PORT: ${port}:👻`);
})