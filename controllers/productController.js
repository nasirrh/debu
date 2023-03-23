const Product = require("../models/Product");


//get all 
 const product_all =async (req, res)=> {
    try {
        const products = await Product.find();
        res.json(products)
    } catch (error) {
        res.json({message:error})
        
    }
 };

//single 
 const product_details =async (req, res) => {
    try {
        const product = await Product.findById(req.params.productId);
        res.json(product);
    } catch (error) {
         res.json({ message: error });
    }
 };


//add new
  const product_create =async (req, res) => {
    const product = new Product({
        title: req.body.title,
        price: req.body.price,
        image: req.body.image,
        details: req.body.details
    });
     const config = {
       "Content-Type": "application/json",
     };
    
    try {
        const savedProduct = await product.save(config);
        res.send(savedProduct);
    } catch (error) {
        res.status(400).send(error);
    }
  };



//update
 const product_update =async (req, res) => {
    try {
         const product = {
           title: req.body.title,
           price: req.body.price,
           image: req.body.image,
           details: req.body.details
         };
         const updateProduct = await Product.findByIdAndUpdate(
            {_id: req.params.productId}
         ,product);
         res.json(updateProduct);
    } catch (error) {
         res.status(400).send(error);
    }
 };



//delete

 const product_delete =async (req, res) => {
    try {
        const removeProduct = await Product.findByIdAndDelete(req.params.productId);
        res.json(removeProduct);
    } catch (error) {
          res.status(400).send(error);
    }
 };


 module.exports = {
   product_all,
   product_details,
   product_create,
   product_update,
   product_delete,
 };