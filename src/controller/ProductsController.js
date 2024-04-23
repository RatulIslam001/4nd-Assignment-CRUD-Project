const ProductsModel = require("../model/ProductsModel")

// create

exports.CreateProduct=(req, res)=>{
    let reqBody = req.body;
    ProductsModel.create(reqBody,(err, data)=>{
        if (err){
            res.status(400).json({status:"Fail", data:err})
        }
        else {
            res.status(200).json({status:"Success", data:data})
        }
    })
}



// Read

exports.ReadProduct=(req, res)=>{
    let Query = {}
    let Projection = "FoodName FoodCode FoodImage FoodCategory QTY Price"
    ProductsModel.find(Query, Projection, (err, data)=>{
        if (err){
            res.status(400).json({status:"Fail", data:err})
        }
        else{
            res.status(200).json({status:"Success", data:data})
        }
    })
}

// Read By Id

exports.ReadProductById=(req, res)=>{
    let id = req.params.id;
    let Query = {_id:id}
    let Projection = "FoodName FoodCode FoodImage FoodCategory QTY Price"
    ProductsModel.find(Query, Projection, (err, data)=>{
        if (err){
            res.status(400).json({status:"Fail", data:err})
        }
        else{
            res.status(200).json({status:"Success", data:data})
        }
    })
}



// Update

exports.UpdateProduct=(req, res)=>{
    let id = req.params.id;
    let Query = {_id:id}
    let reqBody = req.body
    ProductsModel.updateOne(Query, reqBody, (err, data)=>{
        if (err){
            res.status(400).json({status:"Fail", data:err})
        }
        else {
            res.status(200).json({status:"Success", data:data})
        }
    })
}


// Delete

exports.DeleteProduct=(req, res)=>{
    let id = req.params.id
    let Query = {_id:id}
    ProductsModel.deleteOne(Query,(err, data)=>{
        if (err){
            res.status(400).json({status:"Fail", data:err})
        }
        else {
            res.status(200).json({status:"Success", data:data})
        }
    })
}


