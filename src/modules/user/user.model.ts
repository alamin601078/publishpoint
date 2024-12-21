import { model, Schema } from "mongoose";

const userSchema = new Schema({
    name: { type:String , require:true},
    email:{ type:String , require: true},
    password: {type:String,require:true},
    inBlocked:{type:Boolean,require:true}
},{
    timestamps: true
})


const user = model('user',userSchema)
export default user
