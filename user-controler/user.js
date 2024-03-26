
import User from '../model/user-schema.js'
import Produts from '../model/product-schema.js'


export const userSignup = async(req,res)=>{
    try {

        const email = await User.findOne({Email:req.body.Email})
        if(email){
            res.json({message:'This email olready exist'})
        }


        const user = req.body
        const newUser = new User(user)
        await newUser.save()
        res.json({message:'user created sucessfully'})

    } catch (error) {
        res.json({message:`error in user.js ${error}`})
    }
}

export const userLogin = async(req,res)=>{
    try {
        const fuser = req.body
        const Username = req.body.Username;
        const Passward = req.body.Passward;
        let user = User.findOne({Username:Username,Passward:Passward})
        if(user){
            return res.json({message:`user${Username} login succsfully`,data:fuser})
        }
        else{
            return res.json({message:'this user not exist'})
        }
    } catch (error) {
        res.json({message:'error in userLogin',error:error.message})
    }
}

export const getProduts = async(req,res)=>{
    try {
        const products = await Produts.find({});
        res.json(products)
       
    } catch (error) {
        res.json({message:'error in getting produts',error:error.message})
    }
}

export const getProdutById = async(req,res)=>{
    try {
       const id = req.params.id;
       if(!id){
        console.log(`${id} is not there`)
       }
       const product = await Produts.findOne({'id':id})
       console.log(product)
       res.json(product)
       
    } catch (error) {
        res.json({message:'error in getting produts',error:error.message})
    }
}