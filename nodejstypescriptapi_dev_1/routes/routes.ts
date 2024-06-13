import express, { NextFunction,Request,Response,Errback } from 'express'
import Data,{DataModel} from "../model/model";
const router = express.Router()

router.post('/post',async (req:Request,res:Response,next:NextFunction)=>{

    // res.send("Post Api in Typescript @@@ hi")
    try {

        const data:DataModel = req.body

      
        console.log("Data=>",data)

        var data_collection = await Data.create(data)

        return res.status(res.statusCode).json({ message: "Data created successfully", data:data_collection })





        
    } catch (error:any) {
        return res.status(res.statusCode).json({

            message: error.message

        })
        
    }

})

router.get('/getAll',async (req:Request,res:Response,next:NextFunction)=>{

    // res.send("Get All Api in Typescript @@@ all")

    try {


        var data_collection = await Data.find({})

        return res.status(res.statusCode).json({ message: "All data!", data:data_collection })



        
    } catch (error:any) {

        return res.status(res.statusCode).json({ message: error.message });
        
    }

    
})





router.get('/getOne/:id',async (req:Request,res:Response,next:NextFunction)=>{

  try {
    var data = await Data.findOne({id:req.params.id})

    
    return data? res.status(res.statusCode).json({message:"data found successfully",data}):res.status(404).json({ message: "Not match for this given id" });
  } catch (error:any) {

    return res.status(res.statusCode).json({ message: error.message });
    
  }

})


router.patch('/update/:id',(req:Request,res:Response,next:NextFunction)=>{

    res.send("Update by ID Api in Typescript @@@")

})


router.delete('/delete/:id',(req:Request,res:Response,next:NextFunction)=>{

    res.send("Delete by ID Api in Typescript @@@")

})



export default router


