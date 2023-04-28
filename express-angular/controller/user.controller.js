const express=require('express')
const router=express.Router();
const Employees=require('../model/employees.model')
const sequelize=require('../confguration/server')
const bcrypt=require('bcryptjs')
let jwt=require('jsonwebtoken');
const { where } = require('sequelize');

// Middleware to verify the JWT
function tokenVerification(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.sendStatus(401);
  
    const token = authHeader.split(' ')[1];
    try {
      const decoded = jwt.verify(token, 'secertKey');
      req.user = decoded;
      next();
    } catch (err) {
      res.status(401).send({error:'Token verification faild'});
    }
  }






router.post('/save',(req,res)=>{
    sequelize.sync().then(async() => {
        console.log('employee table created successfully!5555');
    

     //encryption code
     req.body.password=await bcrypt.hash(req.body.password,10)
     
    
    Employees.create(req.body).then((data)=>{
          res.send(data)
    
    }).catch((err)=>{
        console.error('Failed to create a new record : ', err);
    })  
}).catch((error) => {
    console.error('Unable to create table : ', error);
 });
    
    })

    router.post('/signin',async(req,res)=>{
        console.log(req.body.email);
        console.log(req.body.password)
       let emp= await Employees.findOne({where:{email:req.body.email}})
       if(emp){
        let passwordIsValid= await bcrypt.compare(req.body.password,emp.password)
        if(passwordIsValid){
            var token = jwt.sign({ id: emp.id ,email:emp.email}, "secertKey", 
            {expiresIn: '1h' });
            console.log(token)
            res.send({auth:true,user_id:emp.id,token:token});
          
        }


       }else{
           res.send({error:'invalid login deatils'})

       }
     

    })
    router.get('/getAll',tokenVerification,(req,res)=>{
       Employees.findAll().then((data)=>{
        res.send(data)
       })

    })
    router.get('/findOneUser/:id',async (req,res)=>{
        
        console.log(req.params.id);
        let id=req.params.id;
        let emp= await Employees.findOne({where:{id:id}})  
        res.send(emp);

    })

    router.post('/update/:id',async(req,res)=>{
       let id=req.params.id;
       console.log("upadte id"+id)

       let  emp=await Employees.update(req.body,{where:{id:id}}).then((resp)=>{
        console.log(resp);
        res.send(resp);
       })
       

    })
    router.delete('/delete/:id',async(req,res)=>{
        let id=req.params.id;
          await Employees.destroy({where:{id:id}}).then((response)=>{
            console.log('deleted');
            res.send(response)

        }).catch((err)=>{console.log('canot deleted'+err)})
        
    })



module.exports=router;


