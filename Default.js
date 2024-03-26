import { products } from "./constants/data.js";
import Product from "./model/product-schema.js";

const Defaultdata = async ()=>{
    try {
        await Product.insertMany(products)
        console.log('data imported sucessfuly')
        
    } catch (error) {
        console.log(error.massage)
    }
}

export default Defaultdata;