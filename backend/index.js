const express = require('express');
const cors = require('cors');
require('./db/config');
let User = require('./db/user');
let Product = require('./db/product');
const app = express();
app.use(express.json());
app.use(cors());

app.post("/register", async (req,resp)=>{
   let user=new User(req.body);
   let result = await user.save();
   result = result.toObject();
   delete result.password;
   resp.send(result);
})

app.post("/login", async (req,resp)=>{
   let user = await User.findOne(req.body).select("-password");
   if(req.body.email && req.body.password){
      if(user){
         resp.send(user)
      }
   }else{
      resp.send({"result":"no user found"})
   }
})

app.post("/add-product", async (req,resp)=>{
   let product = new Product(req.body);
   let result = await product.save();
   resp.send(result);
})

app.get("/products",async (req,resp)=>{
   let products = await Product.find();
   if(products.length>0){
      resp.send(products)
   }else{
      resp.send({result:"no result found"})
   }
})

app.delete("/delete-product/:id", async (req,resp)=>{
   let result = await Product.deleteOne({_id:req.params.id});
   resp.send(result);
})

app.get("/delete-product/:id", async (req,resp)=>{
   let result = await Product.findOne({_id:req.params.id});
   if(result){
      resp.send(result);
   }else{
      resp.send({result:"no response found"});
   }
})

app.put("/product/:id",async (req,resp)=>{
   let result = await Product.updateOne({_id:req.params.id},{$set:req.body});
   if(result){
      resp.send(result)
   }else{
      resp.send({result:"no resp found"})
   }
});

app.get("/search/:key", async(req,resp)=>{
   let result = await Product.find({
      "$or":[
         { name : {$regex : req.params.key}},
         { email : {$regex : req.params.key}},
         { phone : {$regex : req.params.key}}
      ]
   });
   resp.send(result);
});
app.listen(5000);