
// this is the model into database 

import mongoose , {Schema} from "mongoose"
const dataSchema = new Schema (
    {
        title : String,
        description : String 
    },
    {
        timestamps : true ,
    }
)

const Data = mongoose.models.Data || mongoose.model("Data", dataSchema)  
                                                      // Data name of the collection 

export default Data; 