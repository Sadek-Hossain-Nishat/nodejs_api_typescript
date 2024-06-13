
import * as mongoose from 'mongoose'
import {Model} from 'mongoose'

export interface DataModel {
  id:{
    type:Number,
    required:true
  };
    name: {
      type: String,
      required: true,
    };
    age: {
      type: Number,
      required: true,
    };
  }



  const DataSchema = new mongoose.Schema({
    id:{
      type:Number,
      required:true
    },

    name: {
        type: String,
        required: true,
      },
      age: {
        type: Number,
        required: true,
      },

  })


  type DataType = DataModel & mongoose.Document

  const Data:Model<DataType> = mongoose.model<DataType>('Data',DataSchema)

  export default Data
