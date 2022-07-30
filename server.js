import http from 'node:http'
import {createProduct, deleteProduct, getALlProducts, getProduct , updateProduct} from "./controllers/productController.js";

const server = http.createServer((req , res) => {
    if(req.url === '/products' && req.method === "GET" ){
        //Get all Products
        getALlProducts(req, res)
    }else if (req.url.match(/\/products\/([0-9]+)/) && req.method === "GET"){
        // Get single product
        getProduct(req , res)
    } else if (req.url === '/products' , req.method === "POST"){
        // Create a product
        createProduct(req , res)
    }else if (req.url.match(/\/products\/([0-9]+)/)  && req.method === "DELETE" )  {
        // Delete a products
        deleteProduct(req, res)
    } else if(req.url.match(/\/products\/([0-9]+)/) && req.method === "PUT"){
        // Update product
        updateProduct(req , res)
    } else {
        // not found route
        res.writeHead(404 , {"Content-Type": "application/json"});
        res.write(`{"message" : "Can't find the route"}`)
        res.end()
    }
})

const PORT = process.env.PORT || 5000
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})